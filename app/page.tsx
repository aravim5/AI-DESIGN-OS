import Link from "next/link";
import { FRAMEWORK_LAYER_LABELS, FRAMEWORK_LAYER_SUMMARIES, FRAMEWORK_LAYERS } from "@/lib/taxonomy";
import type { FrameworkLayer } from "@/lib/types";

const LAYER_ICONS: Record<FrameworkLayer, string> = {
  jobs: "◈",
  patterns: "⬡",
  modalities: "◎",
  surfaces: "▣",
  trust: "⬟",
  autonomy: "↝",
  context: "⊙",
};

const PATTERN_PREVIEWS = [
  { title: "Quick Answer", family: "Answer", href: "/patterns/quick-answer" },
  { title: "Evidence-Backed Answer", family: "Answer", href: "/patterns/evidence-backed-answer" },
  { title: "Recommendation List", family: "Recommendation", href: "/patterns/recommendation-list" },
  { title: "Draft and Edit", family: "Creation", href: "/patterns/draft-and-edit" },
  { title: "Approval Checkpoint", family: "Governance", href: "/patterns/approval-checkpoint" },
  { title: "Proactive Signal", family: "Monitoring", href: "/patterns/proactive-signal" },
];

const RECIPE_PREVIEWS = [
  {
    title: "Ask → Evidence → Action",
    description: "Answer, ground it, offer a clear next step.",
    href: "/recipes/ask-evidence-action",
  },
  {
    title: "Signal → Explanation → Approval",
    description: "Detect, explain, pause for human authorization.",
    href: "/recipes/signal-explanation-approval",
  },
  {
    title: "Draft → Review → Send",
    description: "Generate, revise, commit with accountability.",
    href: "/recipes/draft-review-send",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "780px" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "1.25rem",
            }}
          >
            Public Framework &amp; Pattern Library
          </p>
          <h1
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              color: "var(--color-foreground)",
            }}
          >
            A design language for enterprise AI systems, beyond chat.
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--color-muted)",
              lineHeight: 1.65,
              maxWidth: "58ch",
              marginBottom: "2.5rem",
            }}
          >
            Enterprise AI design = Job × Pattern Family × Modality × Surface, shaped by Context, calibrated by Autonomy, and bounded by Trust and Governance.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/framework"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                backgroundColor: "var(--color-accent)",
                color: "white",
                textDecoration: "none",
                padding: "0.625rem 1.25rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Explore the Framework →
            </Link>
            <Link
              href="/patterns"
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "white",
                color: "var(--color-foreground)",
                textDecoration: "none",
                padding: "0.625rem 1.25rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.875rem",
                fontWeight: 500,
                border: "1px solid var(--color-border)",
              }}
            >
              Browse Patterns
            </Link>
          </div>
        </div>
      </section>

      {/* Seven-layer grid */}
      <section style={{ backgroundColor: "var(--color-foreground)", color: "white", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              Framework Architecture
            </p>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "white",
                maxWidth: "40ch",
              }}
            >
              Seven layers. Each answers a distinct design question.
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "0.625rem",
            }}
          >
            {FRAMEWORK_LAYERS.map((layer, i) => (
              <Link
                key={layer}
                href={`/framework/${layer}`}
                style={{
                  textDecoration: "none",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem 1rem",
                  display: "block",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.06em",
                    marginBottom: "0.875rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "white", marginBottom: "0.375rem", lineHeight: 1.3 }}>
                  {FRAMEWORK_LAYER_LABELS[layer]}
                </p>
                <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                  {FRAMEWORK_LAYER_SUMMARIES[layer]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Patterns preview */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
          <div>
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "var(--color-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              Pattern Library
            </p>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>
              15 reusable interaction patterns
            </h2>
          </div>
          <Link href="/patterns" style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--color-accent)", textDecoration: "none" }}>
            View all →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.875rem" }}>
          {PATTERN_PREVIEWS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              style={{
                display: "block",
                textDecoration: "none",
                background: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 500,
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  display: "block",
                  marginBottom: "0.375rem",
                }}
              >
                {p.family}
              </span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
                {p.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recipes strip */}
      <section
        style={{
          backgroundColor: "var(--color-subtle)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          padding: "5rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem" }}>
            <div>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.5rem",
                }}
              >
                Recipes
              </p>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.025em" }}>
                Patterns composed into workflows
              </h2>
            </div>
            <Link href="/recipes" style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--color-accent)", textDecoration: "none" }}>
              View all →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.875rem" }}>
            {RECIPE_PREVIEWS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                }}
              >
                <p style={{ fontSize: "0.9375rem", fontWeight: 600, letterSpacing: "-0.01em", color: "var(--color-foreground)", marginBottom: "0.5rem" }}>
                  {r.title}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
                  {r.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
          {[
            {
              number: "01",
              title: "Framework-led and library-led",
              body: "Seven conceptual layers give you the model. Fifteen patterns give you the material. Recipes show you how to combine them for real enterprise work.",
            },
            {
              number: "02",
              title: "Trust and governance built in",
              body: "Every pattern documents its trust requirements, risk tier, and autonomy level. Governance is not an afterthought here — it is part of the pattern.",
            },
            {
              number: "03",
              title: "Beyond chat, beyond components",
              body: "Organized by jobs and pattern families. Modalities are a cross-cutting filter, not the top-level taxonomy. Not a component library. Not an inspiration gallery.",
            },
          ].map((item) => (
            <div key={item.number}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: "0.875rem",
                }}
              >
                {item.number}
              </span>
              <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, letterSpacing: "-0.015em", marginBottom: "0.625rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
        <div
          style={{
            background: "var(--color-accent-light)",
            border: "1px solid #c7d7fa",
            borderRadius: "var(--radius-lg)",
            padding: "3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "1.375rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--color-foreground)", marginBottom: "0.5rem" }}>
              Built to be contributed to.
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", maxWidth: "48ch" }}>
              Patterns, recipes, examples, and enterprise constraints all follow standard templates. Suggest a pattern, submit a recipe, or translate to a new domain.
            </p>
          </div>
          <Link
            href="/contribute"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "var(--color-accent)",
              color: "white",
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "var(--radius-sm)",
              fontSize: "0.875rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            How to contribute →
          </Link>
        </div>
      </section>
    </div>
  );
}
