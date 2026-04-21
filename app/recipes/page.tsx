import type { Metadata } from "next";
import Link from "next/link";
import { getAllRecipes } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge, AutonomyBadge } from "@/components/ui/Badge";
import { JOB_LABELS } from "@/lib/taxonomy";

export const metadata: Metadata = {
  title: "Recipes",
};

export default function RecipesPage() {
  const recipes = getAllRecipes();

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="Recipes"
        title="Patterns composed into complete workflows."
        description="A recipe is a named workflow composition: a reusable arrangement of patterns, context requirements, trust controls, autonomy boundaries, and handoff points designed to accomplish a real enterprise job."
      />

      <div
        style={{
          background: "var(--color-subtle)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          padding: "1.25rem 1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
          <strong style={{ color: "var(--color-foreground)" }}>Why recipes matter.</strong>{" "}
          Enterprise AI products rarely succeed through isolated patterns alone. They succeed when patterns are sequenced into workflows that connect understanding, evidence, judgment, action, and control. Recipes describe those compositions clearly and repeatably.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" }}>
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
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
            <div style={{ marginBottom: "0.75rem" }}>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: "0.375rem",
                }}
              >
                Recipe
              </p>
              <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, letterSpacing: "-0.015em", color: "var(--color-foreground)" }}>
                {recipe.title}
              </h3>
            </div>

            <p
              style={{
                fontSize: "0.8125rem",
                fontFamily: "var(--font-mono)",
                color: "var(--color-muted)",
                background: "var(--color-subtle)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                padding: "0.5rem 0.75rem",
                marginBottom: "0.875rem",
                lineHeight: 1.5,
              }}
            >
              {recipe.workflowShape}
            </p>

            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.55, marginBottom: "1rem" }}>
              {recipe.summary}
            </p>

            <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", alignItems: "center" }}>
              <AutonomyBadge level={recipe.autonomyLevel} />
              {recipe.jobs.map((j) => (
                <Badge key={j} variant="muted" size="sm">{JOB_LABELS[j]}</Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
