import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="press fixed top-[max(0.75rem,env(safe-area-inset-top))] right-3 md:top-5 md:right-5 z-[9999] halo w-14 h-14 rounded-full grid place-items-center overflow-hidden bg-surface text-accent shadow-[inset_0_0_0_1px_rgb(var(--c-accent)/0.2),0_8px_24px_-8px_rgb(0_0_0/0.45)] hover:shadow-[inset_0_0_0_1px_rgb(var(--c-accent)/0.55),0_8px_24px_-8px_rgb(0_0_0/0.45)] cursor-pointer"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={theme}
          className="grid place-items-center"
          initial={{ y: 14, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {theme === "dark" ? <Moon size={18} aria-hidden /> : <Sun size={18} aria-hidden />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
