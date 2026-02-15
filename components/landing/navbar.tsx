import Link from "next/link";


export function Navbar() {
  return (
    <nav className="bg-foreground from-background to-muted/20 flex items-center justify-between py-6 px-20">
      <div className="text-xl font-bold text-background">Logo</div>
      <div className=" space-x-4">
        <Link href="#about" className="text-background hover:text-gray-900">
          About
        </Link>
        <Link href="#services" className="text-background hover:text-gray-900">
          Services
        </Link>
        <Link href="#contact" className="text-background hover:text-gray-900">
          Contact
        </Link>
      </div>
    </nav>
  );
}