"use client";
import { useState } from "react";
import { PageHeading } from "@/components/page-heading";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import { contactSettings } from "@/lib/settings/contact";

export default function ContactPage() {
  const [active, setActive] = useState<string | null>(null);

  return <main className="page-shell"><PageHeading title={contactSettings.heading.title} desc={contactSettings.heading.description} /><section className="max-wrap mt-12 grid gap-6 md:grid-cols-3">{contactSettings.contacts.map((contact) => {
    const Icon = getIcon(contact.icon);
    return <a key={contact.name} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} onClick={() => setActive(contact.name)}><Card className={`reveal overflow-hidden transition-all duration-500 hover:-translate-y-2 ${active === contact.name ? contact.colorClass : "bg-white"}`}><div className="flex items-center gap-4"><span className="rounded-base border border-black bg-white p-4 shadow-brutalSm"><Icon /></span><h2 className="font-title text-3xl font-black">{contact.name}</h2></div><div className={`mt-5 grid transition-all duration-500 ${active === contact.name ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><p className="overflow-hidden font-bold">{contactSettings.activeDescription}</p></div></Card></a>;
  })}</section></main>;
}
