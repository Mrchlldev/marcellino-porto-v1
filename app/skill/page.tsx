import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import { skillSettings } from "@/lib/settings/skill";

export default function SkillPage() {
  return <main className="page-shell"><PageHeading title={skillSettings.heading.title} desc={skillSettings.heading.description} /><section className="max-wrap mt-12 grid gap-6 md:grid-cols-3">{skillSettings.skills.map((skill) => {
    const Icon = getIcon(skill.icon);
    return <Card key={skill.title} className="reveal bg-white transition hover:-translate-y-2 hover:bg-main"><Icon className="h-10 w-10" /><h2 className="mt-4 font-title text-2xl font-black">{skill.title}</h2><p className="mt-2 font-bold">{skill.description}</p></Card>;
  })}</section><section className="max-wrap mt-16"><h2 className="reveal font-title text-4xl font-black">{skillSettings.languageTitle}</h2><div className="mt-6 grid grid-cols-3 gap-4">{skillSettings.techs.map((tech) => {
    const Icon = getIcon(tech.icon);
    return <Card key={tech.name} className="reveal flex aspect-square items-center justify-center bg-secondary p-4 text-center transition hover:rotate-3 hover:bg-pop"><Icon className="h-10 w-10 md:h-14 md:w-14" /><span className="sr-only">{tech.name}</span></Card>;
  })}</div></section></main>;
}
