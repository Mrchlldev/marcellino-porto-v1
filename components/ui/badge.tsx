import * as React from "react";
import { cn } from "@/lib/utils";
export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) { return <span className={cn("inline-flex rounded-full border border-black bg-pop px-3 py-1 font-title text-xs font-black uppercase shadow-brutalSm", className)} {...props} />; }
