import Image from "next/image";
import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectSettings } from "@/lib/settings/project";

export default function ProjectPage() {
  return <main className="page-shell"><PageHeading title={projectSettings.heading.title} desc={projectSettings.heading.description} /><section className="max-wrap mt-12 grid gap-6 md:grid-cols-3">{projectSettings.projects.map((project) => <Card key={project.slug} className="reveal overflow-hidden p-0"><div className="border-b border-black bg-white project-img"><Image src={project.image} alt={project.title} width={1200} height={800} className="h-auto w-full object-contain" /></div><div className="p-5"><h2 className="font-title text-2xl font-black">{project.title}</h2><p className="mt-2 font-bold">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div><Button asChild href={`/project/${project.slug}`} className="mt-5 w-full">{projectSettings.cardButtonLabel}</Button></div></Card>)}</section></main>;
}
