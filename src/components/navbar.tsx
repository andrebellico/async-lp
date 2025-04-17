"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#services", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
];

import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full px-4 md:px-20 mt-7 border-[#20211F] border rounded-[50px] border-solid py-4 bg-[#070806] z-50">
      <div className="md:hidden flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={36} priority />
        </Link>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`flex-col md:flex-row md:flex flex justify-between items-center ${
          isOpen ? "flex py-10 gap-10" : "hidden"
        }`}
      >
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={160} height={48} priority />
        </Link>
        <div className="flex flex-row gap-10 font-semibold">
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
        <Button
          className="text-sm"
          variant="transparent"
          href="https://api.whatsapp.com/send/?phone=5511919542750"
        >
          CONTATE-NOS
        </Button>
      </div>
    </nav>
  );
}
