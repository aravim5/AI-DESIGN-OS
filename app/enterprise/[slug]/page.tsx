import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getEnterprise, getAllEnterprise } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";

export async function generateStaticParams() {
  return getAllEnterprise().map((e) => ({ slug: e.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const e = getEnterprise(slug);
    return { title: e.title };
  } catch {
    return {};
  }
}

export default async function EnterpriseItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let item;
  try {
    item = getEnterprise(slug);
  } catch {
    notFound();
  }

  const all = getAllEnterprise();

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
        <Link href="/enterprise" style={{ fontSize: "0.8125rem", color: "var(--color-muted)", textDecoration: "none" }}>
          Enterprise Constraints
        </Link>
        <span style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>›</span>
        <span style={{ fontSize: "0.8125rem", fontWeight: 500 }}>{item.title}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: "4rem" }}>
        <div>
          <PageHeader eyebrow="Enterprise Constraints" title={item.title} description={item.summary} />
          <article className="prose">
            <MDXRemote source={item.content} />
          </article>
        </div>

        <aside style={{ position: "sticky", top: "76px" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.875rem" }}>
            In this section
          </p>
          {all.map((e) => (
            <Link
              key={e.id}
              href={`/enterprise/${e.id}`}
              style={{
                display: "block",
                padding: "0.5rem 0.75rem",
                borderRadius: "var(--radius-sm)",
                fontSize: "0.8125rem",
                fontWeight: e.id === slug ? 600 : 400,
                color: e.id === slug ? "var(--color-accent)" : "var(--color-muted)",
                backgroundColor: e.id === slug ? "var(--color-accent-light)" : "transparent",
                textDecoration: "none",
                marginBottom: "0.125rem",
              }}
            >
              {e.title}
            </Link>
          ))}
        </aside>
      </div>
    </div>
  );
}
