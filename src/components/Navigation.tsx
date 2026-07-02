import { navItems } from "../data/portfolioData";

export function Navigation() {
  return (
    <nav className="py-12 bg-bg-dark">
      <div className="container flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-16">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-accent/60 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] hover:text-accent transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
