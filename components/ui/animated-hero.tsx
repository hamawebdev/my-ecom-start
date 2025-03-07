'use client'
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["buy", "sell", "discover", "grow", "succeed"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-6 md:gap-8 py-8 md:py-10 lg:py-20 items-center justify-center flex-col px-4 md:px-6">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Join thousands of happy sellers <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-3 md:gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Your one-stop shop to</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center px-2 md:px-0">
              Join our thriving marketplace where buying and selling is made simple.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Link href="/seller">
              <Button size="lg" className="gap-4" variant="outline">
                Start Selling <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" className="gap-4">
                Shop Now <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
