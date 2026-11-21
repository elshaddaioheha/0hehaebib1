type SectionMarkProps = {
  index: string;
  kicker: string;
  tone?: "page" | "card";
  className?: string;
};

/** Chapter index used the same way above every section heading. */
export function SectionMark({ index, kicker, tone = "page", className = "" }: SectionMarkProps) {
  const onCard = tone === "card";

  return (
    <div className={`label mb-3 flex items-center gap-3 ${className}`}>
      <span className={`tabular-nums ${onCard ? "text-punch_red-400" : "text-signal"}`}>{index}</span>
      <span className={`h-px w-8 ${onCard ? "bg-ink/35" : "bg-signal/70"}`} aria-hidden="true" />
      <span className={onCard ? "text-ink/55" : "text-accent/50"}>{kicker}</span>
    </div>
  );
}
