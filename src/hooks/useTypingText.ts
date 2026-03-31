import { useEffect, useState } from "react";

export function useTypingText(text: string, speed = 100) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = window.setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i += 1;
      } else {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [speed, text]);

  return displayedText;
}
