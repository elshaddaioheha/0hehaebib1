import { Decoration } from "./Decoration";

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 bg-bg-dark border-t border-accent/5 overflow-hidden">
      <Decoration
        className="absolute inset-0 h-full w-full"
        color="168 218 220"
        fade="bottom"
        intensity={0.12}
        speed={0.5}
      />
      <div className="container relative text-center">
        <h3 className="text-[22vw] font-display leading-none opacity-5 whitespace-nowrap overflow-hidden select-none pointer-events-none uppercase">
          0HEHAEBIB1 • 0HEHAEBIB1
        </h3>
      </div>
    </footer>
  );
}
