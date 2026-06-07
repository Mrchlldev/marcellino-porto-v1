import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import { homeSettings } from "@/lib/settings/home";

function getHeroLineClass(style: string) {
  if (style === "strokeWhite") return "text-stroke-white";
  if (style === "hoverPop") return "transition hover:text-pop hover:drop-shadow-[5px_5px_0_#000]";
  return "";
}

export default function Home() {
  return <main className="page-shell"><section className="max-wrap pt-10"><div className="reveal"><h1 className="brutal-title text-[clamp(3.4rem,13vw,10rem)]">{homeSettings.hero.titleLines.map((line) => <span key={line.text} className={getHeroLineClass(line.style)}>{line.text}<br /></span>)}</h1><p className="mt-8 max-w-2xl text-lg font-bold md:text-2xl">{homeSettings.hero.description}</p><div className="mt-8 flex flex-wrap gap-4">{homeSettings.hero.buttons.map((button) => {
    const Icon = getIcon(button.icon);
    return <Button key={button.label} asChild href={button.href} variant={button.variant as "default" | "secondary" | "outline"}><Icon className="mr-2" />{button.label}</Button>;
  })}</div></div></section><section className="max-wrap mt-24 grid gap-6 md:grid-cols-2">{homeSettings.pageSections.map((item, i) => <Card key={item.href} className={`reveal ${i === 0 ? "md:col-span-2 bg-pop" : i % 2 ? "bg-secondary" : "bg-white"}`}><p className="font-title text-sm font-black uppercase tracking-[.3em]">{homeSettings.sectionEyebrow}</p><h2 className="mt-3 font-title text-4xl font-black uppercase md:text-6xl">{item.title}</h2><p className="mt-3 text-lg font-bold">{item.description}</p><Link href={item.href} className="mt-6 inline-flex font-title font-black uppercase underline decoration-2 underline-offset-4">{homeSettings.moreButtonLabel}</Link></Card>)}</section></main>;
}
