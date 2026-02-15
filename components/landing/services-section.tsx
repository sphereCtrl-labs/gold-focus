"use client";

import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Target01Icon,
  Storage,
  UserMultiple02Icon,
  ChartLineData01Icon,
  SafeIcon,
  CorporateIcon,
  SecurityIcon,
} from "@hugeicons/core-free-icons";

const features = [
  {
    icon: Storage,
    title: "Gold Storage & Vaulting",
    description:
      "Secure, climate-controlled facilities for long-term gold preservation",
  },
  {
    icon: SafeIcon,
    title: "Safe Deposit Boxes",
    description:
      "Private, secure boxes for storing gold, jewelry, documents, and other valuables",
  },
  {
    icon: UserMultiple02Icon,
    title: "Gold Verification & Assaying",
    description:
      "Professional verification and assaying of gold to ensure authenticity and purity.",
  },
  {
    icon: ChartLineData01Icon,
    title: "Gold Purchase & Sales Facilitation",
    description:
      "Assistance with buying or selling gold through trusted channels.",
  },
  {
    icon: CorporateIcon,
    title: "Corporate Gold Storage Solutions",
    description:
      "Secure, professional storage solutions for corporate gold holdings.",
  },
  {
    icon: SecurityIcon,
    title: "24/7 Security Monitoring",
    description:
      "Advanced security systems with 24/7 surveillance and monitoring for your gold holdings.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-b py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              All the services we{" "}
              <span className="text-primary">Render</span>
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
             Your assets are protected with the highest standards of confidentiality and professional care.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <HugeiconsIcon icon={feature.icon} className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}