import Image from "next/image"
import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"

import { SignUpForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
                <SignUpForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/images/shopping-bags.jpg"
          alt="Shopping bags and modern retail concept"
          fill
          priority
          className="object-cover dark:brightness-[0.7]"
          sizes="(min-width: 1024px) 50vw, 0vw"
        />
      </div>
    </div>
  )
}
