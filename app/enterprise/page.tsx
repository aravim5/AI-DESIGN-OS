import type { Metadata } from "next";
import Link from "next/link";
import { getAllEnterprise } from "@/lib/content";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Enterprise Constraints",
};

export default function EnterprisePage() {
  const items = getAllEnterprise();

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="Enterprise Constraints"
        title="Regulatory, governance, and operational constraints for enterprise AI."
        description="Enterprise AI design does not operate in a vacuum. Regulatory frameworks, organizational policies, and operational realities shape what is permissible, what must be documented, and how autonomous systems can safely be deployed."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={`/enterprise/${item.id}`}
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
            <p style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "-0.015em", marginBottom: "0.375rem" }}>
              {item.title}
            </p>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.55 }}>
              {item.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
