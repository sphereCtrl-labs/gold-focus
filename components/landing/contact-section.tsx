"use client";

import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { SparklesIcon, ArrowLeftIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { Button } from "../ui/button";

export function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
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
        {showForm ? (
          <ContactForm onBack={() => setShowForm(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center text-background"
          >
            <h1 className="text-3xl text-background font-bold text-center mb-8">
              Ready to Invest?
            </h1>
            <p>
              Get in touch with us today to start your gold investment journey.
            </p>

            <Button
              onClick={() => setShowForm(true)}
              className="mt-6 bg-primary py-6 px-8 cursor-pointer text-white hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ContactForm({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mt-16 text-center text-background"
      >
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-primary/20 border border-primary/30">
          <HugeiconsIcon
            icon={SparklesIcon}
            className="w-16 h-16 mx-auto mb-4 text-primary"
          />
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="mb-6">
            Your message has been sent. Our team will contact you shortly.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", message: "" });
            }}
            variant="outline"
            className="border-background text-background hover:bg-background hover:text-foreground"
          >
            Send Another Message
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-background/70 hover:text-background mb-8 transition-colors"
      >
        <HugeiconsIcon icon={ArrowLeftIcon} className="w-5 h-5" />
        <span>Back</span>
      </button>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-background mb-2">
          Get in Touch
        </h2>
        <p className="text-center text-background/70 mb-8">
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-background"
              >
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-background"
              >
                Email Address <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-background"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-background"
            >
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your investment goals..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary py-6 cursor-pointer text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
