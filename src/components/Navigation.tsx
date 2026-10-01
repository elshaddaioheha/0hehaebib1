import { navItems } from "../data/portfolioData";

export function Navigation() {
  return (
    <nav aria-label="Sections" className="py-6 md:py-12 bg-bg-dark">
      <div className="container flex flex-wrap justify-center gap-x-5 md:gap-x-14">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="group label inline-flex items-center min-h-[44px] text-accent/60 hover:text-accent transition-colors duration-200"
          >
            <span className="link-underline pb-0.5">{item}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
