import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projectSettings } from "@/lib/settings/project";

export function generateStaticParams() {
  return projectSettings.projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectSettings.projects.find((item) => item.slug === slug);
  if (!project) return notFound();

  return <main className="page-shell"><section className="max-wrap reveal"><Link href="/project" className="font-title font-black uppercase underline decoration-2 underline-offset-4">{projectSettings.detailBackLabel}</Link><h1 className="brutal-title mt-6 text-[clamp(3rem,10vw,8rem)]">{project.title}</h1><p className="mt-5 max-w-3xl text-xl font-bold">{project.description}</p></section><section className="max-wrap mt-10 grid gap-6 lg:grid-cols-[1.2fr_.8fr]"><Card className="reveal overflow-hidden p-0"><div className="bg-white project-img"><Image src={project.image} alt={project.title} width={1400} height={900} className="h-auto w-full object-contain" /></div></Card><Card className="reveal bg-secondary"><h2 className="font-title text-3xl font-black">{projectSettings.detailInfoTitle}</h2><p className="mt-4 text-lg font-bold leading-relaxed">{project.content}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div><div className="mt-6 flex flex-wrap gap-3">{project.buttons.map((button) => <Button key={button.label} asChild href={button.href} variant="outline">{button.label}</Button>)}</div></Card></section></main>;
}
