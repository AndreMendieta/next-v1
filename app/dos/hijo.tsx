import type { ReactNode } from "react";

type HijoProps = {
  children?: ReactNode;
};

export default function Hijo({ children }: HijoProps) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      marginTop: "16px",
      background: "rgba(255,255,255,0.15)",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: "20px",
      padding: "5px 14px",
      fontSize: "12px",
      fontWeight: 600,
      color: "white",
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
      este es mi hijo {children}
    </div>
  );
}