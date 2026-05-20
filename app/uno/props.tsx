type PropsProps = {
  nombre: string
}

export default function Props({ nombre }: PropsProps) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      marginTop: "16px",
      background: "#eef3ff",
      color: "#1d4bb8",
      border: "1px solid #c7d7fa",
      borderRadius: "20px",
      padding: "5px 14px",
      fontSize: "12px",
      fontWeight: 600,
    }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      {nombre}
    </div>
  )
}