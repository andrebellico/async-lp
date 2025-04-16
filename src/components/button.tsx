import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "transparent";
  href?: string;
}

export function Button({
  className,
  variant = "default",
  href,
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center px-6 py-3 rounded-lg rounded-[50px] text-[16px] transition-all duration-300 ";

  const variants = {
    default:
      "bg-[#F85B93] text-white hover:bg-opacity-50  hover:bg-gray-100  hover:text-[#F85B93] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
    transparent:
      "bg-transparent hover:bg-white text-white hover:text-black hover:bg-white border-white border-solid border-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black",
  };

  return href ? (
    <Link href={href}>
      <button
        className={twMerge(baseStyle, variants[variant], className)}
        {...props}
      />
    </Link>
  ) : (
    <button
      className={twMerge(baseStyle, variants[variant], className)}
      {...props}
    />
  );
}
