import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="About"
        title="What this initiative is and why it exists."
        description="A public framework and pattern library for designing enterprise AI systems beyond chat."
      />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        <div className="prose">
          <h2>Initiative Definition</h2>
          <p>This initiative is a public framework and pattern library for designing enterprise AI systems beyond chat. The term <strong>framework</strong> signals that it helps teams reason about enterprise AI as a system. The term <strong>pattern library</strong> signals that it is practical — providing reusable structures, interaction models, and reference patterns that teams can apply to real product work.</p>
          <p>The phrase <strong>beyond chat</strong> is central. It makes clear that the initiative is not limited to conversational interfaces, assistant panels, or chat-first product logic. It addresses the broader design of enterprise intelligence across workflows, surfaces, modalities, review states, permissions, and levels of autonomy.</p>
          <h2>Mission</h2>
          <p>To create a shared language, reference model, and reusable design library for building enterprise AI systems across workflows, modalities, surfaces, and levels of autonomy.</p>
          <p>Enterprise teams often lack a common vocabulary for discussing how intelligence should behave inside products. Without that shared language, design, product, and engineering conversations remain fragmented. Teams talk about features, models, and interfaces — but not about confidence, review, escalation, orchestration, reversibility, or the conditions under which AI should recommend, guide, or act.</p>
          <h2>Vision</h2>
          <p>To become the category-defining public reference for how enterprise AI products should be designed — across workflows, intelligence layers, modalities, trust models, and future interaction environments.</p>
          <p>This initiative is not a pattern blog, a gallery, or a narrow design resource. It aims to become the reference people use when they need to understand how enterprise AI products should be structured today and how they should evolve as interaction models expand.</p>
          <h2>Public Promise</h2>
          <p><em>A new design language for enterprise AI — spanning patterns, modalities, surfaces, trust, and orchestration.</em></p>
        </div>
        <div>
          <div style={{ background: "var(--color-subtle)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1.5rem", marginBottom: "1rem" }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "1rem" }}>Who this is for</p>
            {["Designers and design leads", "Product managers and product builders", "Engineers building AI systems", "Business stakeholders defining AI strategy"].map((role) => (
              <div key={role} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--color-accent)", marginTop: "7px", flexShrink: 0 }} />
                <p style={{ fontSize: "0.875rem", color: "var(--color-foreground)" }}>{role}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--color-subtle)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "1.5rem", marginBottom: "1rem" }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "1rem" }}>What it is not</p>
            {["A generic AI inspiration gallery", "A chat-only pattern site", "A component library", "A list of AI features"].map((item) => (
              <div key={item} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start", marginBottom: "0.625rem" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--color-muted)", flexShrink: 0 }}>✕</span>
                <p style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "var(--color-accent-light)", border: "1px solid #c7d7fa", borderRadius: "var(--radius-md)", padding: "1.5rem" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--color-foreground)", lineHeight: 1.6 }}>
              <strong>Want to contribute?</strong> Patterns, recipes, examples, and enterprise constraints all follow standard templates.
            </p>
            <Link href="/contribute" style={{ display: "inline-block", marginTop: "0.875rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-accent)", textDecoration: "none" }}>
              Read the contribution guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
