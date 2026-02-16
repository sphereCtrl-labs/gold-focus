import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { Target01Icon } from "@hugeicons/core-free-icons";

import logo from "@/public/logo.JPG.png";
import Image from "next/image";
import { Button } from "../ui/button";
const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-18 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background">
                <Image src={logo} alt="Logo" width={100} height={40} />
              </div>
              <span className="text-xl font-bold">Imperial Gold Security</span>
            </Link>
            <p className="mb-4 max-w-sm text-sm text-muted-foreground">
              Your trusted partner in gold trading and investment. Secure,
              reliable, and transparent services
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Imperial Gold Security. All rights reserved.
            </p>
          </div>

          {/* Product Links */}
          {/* <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">
              Subscribe to our Newsletter
            </h3>
            <p className="text-muted-foreground text-sm ">
              Stay updated with the latest gold market trends and offers.
            </p>
            <ul className="space-y-2 text-sm"></ul>
          </div>
          <div>
            <input className="border w-70 rounded-4xl px-4 py-2 bg-white"  type="text" placeholder="Enter your email" />
            <Button className="border my-2 w-70 mx-auto py-5">subscribe</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
