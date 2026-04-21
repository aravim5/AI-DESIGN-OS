import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getFoundation, getAllFoundations } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";

export async function generateStaticParams() {
  return getAllFoundations().map((f) => ({ slug: f.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const f = getFoundation(slug);
    return { title: f.title };
  } catch {
    return {};
  }
}

export default async function FoundationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let foundation;
  try {
    foundation = getFoundation(slug);
  } catch {
    notFound();
  }

  const all = getAllFoundations();
  const idx = all.findIndex((f) => f.id === slug);
  const prev = all[idx - 1];
  const next = all[idx + 1];

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
        <Link href="/foundations" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none" }}>
          Foundations
        </Link>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>›</span>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-foreground)", fontWeight: 500 }}>
          {foundation.title}
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: "4rem" }}>
        <div>
          <PageHeader
            eyebrow="Foundations"
            title={foundation.title}
            description={foundation.summary}
          />
          <article className="prose">
            <MDXRemote source={foundation.content} />
          </article>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
            {prev ? (
              <Link href={`/foundations/${prev.id}`} style={{ display: "block", textDecoration: "none", background: "white", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem" }}>
                <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: "0.25rem" }}>← Previous</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>{prev.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/foundations/${next.id}`} style={{ display: "block", textDecoration: "none", background: "white", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1rem 1.25rem", textAlign: "right" }}>
                <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: "0.25rem" }}>Next →</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>{next.title}</p>
              </Link>
            ) : <div />}
          </div>
        </div>

        <aside style={{ position: "sticky", top: "76px" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.875rem" }}>
            In this section
          </p>
          {all.map((f) => (
            <Link
              key={f.id}
              href={`/foundations/${f.id}`}
              style={{
                display: "block",
                padding: "0.5rem 0.75rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.8125rem",
                fontWeight: f.id === slug ? 600 : 400,
                color: f.id === slug ? "var(--color-accent)" : "var(--color-muted)",
                backgroundColor: f.id === slug ? "var(--color-accent-light)" : "transparent",
                textDecoration: "none",
                marginBottom: "0.125rem",
              }}
            >
              {f.title}
            </Link>
          ))}
        </aside>
      </div>
    </div>
  );
}
