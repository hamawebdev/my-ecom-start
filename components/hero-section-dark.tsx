import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  bottomImage?: {
    light: string
    dark: string
  }
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.3,  // reduced opacity for subtlety
  lightLineColor = "#e5e5e5",  // lighter gray
  darkLineColor = "#262626",   // darker gray
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({
    className,
    title = "Build products for everyone",
    subtitle = {
      regular: "Designing your projects faster with ",
      gradient: "modern simplicity.",
    },
    description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
    ctaText = "Browse courses",
    ctaHref = "#",
    bottomImage = {
      light: "https://farmui.vercel.app/dashboard-light.png",
      dark: "https://farmui.vercel.app/dashboard.png",
    },
    gridOptions,
    ...props
  },
  ref,
) => {
  return (
    <div className={cn("relative", className)} ref={ref} {...props}>
      <div className="absolute top-0 z-[0] h-screen w-screen bg-white/50 dark:bg-zinc-950/50 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(0,0,0,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(255,255,255,0.05),rgba(0,0,0,0))]" />
      <section className="relative max-w-full mx-auto z-1">
        <RetroGrid {...gridOptions} />
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 mx-auto text-center">
            <h1 className="text-sm text-gray-800 dark:text-gray-200 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-100 via-zinc-200/40 to-transparent dark:from-zinc-800 dark:via-zinc-800/40 border-[2px] border-zinc-200 dark:border-zinc-800 rounded-3xl w-fit">
              {title}
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>
            <h2 className="text-4xl tracking-tighter font-geist text-zinc-900 dark:text-white mx-auto md:text-6xl">
              {subtitle.regular}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 to-zinc-500 dark:from-white dark:to-zinc-400">
                {subtitle.gradient}
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              {description}
            </p>
            <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#262626_0%,#525252_50%,#262626_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#525252_50%,#ffffff_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-black text-xs font-medium backdrop-blur-3xl">
                  <a
                    href={ctaHref}
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-100 via-zinc-200/30 to-transparent dark:from-zinc-800 dark:via-zinc-700/20 text-zinc-900 dark:text-white border-zinc-200 dark:border-zinc-800 border-[1px] hover:bg-gradient-to-tr hover:from-zinc-200 hover:via-zinc-300/40 hover:to-transparent dark:hover:from-zinc-700 dark:hover:via-zinc-600/30 transition-all sm:w-auto py-4 px-10"
                  >
                    {ctaText}
                  </a>
                </div>
              </span>
            </div>
            {bottomImage && (
              <div className="mt-32 mx-10 relative z-10">
                <img
                  src={bottomImage.light}
                  className="w-full shadow-lg rounded-lg border border-gray-200 dark:hidden"
                  alt="Dashboard preview"
                />
                <img
                  src={bottomImage.dark}
                  className="hidden w-full shadow-lg rounded-lg border border-gray-800 dark:block"
                  alt="Dashboard preview"
                />
              </div>
            )}
          </div>
          </div>
        </section>
      </div>
    )
  }
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
