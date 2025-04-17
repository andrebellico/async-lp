"use client";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navbar";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-black text-white py-12 mt-20 border-t w-full border-neutral-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div>
            <Link href="/" className="block mb-6">
              <Image
                src="/logo.png"
                alt="Logo"
                width={160}
                height={48}
                priority
              />
            </Link>
            <span>
              Transforme sua empresa de uma maneira que você irá se surpreender.
            </span>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/asyncdevelopment/">
                <Instagram
                  size={32}
                  className="text-2xl mt-12 hover:opacity-80 "
                />
              </Link>
              <Link href="https://api.whatsapp.com/send/?phone=5511919542750">
                <FaWhatsapp
                  size={32}
                  className="text-2xl mt-12 hover:opacity-80"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
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
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Contato-nos</p>
            <p> async.contato@gmail.com</p>

            <p className="whitespace-pre-line">+55 (11) 91954-2750</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
