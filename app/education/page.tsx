import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { educationSettings } from "@/lib/settings/education";

export default function EducationPage() {
  return <main className="page-shell"><PageHeading title={educationSettings.heading.title} desc={educationSettings.heading.description} /><section className="max-wrap mt-12 grid gap-6">{educationSettings.steps.map((edu, i) => <Card key={edu.title} className={`reveal relative ml-6 ${i % 2 ? "bg-secondary" : "bg-white"}`}><span className="absolute -left-9 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-black bg-pop font-title font-black shadow-brutalSm">{i + 1}</span><p className="font-title text-sm font-black uppercase tracking-[.25em]">{edu.years}</p><h2 className="mt-2 font-title text-3xl font-black">{edu.title}</h2><p className="mt-2 text-lg font-bold">{edu.description}</p></Card>)}</section></main>;
}
