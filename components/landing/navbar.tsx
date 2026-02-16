import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.JPG.png"
import { LinkButton } from "../ui/link-buttons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Login } from "@hugeicons/core-free-icons";


export function Navbar() {
  return (
    <nav className="bg-background from-background to-muted/20 flex items-center justify-between py-2 px-20">
      <div className="text-xl font-bold text-foreground">
        <Image src={logo} alt="Logo" width={100} height={40} />
      </div>
      <div className=" space-x-4 text-lg font-medium">
        <Link href="#about" className="text-foreground hover:text-primary hover:border-b-2">
          About
        </Link>
        <Link href="#services" className="text-foreground hover:text-primary hover:border-b-2">
          Services
        </Link>
        <Link href="#contact" className="text-foreground hover:text-primary hover:border-b-2">
          Contact
        </Link>
        <LinkButton href="/login" size="lg" className="w-2/5  sm:w-auto">
              Login
              <HugeiconsIcon
                icon={Login}
                className="ml-2 h-2 w-4 transition-transform group-hover:translate-x-1"
              />
            </LinkButton>

      </div>
    </nav>
  );
}