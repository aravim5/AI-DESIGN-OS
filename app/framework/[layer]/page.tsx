import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getFrameworkChapter, getAllFrameworkChapters } from "@/lib/content";
import { FRAMEWORK_LAYER_LABELS, FRAMEWORK_LAYERS } from "@/lib/taxonomy";
import type { FrameworkLayer } from "@/lib/types";
import { PageHeader } from "@/components/ui/PageHeader";
import { Badge } from "@/components/ui/Badge";

export async function generateStaticParams() {
  return FRAMEWORK_LAYERS.map((layer) => ({ layer }));
}

export async function generateMetadata({ params }: { params: Promise<{ layer: string }> }): Promise<Metadata> {
  const { layer } = await params;
  if (!FRAMEWORK_LAYERS.includes(layer as FrameworkLayer)) return {};
  const chapter = getFrameworkChapter(layer);
  return { title: chapter.title };
}

export default async function FrameworkLayerPage({ params }: { params: Promise<{ layer: string }> }) {
  const { layer } = await params;
  if (!FRAMEWORK_LAYERS.includes(layer as FrameworkLayer)) notFound();

  const chapter = getFrameworkChapter(layer);
  const allChapters = getAllFrameworkChapters();
  const currentIndex = allChapters.findIndex((c) => c.id === layer);
  const prev = allChapters[currentIndex - 1];
  const next = allChapters[currentIndex + 1];

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      {/* Breadcrumb */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
        <Link
          href="/framework"
          style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none" }}
        >
          Framework
        </Link>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>›</span>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-foreground)", fontWeight: 500 }}>
          {chapter.title}
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: "4rem", alignItems: "start" }}>
        {/* Main content */}
        <div>
          <PageHeader
            eyebrow={`Framework — Layer ${chapter.order}`}
            title={chapter.title}
            description={chapter.summary}
          />
          <article className="prose">
            <MDXRemote source={chapter.content} />
          </article>

          {/* Prev / Next */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {prev ? (
              <Link
                href={`/framework/${prev.id}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1rem 1.25rem",
                }}
              >
                <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: "0.25rem" }}>← Previous</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-foreground)" }}>
                  {prev.title}
                </p>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/framework/${next.id}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1rem 1.25rem",
                  textAlign: "right",
                }}
              >
                <p style={{ fontSize: "0.6875rem", color: "var(--color-muted)", marginBottom: "0.25rem" }}>Next →</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--color-foreground)" }}>
                  {next.title}
                </p>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* Sidebar */}
        <aside style={{ position: "sticky", top: "76px" }}>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: "var(--color-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.07em",
              marginBottom: "0.875rem",
            }}
          >
            All Layers
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
            {allChapters.map((c) => (
              <Link
                key={c.id}
                href={`/framework/${c.id}`}
                style={{
                  display: "block",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.8125rem",
                  fontWeight: c.id === layer ? 600 : 400,
                  color: c.id === layer ? "var(--color-accent)" : "var(--color-muted)",
                  backgroundColor: c.id === layer ? "var(--color-accent-light)" : "transparent",
                  textDecoration: "none",
                }}
              >
                {c.title}
              </Link>
            ))}
          </nav>

          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              background: "var(--color-subtle)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <p style={{ fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.5rem" }}>Layer tag</p>
            <Badge variant="accent">{FRAMEWORK_LAYER_LABELS[layer as FrameworkLayer]}</Badge>
          </div>
        </aside>
      </div>
    </div>
  );
}
