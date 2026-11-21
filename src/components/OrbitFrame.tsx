import type { ReactNode } from "react";

/** Two counter-rotating rings around a portrait. The photo stays centered inside them. */
export function OrbitFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span className="orbit orbit-a" aria-hidden="true" />
      <span className="orbit orbit-b" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  );
}
