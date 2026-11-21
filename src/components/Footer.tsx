import { Decoration } from "./Decoration";
import { Marquee } from "./Marquee";

const footerLine = ["0hehaebib1", "software", "sound", "0hehaebib1", "software", "sound"] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-accent/5 bg-bg-dark py-10 md:py-16">
      <Decoration
        className="absolute inset-0 h-full w-full"
        color="--c-accent"
        fade="bottom"
        intensity={0.32}
        speed={0.7}
      />
      <div className="relative">
        <Marquee
          items={footerLine}
          duration="48s"
          className="bg-transparent"
          itemClassName="font-display text-[16vw] leading-none text-accent/12 md:text-[11vw]"
        />
      </div>
    </footer>
  );
}
