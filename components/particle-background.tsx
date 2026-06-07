const shapes = ["rounded-full", "", "triangle", "star", "rounded-full", ""];
export function ParticleBackground() {
  return <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">{Array.from({ length: 26 }).map((_, i) => {
    const isTriangle = shapes[i % shapes.length] === "triangle"; const isStar = shapes[i % shapes.length] === "star";
    return <div key={i} className={`absolute border border-black bg-white/40 animate-floaty ${shapes[i % shapes.length]} ${isTriangle ? "h-0 w-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-black bg-transparent" : isStar ? "h-8 w-8 rotate-45" : "h-8 w-8"}`} style={{ left: `${(i * 37) % 100}%`, top: `${(i * 19) % 100}%`, animationDelay: `${i * .25}s`, animationDuration: `${5 + (i % 5)}s` }} />;
  })}</div>;
}
