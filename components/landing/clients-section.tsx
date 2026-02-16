"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "This platform made my experience seamless and enjoyable. The quality of service exceeded my expectations!",
    author: "Sarah Johnson",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    quote:
      "Incredible attention to detail and user experience. The team truly understands what customers need.",
    author: "Michael Chen",
    role: "Tech Lead",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 3,
    quote:
      "Best decision we made this year. The platform has transformed how we work and collaborate.",
    author: "Emma Davis",
    role: "Creative Director",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const profileImages = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=16",
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden border-b bg-linear-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Our Customers Say
            </h2>
            <p className="mb-8 text-muted-foreground md:text-lg">
              Read stories from customers who have transformed
              <br className="hidden sm:block" />
              their experience using our platform
            </p>

       
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-16 flex h-32 items-center justify-center md:h-40"
          >
            {profileImages.map((image, index) => {
              const total = profileImages.length;
              const angle = (index / (total - 1)) * 140 - 70; 
              const radius = 140;
              const x = Math.sin((angle * Math.PI) / 180) * radius;
              const y = -Math.cos((angle * Math.PI) / 180) * radius * 0.5;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className=""
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-background bg-muted shadow-lg ring-2 ring-primary/20 md:h-16 md:w-16">
                    <img
                      src={image}
                      alt={`Customer ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              );
            })}

            <div className="absolute h-2 w-2 rounded-full bg-primary/30" />
          </motion.div>

          <div className="relative mx-auto max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="px-4"
              >
                <p className="mb-6 text-lg italic text-foreground/90 md:text-xl">
                 { `"${testimonials[currentIndex].quote}"`}
                </p>
                <div className="font-medium">
                  <p className="text-foreground">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"
                aria-label="Previous testimonial"
              >
                
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:bg-muted"
                aria-label="Next testimonial"
              >
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}