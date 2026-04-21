import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getRecipe, getAllRecipes, getAllPatterns } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge, AutonomyBadge, StatusBadge } from "@/components/ui/Badge";
import { JOB_LABELS, SURFACE_LABELS } from "@/lib/taxonomy";

export async function generateStaticParams() {
  return getAllRecipes().map((r) => ({ slug: r.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const r = getRecipe(slug);
    return { title: r.title };
  } catch {
    return {};
  }
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let recipe;
  try {
    recipe = getRecipe(slug);
  } catch {
    notFound();
  }

  const allPatterns = getAllPatterns();
  const usedPatterns = recipe.patterns
    .map((id) => allPatterns.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
        <Link href="/recipes" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none" }}>
          Recipes
        </Link>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>›</span>
        <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{recipe.title}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "4rem" }}>
        <div>
          <PageHeader eyebrow="Recipe" title={recipe.title} description={recipe.summary}>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
              <StatusBadge status={recipe.status} />
              <AutonomyBadge level={recipe.autonomyLevel} />
            </div>
          </PageHeader>

          {/* Workflow shape */}
          <div
            style={{
              background: "var(--color-foreground)",
              color: "white",
              borderRadius: "var(--radius-md)",
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
            }}
          >
            <p style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.5rem" }}>
              Workflow shape
            </p>
            <p style={{ fontSize: "0.9375rem", fontFamily: "var(--font-mono)", color: "white", lineHeight: 1.5 }}>
              {recipe.workflowShape}
            </p>
          </div>

          <article className="prose">
            <MDXRemote source={recipe.content} />
          </article>
        </div>

        <aside style={{ position: "sticky", top: "76px" }}>
          <div style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "1rem" }}>
            <div style={{ padding: "0.875rem 1.25rem", background: "var(--color-subtle)", borderBottom: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                Recipe details
              </p>
            </div>
            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>
                  Autonomy Level
                </p>
                <AutonomyBadge level={recipe.autonomyLevel} />
              </div>
              <div>
                <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>
                  Jobs
                </p>
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {recipe.jobs.map((j) => <Badge key={j} variant="muted" size="sm">{JOB_LABELS[j]}</Badge>)}
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>
                  Surfaces
                </p>
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {recipe.surfaces.map((s) => <Badge key={s} variant="muted" size="sm">{SURFACE_LABELS[s]}</Badge>)}
                </div>
              </div>
            </div>
          </div>

          {usedPatterns.length > 0 && (
            <div style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1.25rem" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.875rem" }}>
                Patterns used
              </p>
              {usedPatterns.map((p) => p && (
                <Link
                  key={p.id}
                  href={`/patterns/${p.id}`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    fontSize: "0.8125rem",
                    color: "var(--color-accent)",
                    fontWeight: 500,
                  }}
                >
                  {p.title}
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
