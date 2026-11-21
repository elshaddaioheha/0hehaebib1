import { motion } from "framer-motion";
import { navItems } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navItems.map((item) => item.toLowerCase());

export function Navigation() {
  const active = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 border-b border-accent/10 bg-bg-dark/80 py-2 backdrop-blur-md md:py-3"
    >
      <div className="container flex flex-wrap justify-center gap-x-5 md:gap-x-12">
        {navItems.map((item) => {
          const id = item.toLowerCase();
          const isActive = active === id;

          return (
            <a
              key={item}
              href={`#${id}`}
              aria-current={isActive ? "true" : undefined}
              className={`group label relative inline-flex min-h-[44px] items-center transition-colors duration-200 ${
                isActive ? "text-accent" : "text-accent/50 hover:text-accent"
              }`}
            >
              <span className="link-underline pb-0.5">{item}</span>
              {isActive && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-x-0 -bottom-0.5 h-px bg-signal"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
