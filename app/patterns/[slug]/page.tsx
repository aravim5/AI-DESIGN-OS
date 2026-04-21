import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPattern, getAllPatterns } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge, RiskBadge, StatusBadge, TrustBadge, AutonomyBadge } from "@/components/ui/Badge";
import {
  PATTERN_FAMILY_LABELS,
  JOB_LABELS,
  MODALITY_LABELS,
  SURFACE_LABELS,
} from "@/lib/taxonomy";

export async function generateStaticParams() {
  return getAllPatterns().map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const pattern = getPattern(slug);
    return { title: pattern.title };
  } catch {
    return {};
  }
}

export default async function PatternPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let pattern;
  try {
    pattern = getPattern(slug);
  } catch {
    notFound();
  }

  const allPatterns = getAllPatterns();
  const related = pattern.relatedPatterns
    .map((id) => allPatterns.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
        <Link href="/patterns" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none" }}>
          Patterns
        </Link>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>›</span>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-foreground)", fontWeight: 500 }}>
          {pattern.title}
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "4rem", alignItems: "start" }}>
        {/* Main */}
        <div>
          <PageHeader
            eyebrow={PATTERN_FAMILY_LABELS[pattern.patternFamily]}
            title={pattern.title}
            description={pattern.summary}
          >
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <StatusBadge status={pattern.status} />
              <RiskBadge level={pattern.enterpriseRisk} />
              <AutonomyBadge level={pattern.autonomyLevel} />
              <TrustBadge level={pattern.trustLevel} />
            </div>
          </PageHeader>

          <article className="prose">
            <MDXRemote source={pattern.content} />
          </article>

          {/* Related patterns */}
          {related.length > 0 && (
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: "1rem",
                }}
              >
                Related Patterns
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {related.map((p) => p && (
                  <Link
                    key={p.id}
                    href={`/patterns/${p.id}`}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      background: "white",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.875rem 1rem",
                      flex: "1",
                      minWidth: "160px",
                    }}
                  >
                    <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {PATTERN_FAMILY_LABELS[p.patternFamily]}
                    </p>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-foreground)" }}>
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "76px" }}>
          <div
            style={{
              background: "white",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid var(--color-border)", background: "var(--color-subtle)" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                Pattern details
              </p>
            </div>

            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <MetaRow label="Pattern Family">
                <Badge variant="default">{PATTERN_FAMILY_LABELS[pattern.patternFamily]}</Badge>
              </MetaRow>

              <MetaRow label="Jobs">
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {pattern.jobs.map((j) => (
                    <Badge key={j} variant="muted" size="sm">{JOB_LABELS[j]}</Badge>
                  ))}
                </div>
              </MetaRow>

              <MetaRow label="Modalities">
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {pattern.modalities.map((m) => (
                    <Badge key={m} variant="muted" size="sm">{MODALITY_LABELS[m]}</Badge>
                  ))}
                </div>
              </MetaRow>

              <MetaRow label="Surfaces">
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {pattern.surfaces.map((s) => (
                    <Badge key={s} variant="muted" size="sm">{SURFACE_LABELS[s]}</Badge>
                  ))}
                </div>
              </MetaRow>

              <MetaRow label="Trust Level">
                <TrustBadge level={pattern.trustLevel} />
              </MetaRow>

              <MetaRow label="Autonomy Level">
                <AutonomyBadge level={pattern.autonomyLevel} />
              </MetaRow>

              <MetaRow label="Enterprise Risk">
                <RiskBadge level={pattern.enterpriseRisk} />
              </MetaRow>

              <MetaRow label="Status">
                <StatusBadge status={pattern.status} />
              </MetaRow>
            </div>
          </div>

          {pattern.relatedRecipes.length > 0 && (
            <div
              style={{
                marginTop: "1rem",
                background: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.75rem" }}>
                Used in Recipes
              </p>
              {pattern.relatedRecipes.map((recipeId) => (
                <Link
                  key={recipeId}
                  href={`/recipes/${recipeId}`}
                  style={{
                    display: "block",
                    fontSize: "0.8125rem",
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    padding: "0.375rem 0",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {recipeId.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")} →
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>
        {label}
      </p>
      {children}
    </div>
  );
}
