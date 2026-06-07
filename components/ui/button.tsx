import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; href?: string; variant?: "default" | "secondary" | "outline"; };

export function Button({ className, variant = "default", asChild, href, children, ...props }: Props) {
  const classes = cn("inline-flex items-center justify-center rounded-base border border-black px-5 py-3 font-title text-sm font-black uppercase tracking-wide shadow-brutalSm transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal active:translate-x-1 active:translate-y-1 active:shadow-none", variant === "default" && "bg-main text-black", variant === "secondary" && "bg-secondary text-black", variant === "outline" && "bg-white text-black", className);

  if (asChild && href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) return <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{children}</a>;
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
}
