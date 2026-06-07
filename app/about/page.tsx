import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { aboutSettings } from "@/lib/settings/about";

export default function AboutPage() {
  return <main className="page-shell"><PageHeading title={aboutSettings.heading.title} desc={aboutSettings.heading.description} /><section className="max-wrap mt-12 grid gap-6"><p className="reveal max-w-3xl text-xl font-bold leading-relaxed">{aboutSettings.paragraphs.first}</p><Card className="reveal bg-secondary"><p className="text-xl font-bold leading-relaxed">{aboutSettings.paragraphs.second}</p></Card><Card className="reveal bg-pop"><h2 className="font-title text-5xl font-black tracking-tighter">{aboutSettings.lazyDream.title}</h2><p className="mt-4 text-lg font-bold">{aboutSettings.lazyDream.description}</p></Card><div className="reveal rounded-base border border-black bg-main p-6 shadow-brutal"><p className="typing font-title text-lg font-black md:text-2xl">{aboutSettings.lazyDream.quote}</p></div></section></main>;
}
