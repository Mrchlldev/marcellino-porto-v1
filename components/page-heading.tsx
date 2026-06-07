import { siteSettings } from "@/lib/settings/site";

export function PageHeading({ title, desc }: { title: string; desc: string }) {
  return <section className="max-wrap reveal"><p className="mb-3 font-title text-sm font-black uppercase tracking-[.3em]">{siteSettings.pageHeading.eyebrow}</p><h1 className="brutal-title text-[clamp(3.5rem,13vw,9rem)]">{title}</h1><p className="mt-5 max-w-2xl text-lg font-bold md:text-xl">{desc}</p></section>;
}
