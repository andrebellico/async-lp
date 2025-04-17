"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#services", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
];

import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between absolute items-center w-[1200px] mt-7 border-[#20211F] border rounded-[50px] border-solid py-4 px-20 bg-[#070806]">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={160} height={48} priority />{" "}
      </Link>
      <div className="flex gap-10 font-semibold">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              pathname === link.href ? "text-[#F85B93]" : ""
            } hover:text-gray-300 transition-colors`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Button className="text-sm" variant="transparent">
        CONTATE-NOS
      </Button>
    </nav>
  );
}
