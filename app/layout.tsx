import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { ProgressBar } from "@/components/progress-bar";
import { Providers } from "@/components/providers";
import { siteSettings } from "@/lib/settings/site";

export const metadata: Metadata = {
  title: siteSettings.metadata.title,
  description: siteSettings.metadata.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang={siteSettings.language}><body><ProgressBar /><ParticleBackground /><Header /><Providers>{children}</Providers><Footer /></body></html>;
}
