import { useEffect, useState } from "react";

const CHARACTERS = "01#X@%&$!?<>{}[]";

export function useMorphingText(text: string, duration = 3000, intervalTime = 50) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iterations = 0;
    const totalSteps = duration / intervalTime;
    const increment = text.length / totalSteps;

    const interval = window.setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (!["0", "1", "O"].includes(text[index])) {
              return char;
            }

            if (index < iterations) {
              return text[index];
            }

            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join(""),
      );

      if (iterations >= text.length) {
        window.clearInterval(interval);
      }

      iterations += increment;
    }, intervalTime);

    return () => window.clearInterval(interval);
  }, [duration, intervalTime, text]);

  return displayText;
}
