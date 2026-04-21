import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getExample, getAllExamples, getAllPatterns } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { JOB_LABELS, SURFACE_LABELS } from "@/lib/taxonomy";

export async function generateStaticParams() {
  return getAllExamples().map((e) => ({ slug: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const e = getExample(slug);
    return { title: e.title };
  } catch {
    return {};
  }
}

export default async function ExamplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let example;
  try {
    example = getExample(slug);
  } catch {
    notFound();
  }

  const allPatterns = getAllPatterns();
  const usedPatterns = example.patterns
    .map((id) => allPatterns.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
        <Link href="/examples" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none" }}>
          Examples
        </Link>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>›</span>
        <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{example.title}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "4rem" }}>
        <div>
          <PageHeader
            eyebrow={example.industry}
            title={example.title}
            description={example.summary}
          />
          <article className="prose">
            <MDXRemote source={example.content} />
          </article>
        </div>

        <aside style={{ position: "sticky", top: "76px" }}>
          <div style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "1rem" }}>
            <div style={{ padding: "0.875rem 1.25rem", background: "var(--color-subtle)", borderBottom: "1px solid var(--color-border)" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                Framework summary
              </p>
            </div>
            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>Jobs</p>
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {example.jobs.map((j) => <Badge key={j} variant="muted" size="sm">{JOB_LABELS[j]}</Badge>)}
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>Industry</p>
                <Badge variant="default">{example.industry}</Badge>
              </div>
              <div>
                <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.375rem" }}>Surfaces</p>
                <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                  {example.surfaces.map((s) => <Badge key={s} variant="muted" size="sm">{SURFACE_LABELS[s]}</Badge>)}
                </div>
              </div>
            </div>
          </div>

          {usedPatterns.length > 0 && (
            <div style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1.25rem" }}>
              <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.875rem" }}>
                Patterns referenced
              </p>
              {usedPatterns.map((p) => p && (
                <Link
                  key={p.id}
                  href={`/patterns/${p.id}`}
                  style={{
                    display: "block",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--color-border)",
                    fontSize: "0.8125rem",
                    color: "var(--color-accent)",
                    textDecoration: "none",
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
