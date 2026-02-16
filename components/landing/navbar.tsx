import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.JPG.png"


export function Navbar() {
  return (
    <nav className="bg-background from-background to-muted/20 flex items-center justify-between px-20">
      <div className="text-xl font-bold text-foreground">
        <Image src={logo} alt="Logo" width={100} height={40} />
      </div>
      <div className=" space-x-4">
        <Link href="#about" className="text-foreground hover:text-gray-900">
          About
        </Link>
        <Link href="#services" className="text-foreground hover:text-gray-900">
          Services
        </Link>
        <Link href="#contact" className="text-foreground hover:text-gray-900">
          Contact
        </Link>
      </div>
    </nav>
  );
}