type MarqueeProps = {
  items: readonly string[];
  className?: string;
  itemClassName?: string;
  duration?: string;
};

/**
 * Two identical rows, translated by half the track, so the loop has no seam.
 * Pauses on hover so the line can actually be read.
 */
export function Marquee({
  items,
  className = "",
  itemClassName = "label text-accent/70",
  duration = "36s",
}: MarqueeProps) {
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div className="marquee-track" style={{ animationDuration: duration }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item, i) => (
              <span key={`${copy}-${item}-${i}`} className={`inline-flex items-center gap-6 px-6 ${itemClassName}`}>
                <span className="h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
