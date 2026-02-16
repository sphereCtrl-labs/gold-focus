"use client";

import { motion, useInView, useSpring, useMotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  TradeUpIcon,
  UserGroupIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";

function extractNumber(title: string): { value: number; suffix: string } {
  const match = title.match(/^([0-9.,]+)(.*)$/);
  if (match) {
    const numStr = match[1].replace(/,/g, "");
    let suffix = match[2];
    let value = parseFloat(numStr);
    
    if (suffix.toLowerCase().startsWith("m")) {
      value = value * 1000000;
      suffix = "M" + suffix.substring(1);
    }
    else if (suffix.toLowerCase().startsWith("k")) {
      value = value * 1000;
      suffix = "K" + suffix.substring(1);
    }
    
    return { value, suffix };
  }
  return { value: 0, suffix: title };
}

function AnimatedNumber({ title }: { title: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { value, suffix } = extractNumber(title);
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 50,
    duration: 2,
  });
  
  const [displayText, setDisplayText] = useState<string>(title);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      let formatted: string;
      if (value >= 1000000) {
        formatted = (latest / 1000000).toFixed(0);
      } else if (value >= 1000) {
        formatted = Math.round(latest).toLocaleString();
      } else {
        formatted = Math.round(latest).toString();
      }
      setDisplayText(formatted + suffix);
    });
    return unsubscribe;
  }, [springValue, value, suffix]);

  return (
    <h3 
      ref={ref}
      className="text-4xl font-semibold mb-2 text-primary group-hover:text-orange-600 transition-colors"
    >
      {displayText}
    </h3>
  );
}

const benefits = [
  {
    icon: TradeUpIcon,
    title: "15 years",
    description: "Over 15 years of experience in the gold trading industry.",
  },
  {
    icon: UserGroupIcon,
    title: "9100+",
    description:
      "Happy customers who have trusted us with their gold investments.",
  },
  {
    icon: SparklesIcon,
    title: "128",
    description:
      "Licensed Staff with expertise in gold trading and investment management.",
  },
  {
    icon: SparklesIcon,
    title: "80M+",
    description:
      " Assets under management, ensuring the safety and growth of your investments.",
  },
];

export function StateSection() {
  return (
    <section
    id="about"
      className="py-24 px-4 relative"
      style={{
        backgroundImage: "url(/img/gold-vault.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-foreground/95 dark:bg-foreground/90" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-background md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-primary">
              Us
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className=" ">
                <AnimatedNumber title={benefit.title} />
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
            <HugeiconsIcon
              icon={SparklesIcon}
              className="w-5 h-5 text-orange-600"
            />
            <p className="text-sm font-medium text-orange-900 dark:text-orange-100">
              Join thousands of users already achieving their goals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
