import Link from "next/link";

interface CardProps {
  href?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Card({ href, children, style }: CardProps) {
  const base: React.CSSProperties = {
    background: "white",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "1.25rem 1.5rem",
    ...style,
  };

  if (href) {
    return (
      <Link
        href={href}
        style={{
          ...base,
          display: "block",
          textDecoration: "none",
          color: "inherit",
          transition: "border-color 0.15s ease, box-shadow 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 1px 8px rgba(45,91,227,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        {children}
      </Link>
    );
  }

  return <div style={base}>{children}</div>;
}

export function CardGrid({
  children,
  columns = 3,
}: {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
}) {
  const colMap = { 2: "repeat(2, 1fr)", 3: "repeat(3, 1fr)", 4: "repeat(4, 1fr)" };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: colMap[columns],
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
}
