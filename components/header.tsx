"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteSettings } from "@/lib/settings/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <>
    <header className={`fixed left-1/2 top-5 z-50 w-[min(1120px,calc(100%-2rem))] -translate-x-1/2 transition-all ${scrolled ? "rounded-base border border-black bg-white/90 p-3 shadow-brutal backdrop-blur" : "p-3"}`}>
      <nav className="flex items-center justify-between"><Link href="/" className="font-title text-2xl font-black tracking-tighter">{siteSettings.shortBrand}</Link><button onClick={() => setOpen(true)} className="rounded-base border border-black bg-main p-3 shadow-brutalSm transition hover:-translate-y-1" aria-label={siteSettings.header.menuLabel}><Menu /></button></nav>
    </header>
    <div className={`fixed inset-0 z-[80] bg-black/30 transition ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setOpen(false)} />
    <aside className={`fixed right-0 top-0 z-[90] h-full w-[min(92vw,760px)] border-l border-black bg-main p-8 shadow-[-10px_0_0_#000] transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex items-center justify-between"><span className="font-title text-3xl font-black">{siteSettings.header.menuLabel}</span><button onClick={() => setOpen(false)} className="rounded-full border border-black bg-white p-3 shadow-brutalSm" aria-label={siteSettings.header.menuLabel}><X /></button></div>
      <div className="mt-12 grid gap-5">{siteSettings.navigation.map((item, i) => <Link key={item.href} onClick={() => setOpen(false)} href={item.href} className={`font-title text-[clamp(2.8rem,10vw,7rem)] font-black uppercase leading-none transition hover:translate-x-4 ${i % 2 ? "text-stroke-black" : "text-black"}`}>{item.label}</Link>)}</div>
    </aside>
  </>;
}
