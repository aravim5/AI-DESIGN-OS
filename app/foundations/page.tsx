import type { Metadata } from "next";
import Link from "next/link";
import { getAllFoundations } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Foundations",
};

export default function FoundationsPage() {
  const foundations = getAllFoundations();

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="Foundations"
        title="Conceptual grounding for the framework."
        description="The foundational thesis, design language, and principles that the entire framework builds on. Start here to understand why enterprise AI needs a different design approach."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {foundations.map((f, i) => (
          <Link
            key={f.id}
            href={`/foundations/${f.id}`}
            style={{
              display: "grid",
              gridTemplateColumns: "2rem 1fr auto",
              gap: "1.5rem",
              alignItems: "center",
              textDecoration: "none",
              background: "white",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "1.5rem",
              color: "inherit",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--color-muted)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.015em", marginBottom: "0.25rem" }}>
                {f.title}
              </p>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.5 }}>
                {f.summary}
              </p>
            </div>
            <span style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
