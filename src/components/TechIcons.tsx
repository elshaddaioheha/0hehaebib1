import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// 1. JavaScript Logo (Official JS Shield/Square)
export function JavaScriptIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M17.47 18.23c-.32.19-.68.29-1.07.29-.8 0-1.42-.48-1.42-1.5v-3.77h-1.58v-1.25h1.58V9.75c0-1.12.82-1.95 2.12-1.95.42 0 .8.07 1.05.15v1.27c-.17-.06-.41-.09-.67-.09-.59 0-.92.35-.92.93v1.94h1.59v1.25H16.1v3.74c0 .35.15.54.51.54.19 0 .34-.04.47-.1v1.26zM9.54 18.52c-1.39 0-2.3-.64-2.8-1.57l1.09-.72c.31.55.93.97 1.66.97.74 0 1.25-.36 1.25-1.07 0-.71-.56-.95-1.45-1.31-.99-.39-2.07-.84-2.07-2.28 0-1.28 1.04-2.18 2.39-2.18 1.13 0 1.95.48 2.41 1.23l-1.03.7c-.31-.44-.75-.68-1.33-.68-.62 0-1.05.32-1.05.86 0 .61.43.83 1.28 1.17.99.39 2.24.87 2.24 2.39 0 1.48-1.18 2.3-2.61 2.3z"
        fill="#323330"
      />
    </svg>
  );
}

// 2. React Logo (Official Atom)
export function ReactIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <path
        d="M12 7c3.87 0 7 2.24 7 5s-3.13 5-7 5-7-2.24-7-5 3.13-5 7-5zm0-1c-4.42 0-8 2.69-8 6s3.58 6 8 6 8-2.69 8-6-3.58-6-8-6z"
        fill="#61DAFB"
      />
      <path
        d="M12 7c3.87 0 7 2.24 7 5s-3.13 5-7 5-7-2.24-7-5 3.13-5 7-5z"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="0.8"
        transform="rotate(60 12 12)"
      />
      <path
        d="M12 7c3.87 0 7 2.24 7 5s-3.13 5-7 5-7-2.24-7-5 3.13-5 7-5z"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="0.8"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

// 3. Node.js Logo (Official Node Hexagon)
export function NodeIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.02 2C6.49 2 2 6.49 2 12.02c0 5.53 4.49 10.02 10.02 10.02 5.53 0 10.02-4.49 10.02-10.02C22.04 6.49 17.55 2 12.02 2zm1.96 14.86c0 .76-.62 1.38-1.38 1.38h-1.16c-.76 0-1.38-.62-1.38-1.38v-5.26c0-.76.62-1.38 1.38-1.38h1.16c.76 0 1.38.62 1.38 1.38v5.26zm-1.96-7.85c-.65 0-1.18-.53-1.18-1.18 0-.65.53-1.18 1.18-1.18.65 0 1.18.53 1.18 1.18 0 .65-.53 1.18-1.18 1.18z"
        fill="#339933"
        className="hidden" // Just fallback representation
      />
      {/* High-fidelity Hex Node Logo */}
      <path
        d="M12.83 2.17a1.66 1.66 0 00-1.66 0L3.09 6.84A1.66 1.66 0 002.26 8.3v9.4a1.66 1.66 0 00.83 1.44l8.08 4.67a1.66 1.66 0 001.66 0l8.08-4.67a1.66 1.66 0 00.83-1.44V8.3a1.66 1.66 0 00-.83-1.44l-8.08-4.67z"
        fill="#339933"
      />
      <path
        d="M12 21.1a1.27 1.27 0 01-1.27 0L4.1 17.2a1.27 1.27 0 01-.64-1.1V8.3a1.27 1.27 0 01.64-1.1L10.73 3.5a1.27 1.27 0 011.27 0L18.6 7.2a1.27 1.27 0 01.64 1.1v7.8a1.27 1.27 0 01-.64 1.1L12 21.1z"
        fill="#1C1B21"
      />
      <path
        d="M11.64 6.8v10.3l-5-2.9V8.9l5-2.1zm5.72 2.1v5.3l-4.9 2.9V6.8l4.9 2.1z"
        fill="#339933"
      />
    </svg>
  );
}

// 4. Express.js Logo (Clean EX Wordmark / Node Node)
export function ExpressIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#FFFFFF" />
      <text
        x="50%"
        y="65%"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="10"
        fill="#000000"
      >
        EX
      </text>
    </svg>
  );
}

// 5. Supabase Logo (Lightning Bolts Chevron)
export function SupabaseIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.47 11.2h-3.95l2.42-6.52a.79.79 0 00-1.12-.96l-8.52 6.55a.8.8 0 00.49 1.45h3.95l-2.42 6.52a.79.79 0 001.12.96l8.52-6.55a.8.8 0 00-.49-1.45z"
        fill="#3ECF8E"
      />
    </svg>
  );
}

