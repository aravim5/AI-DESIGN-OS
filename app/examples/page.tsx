import type { Metadata } from "next";
import Link from "next/link";
import { getAllExamples } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { JOB_LABELS } from "@/lib/taxonomy";

export const metadata: Metadata = {
  title: "Examples",
};

export default function ExamplesPage() {
  const examples = getAllExamples();

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="Examples"
        title="Framework analysis of real enterprise AI scenarios."
        description="Each example applies the seven-layer framework to a specific enterprise AI use case — showing how job, pattern family, modality, surface, autonomy, trust, and context decisions interact."
      />

      <div
        style={{
          background: "var(--color-subtle)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          padding: "1rem 1.25rem",
          marginBottom: "2rem",
          fontSize: "0.8125rem",
          color: "var(--color-muted)",
          lineHeight: 1.6,
        }}
      >
        <strong style={{ color: "var(--color-foreground)" }}>Note:</strong> These examples are framework analyses of representative use cases. They do not represent specific products, companies, or case studies.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
        {examples.map((ex) => (
          <Link
            key={ex.id}
            href={`/examples/${ex.id}`}
            style={{
              display: "block",
              textDecoration: "none",
              background: "white",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "1.5rem",
              color: "inherit",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                }}
              >
                {ex.industry}
              </span>
            </div>
            <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, letterSpacing: "-0.015em", marginBottom: "0.5rem" }}>
              {ex.title}
            </h3>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.55, marginBottom: "1rem" }}>
              {ex.summary}
            </p>
            <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
              {ex.jobs.map((j) => (
                <Badge key={j} variant="muted" size="sm">{JOB_LABELS[j]}</Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
