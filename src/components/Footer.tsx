import { Decoration } from "./Decoration";

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 bg-bg-dark border-t border-accent/5 overflow-hidden">
      <Decoration
        className="absolute inset-0 h-full w-full"
        color="--c-accent"
        fade="bottom"
        intensity={0.32}
        speed={0.7}
      />
      <div className="container relative text-center">
        <div aria-hidden="true" className="text-[22vw] font-display leading-none opacity-5 whitespace-nowrap overflow-hidden select-none pointer-events-none uppercase">
          0HEHAEBIB1 • 0HEHAEBIB1
        </div>
      </div>
    </footer>
  );
}
