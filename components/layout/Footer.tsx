import Link from "next/link";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: "6rem",
        padding: "3rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "var(--color-accent)",
                borderRadius: "3px",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Enterprise AI Design
            </span>
          </div>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-muted)",
              lineHeight: 1.6,
              maxWidth: "28ch",
            }}
          >
            A public framework and pattern library for designing enterprise AI systems beyond chat.
          </p>
        </div>

        {/* Framework */}
        <div>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: "var(--color-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "0.875rem",
            }}
          >
            Framework
          </p>
          {[
            { label: "Foundations", href: "/foundations" },
            { label: "Architecture", href: "/framework" },
            { label: "Jobs", href: "/framework/jobs" },
            { label: "Patterns", href: "/framework/patterns" },
            { label: "Trust", href: "/framework/trust" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                fontSize: "0.8125rem",
                color: "var(--color-muted)",
                textDecoration: "none",
                marginBottom: "0.5rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Library */}
        <div>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: "var(--color-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "0.875rem",
            }}
          >
            Library
          </p>
          {[
            { label: "All Patterns", href: "/patterns" },
            { label: "Recipes", href: "/recipes" },
            { label: "Modalities", href: "/modalities" },
            { label: "Examples", href: "/examples" },
            { label: "Enterprise", href: "/enterprise" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                fontSize: "0.8125rem",
                color: "var(--color-muted)",
                textDecoration: "none",
                marginBottom: "0.5rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Project */}
        <div>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: "var(--color-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "0.875rem",
            }}
          >
            Project
          </p>
          {[
            { label: "About", href: "/about" },
            { label: "Contribute", href: "/contribute" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                fontSize: "0.8125rem",
                color: "var(--color-muted)",
                textDecoration: "none",
                marginBottom: "0.5rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "2.5rem auto 0",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>
          Enterprise AI Design Framework — public reference for designing intelligent systems beyond chat.
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>
          v1.0
        </p>
      </div>
    </footer>
  );
}
