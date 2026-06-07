import {
  ArrowRight,
  Atom,
  Braces,
  Code2,
  Database,
  Facebook,
  FileCode,
  FileCode2,
  Github,
  GitBranch,
  Instagram,
  LayoutGrid,
  Mail,
  Music2,
  Paintbrush,
  Palette,
  Send,
  Server,
  Smartphone,
  Sparkles,
  Triangle,
  UploadCloud,
  Wind
} from "lucide-react";

export const iconMap = {
  ArrowRight,
  Atom,
  Braces,
  Code2,
  Database,
  Facebook,
  FileCode,
  FileCode2,
  Github,
  GitBranch,
  Instagram,
  LayoutGrid,
  Mail,
  Music2,
  Paintbrush,
  Palette,
  Send,
  Server,
  Smartphone,
  Sparkles,
  Triangle,
  UploadCloud,
  Wind
};

export type IconName = keyof typeof iconMap;

export function getIcon(name: string) {
  return iconMap[name as IconName] ?? Code2;
}