// 6. Firebase Logo (Flame Logo)
export function FirebaseIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.89 17.58L10.38 3.5a1.14 1.14 0 012.08.03l2.25 4.3-10.82 9.75z"
        fill="#FFC24A"
      />
      <path
        d="M16.14 10.35l2.36 4.54a1.07 1.07 0 01-.13 1.25L12 21.6l-8.1-4.02 12.24-7.23z"
        fill="#DD2C00"
      />
      <path
        d="M13.23 6.94L3.89 17.58l9.34-10.64z"
        fill="#FFA000"
      />
      <path
        d="M12 21.6L3.9 17.58a1.07 1.07 0 01-.48-.96V7.47a1.07 1.07 0 011.83-.78L12 13.5l8.75-8.23a1.07 1.07 0 011.8.78v9.15c0 .41-.23.78-.6.96L12 21.6z"
        fill="none"
        stroke="#FFCA28"
        strokeWidth="1.2"
      />
    </svg>
  );
}

// 7. MongoDB Logo (Leaf Logo)
export function MongoDbIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.02 2c-.1-.01-.2.07-.22.18-.32 1.48-1.57 5.03-2.18 6.78-.61 1.75-1.54 3.73-1.54 5.37a3.9 3.9 0 003.88 3.88h.04a3.9 3.9 0 003.88-3.88c0-1.64-.93-3.62-1.54-5.37-.61-1.75-1.86-5.3-2.18-6.78a.2.2 0 00-.22-.18z"
        fill="#47A248"
      />
      <path
        d="M12 2.05v16.14a3.86 3.86 0 003.86-3.88c0-1.64-.93-3.62-1.54-5.37C13.71 7.2 12.43 3.6 12 2.05z"
        fill="#589636"
      />
      <path
        d="M12 1c-.13 0-.25.12-.25.25v21.5c0 .13.12.25.25.25s.25-.12.25-.25v-21.5c0-.13-.12-.25-.25-.25z"
        fill="#3F3F3F"
      />
    </svg>
  );
}

// 8. Docker Logo (Whale and Container Blocks)
export function DockerIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 13.56c.33 1.7 1.83 3.02 3.56 3.02h12.87c.72 0 1.34-.33 1.82-.87.49-.55.77-1.28.77-2.15 0-2.3-2.07-4.17-4.57-4.17h-.79c.07-.27.1-.55.1-.84 0-1.55-1.26-2.8-2.8-2.8h-.79v1.94h-.94V5.7h-.94v1.94h-.94V5.7H9.42v1.94h-.94V5.7H7.54v1.94h-.94V7.64H2v5.92zm3.56 1.48c-.62 0-1.12-.5-1.12-1.12s.5-1.12 1.12-1.12c.62 0 1.12.5 1.12 1.12s-.5 1.12-1.12 1.12z"
        fill="#2496ED"
      />
      {/* Box Containers stacked */}
      <rect x="5.66" y="7.64" width="1.88" height="1.88" fill="#2496ED" rx="0.3" />
      <rect x="8.02" y="7.64" width="1.88" height="1.88" fill="#2496ED" rx="0.3" />
      <rect x="10.38" y="7.64" width="1.88" height="1.88" fill="#2496ED" rx="0.3" />
      <rect x="5.66" y="5.28" width="1.88" height="1.88" fill="#2496ED" rx="0.3" />
      <rect x="8.02" y="5.28" width="1.88" height="1.88" fill="#2496ED" rx="0.3" />
      <rect x="10.38" y="5.28" width="1.88" height="1.88" fill="#2496ED" rx="0.3" />
      <rect x="8.02" y="2.92" width="1.88" height="1.88" fill="#2496ED" rx="0.3" />
      <rect x="10.38" y="2.92" width="1.88" height="1.88" fill="#2496ED" rx="0.3" />
    </svg>
  );
}

// 9. Hedera Logo (Official H Circle)
export function HederaIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.8" />
      <path
        d="M8.5 7v10M15.5 7v10M8.5 11h7M8.5 13h7"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 10. Figma Logo (Official F Multi-color shapes)
export function FigmaIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M8.5 2C6.51 2 5 3.51 5 5.5S6.51 9 8.5 9h3.5V2H8.5z" fill="#F24E1E" />
      <path d="M12 2h3.5C17.49 2 19 3.51 19 5.5S17.49 9 15.5 9H12V2z" fill="#FF7262" />
      <path d="M8.5 9C6.51 9 5 10.51 5 12.5S6.51 16 8.5 16h3.5V9H8.5z" fill="#A259FF" />
      <path d="M12 16h3.5c1.99 0 3.5-1.51 3.5-3.5S17.49 9 15.5 9H12v7z" fill="#1ABC9C" />
      <path d="M8.5 16C6.51 16 5 17.51 5 19.5S6.51 23 8.5 23h3.5v-3.5C12 17.51 10.49 16 8.5 16z" fill="#0ACF83" />
    </svg>
  );
}
