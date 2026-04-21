interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-border)",
        paddingBottom: "2.5rem",
        marginBottom: "3rem",
      }}
    >
      {eyebrow && (
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            color: "var(--color-accent)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "0.75rem",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h1
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
          color: "var(--color-foreground)",
          marginBottom: description ? "1rem" : 0,
        }}
      >
        {title}
      </h1>
      {description && (
        <p
          style={{
            fontSize: "1.0625rem",
            color: "var(--color-muted)",
            lineHeight: 1.6,
            maxWidth: "64ch",
            marginBottom: children ? "1.5rem" : 0,
          }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}

export function SectionHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div style={{ marginBottom: "1.75rem" }}>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          marginBottom: description ? "0.375rem" : 0,
        }}
      >
        {title}
      </h2>
      {description && (
        <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
          {description}
        </p>
      )}
    </div>
  );
}
