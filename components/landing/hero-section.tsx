"use client";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Target01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-buttons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
              <HugeiconsIcon icon={Target01Icon} className="h-4 w-4" />
              <span>15+ Years of Experience</span>
            </div>
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Secure Your Future with {" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Gold Investments
            </span>
          </motion.h1>

          <motion.p
            className="mb-8 text-lg text-muted-foreground sm:text-xl md:mb-12 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Trusted & transparent gold trading for a brighter tomorrow. Where your gold rest in saftety
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <LinkButton href="/login" size="lg" className="w-2/5 sm:w-auto">
              Access Vault
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </LinkButton>

            {/* <LinkButton
              href="#features"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              See How It Works
            </LinkButton> */}
          </motion.div>

          <motion.div
            className="mt-12 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p>✨ Secure · Fully Insured Holdings · 99.9% Client Satisfaction</p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}