import Link from "next/link";
import { getIcon } from "@/lib/icons";
import { siteSettings } from "@/lib/settings/site";

export function Footer() {
  return <footer className="border-t-2 border-black bg-white py-10"><div className="max-wrap text-center"><p className="font-title text-xl font-black">{siteSettings.footer.copyright}</p><div className="mt-5 flex justify-center gap-4">{siteSettings.footer.socials.map((social) => {
    const Icon = getIcon(social.icon);
    return <Link key={social.name} href={social.href} aria-label={social.name} className="rounded-base border border-black bg-secondary p-3 shadow-brutalSm transition hover:-translate-y-1 hover:bg-pop"><Icon /></Link>;
  })}</div></div></footer>;
}
