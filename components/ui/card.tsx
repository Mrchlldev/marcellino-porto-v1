import * as React from "react";
import { cn } from "@/lib/utils";
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("rounded-base border border-black bg-white p-6 shadow-brutal", className)} {...props} />; }
