"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function ProgressBar() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);
  const hideRef = useRef<number | null>(null);

  const clearTimers = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    if (hideRef.current) window.clearTimeout(hideRef.current);
  };

  const startProgress = () => {
    clearTimers();
    setActive(true);
    setProgress(8);

    timerRef.current = window.setInterval(() => {
      setProgress((value) => value >= 88 ? value : value + Math.max(2, (88 - value) * 0.12));
    }, 120);
  };

  const finishProgress = () => {
    if (!active) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    setProgress(100);
    hideRef.current = window.setTimeout(() => {
      setActive(false);
      setProgress(0);
    }, 280);
  };

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      startProgress();
    };

    const onPopState = () => startProgress();

    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
      clearTimers();
    };
  }, []);

  useEffect(() => {
    finishProgress();
  }, [pathname]);

  return <div className={`fixed left-0 top-0 z-[120] h-1.5 w-full bg-transparent transition-opacity duration-200 ${active ? "opacity-100" : "opacity-0"}`}><div className="h-full border-b border-black bg-pop shadow-[0_2px_0_#000] transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} /></div>;
}
