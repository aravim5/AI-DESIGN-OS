import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "Contribute" };

const CONTENT_TYPES = [
  {
    type: "Pattern",
    description: "A reusable interaction model with defined structure, states, trust controls, and failure modes.",
    fields: ["Name", "Pattern family", "Jobs", "Modalities", "Surfaces", "Trust level", "Autonomy level", "Risk tier", "When to use / not to use", "Interaction anatomy", "Pattern states", "Failure modes"],
    link: "/patterns",
  },
  {
    type: "Recipe",
    description: "A named workflow composition — a reusable arrangement of patterns designed to accomplish a real enterprise job.",
    fields: ["Name", "Workflow shape (single line)", "Primary patterns", "Trust and autonomy levels", "Inputs and outputs", "Failure modes", "Related recipes"],
    link: "/recipes",
  },
  {
    type: "Example",
    description: "A framework analysis of an enterprise AI use case — showing how the seven layers apply in practice.",
    fields: ["Title", "Industry", "Framework analysis table (all 7 layers)", "Design decisions", "Trust requirements", "Failure modes"],
    link: "/examples",
  },
  {
    type: "Enterprise Constraint",
    description: "A regulatory, governance, or operational constraint that shapes enterprise AI design decisions.",
    fields: ["Title", "Relevant regulatory context", "Design implications", "Practical checklist"],
    link: "/enterprise",
  },
];

export default function ContributePage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="Contribute"
        title="Help build the reference."
        description="This is a public initiative. Patterns, recipes, examples, and enterprise constraints all follow standard templates so contributions can be reviewed and integrated consistently."
      />

      {/* Principles */}
      <div style={{ background: "var(--color-foreground)", color: "white", borderRadius: "var(--radius-lg)", padding: "2rem 2.5rem", marginBottom: "3rem" }}>
        <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.25rem" }}>Contribution Principles</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
          {[
            { title: "Real over hypothetical", body: "Patterns should describe interaction structures that have been applied or could be applied in real enterprise products. Speculation is welcome in the experimental tier." },
            { title: "Reusable over specific", body: "A pattern or recipe should work across industries and products, even when illustrated with a specific domain example." },
            { title: "Trust built in", body: "Every contribution must address trust requirements, failure modes, and governance implications. These are not optional fields." },
          ].map((p) => (
            <div key={p.title}>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem", color: "white" }}>{p.title}</p>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What you can contribute */}
      <h2 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>What you can contribute</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "3rem" }}>
        {CONTENT_TYPES.map((ct) => (
          <div key={ct.type} style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <span style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                {ct.type}
              </span>
              <Link href={ct.link} style={{ fontSize: "0.75rem", color: "var(--color-muted)", textDecoration: "none" }}>
                View existing →
              </Link>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.55, marginBottom: "1rem" }}>
              {ct.description}
            </p>
            <div>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>Required fields</p>
              <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                {ct.fields.map((f) => (
                  <span key={f} style={{ fontSize: "0.6875rem", background: "var(--color-subtle)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", padding: "0.125rem 0.5rem", color: "var(--color-muted)" }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <h2 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>Contribution process</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {[
          { step: "01", title: "Choose a content type", body: "Decide whether you are contributing a pattern, recipe, example, or enterprise constraint. Review existing entries to avoid duplication." },
          { step: "02", title: "Follow the template", body: "Each content type has a required structure. Use the standard fields — do not omit trust requirements, failure modes, or anti-patterns." },
          { step: "03", title: "Write for reuse", body: "Keep domain examples illustrative, not defining. A pattern should work in financial services and in healthcare even if you discovered it in one domain." },
          { step: "04", title: "Submit for review", body: "Contributions are reviewed for structural completeness, factual accuracy, and reusability before publication." },
        ].map((s) => (
          <div key={s.step} style={{ display: "grid", gridTemplateColumns: "3rem 1fr", gap: "1.25rem", alignItems: "start", background: "white", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1.25rem 1.5rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.04em" }}>{s.step}</span>
            <div>
              <p style={{ fontSize: "0.9375rem", fontWeight: 600, marginBottom: "0.25rem" }}>{s.title}</p>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.55 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
