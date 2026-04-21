import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { MODALITY_LABELS, SURFACE_LABELS } from "@/lib/taxonomy";

export const metadata: Metadata = {
  title: "Modalities & Surfaces",
};

const MODALITY_DETAILS = [
  {
    id: "text",
    label: "Text",
    description: "The foundation of enterprise AI output. Explanations, drafts, structured answers, notes, and records. Best when content needs to be read, reviewed, cited, or edited.",
    contexts: ["Knowledge work", "Drafting", "Compliance records", "Search and retrieval"],
    reviewability: "High",
    glanceability: "Medium",
  },
  {
    id: "voice",
    label: "Voice / Audio",
    description: "Spoken interaction and audio output. Best for mobile and field contexts, hands-free work, and time-constrained briefings. Must include visual or text alternatives for review.",
    contexts: ["Field operations", "Mobile briefings", "Accessibility", "Conversational interfaces"],
    reviewability: "Low without transcript",
    glanceability: "N/A",
  },
  {
    id: "data-visualization",
    label: "Data & Visualization",
    description: "Charts, graphs, tables, and dashboards. Best for trends, comparisons, distributions, and monitoring. Cannot be substituted by text when pattern recognition matters.",
    contexts: ["Performance dashboards", "Portfolio analysis", "Risk monitoring", "Forecasting"],
    reviewability: "High",
    glanceability: "High",
  },
  {
    id: "vision",
    label: "Vision / Image",
    description: "Processing and generating images, documents, and visual content. Best for document intake, scanned forms, visual inspection, and multimodal capture workflows.",
    contexts: ["Document processing", "Field inspection", "Form intake", "Visual review"],
    reviewability: "Medium",
    glanceability: "High",
  },
  {
    id: "code",
    label: "Code",
    description: "Technical output: scripts, configurations, structured transformations, and API integrations. Requires review before execution in any consequential workflow.",
    contexts: ["Developer tools", "Configuration generation", "Data transformation", "Automation"],
    reviewability: "High",
    glanceability: "Low",
  },
  {
    id: "multimodal",
    label: "Multimodal",
    description: "Deliberate combinations where each modality contributes distinct value. Not redundant repetition of the same content in different forms. Each mode should earn its presence.",
    contexts: ["Complex analysis", "Meeting prep", "Multimodal capture", "Rich briefings"],
    reviewability: "Varies by combination",
    glanceability: "Varies by combination",
  },
  {
    id: "ambient",
    label: "Ambient",
    description: "Background intelligence with minimal or no visible UI. Status indicators, passive monitoring cues, low-interruption signals. The system is present without demanding attention.",
    contexts: ["Background monitoring", "Status awareness", "Passive alerts", "Zero-UI systems"],
    reviewability: "Low",
    glanceability: "Very high",
  },
  {
    id: "spatial",
    label: "Spatial",
    description: "Immersive and 3D interaction environments. Future-facing: relationship visualization, multi-entity layouts, visionOS and XR contexts. Emerging in enterprise settings.",
    contexts: ["Relationship mapping", "Complex system visualization", "Spatial computing", "XR enterprise"],
    reviewability: "Medium",
    glanceability: "High",
  },
];

const SURFACE_DETAILS = [
  { id: "inline", label: "Inline", description: "Embedded within the current object or field. Preserves flow. Zero navigation cost." },
  { id: "sidebar", label: "Sidebar / Drawer", description: "Adjacent persistent panel. Depth without leaving context. Canonical form for contextual assistants." },
  { id: "overlay", label: "Overlay / Dialog", description: "Temporary layer above the current view. For focused decisions, approvals, and quick comparisons." },
  { id: "workspace", label: "Workspace", description: "Dedicated space for deep, orchestrated work. Justifies a full context shift. Multi-step, multi-source." },
  { id: "feed-stream", label: "Feed / Stream", description: "Scrollable list of evolving signals and updates. Awareness without interruption. Scanning posture." },
  { id: "notification", label: "Notification", description: "Push-style interrupt. Reserve for genuinely urgent or time-sensitive signals. High cost if overused." },
  { id: "ambient", label: "Ambient Layer", description: "Background presence without visible UI. Passive monitoring. Zero interruption. Status-only communication." },
  { id: "spatial", label: "Spatial", description: "Immersive 3D environments. Relationship and system visualization. Future-facing in enterprise settings." },
];

export default function ModalitiesPage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="Modalities & Surfaces"
        title="Form and placement — two orthogonal decisions."
        description="Modality defines how intelligence is expressed. Surface defines where it appears. These are separate design choices. A chart (modality) can live in a sidebar, a workspace, or a notification (surface)."
      />

      {/* Key distinction callout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            background: "var(--color-foreground)",
            color: "white",
            borderRadius: "var(--radius-md)",
            padding: "1.75rem",
          }}
        >
          <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            Modality
          </p>
          <p style={{ fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.3, marginBottom: "0.625rem" }}>
            The expressive form through which intelligence is delivered.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            Text, voice, data visualization, image, code, multimodal, ambient, spatial.
          </p>
        </div>
        <div
          style={{
            background: "var(--color-subtle)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            padding: "1.75rem",
          }}
        >
          <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-accent)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            Surface
          </p>
          <p style={{ fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.3, marginBottom: "0.625rem" }}>
            The interface context in which AI becomes visible, interactive, or actionable.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.6 }}>
            Inline, sidebar, overlay, workspace, feed, notification, ambient, spatial.
          </p>
        </div>
      </div>

      {/* Modalities */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
          Modalities
        </h2>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "60ch" }}>
          Choose modality based on the work, not novelty. Enterprise AI often fails not because the system lacks intelligence, but because the intelligence is expressed in the wrong form.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.875rem" }}>
          {MODALITY_DETAILS.map((m) => (
            <div
              key={m.id}
              style={{
                background: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.625rem" }}>
                <p style={{ fontSize: "0.9375rem", fontWeight: 600, letterSpacing: "-0.01em" }}>{m.label}</p>
                <div style={{ display: "flex", gap: "0.375rem" }}>
                  <span style={{ fontSize: "0.6875rem", color: "var(--color-muted)", background: "var(--color-subtle)", border: "1px solid var(--color-border)", borderRadius: "2px", padding: "0.125rem 0.375rem" }}>
                    Review: {m.reviewability}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.55, marginBottom: "0.75rem" }}>
                {m.description}
              </p>
              <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                {m.contexts.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontSize: "0.6875rem",
                      color: "var(--color-muted)",
                      background: "var(--color-subtle)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      padding: "0.125rem 0.5rem",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Surfaces */}
      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
          Surfaces
        </h2>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.6, marginBottom: "1.5rem", maxWidth: "60ch" }}>
          Surface is an attention strategy. Each surface makes a different promise to the user's attention — from zero interruption (ambient) to full focus redirect (workspace).
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
          {SURFACE_DETAILS.map((s) => (
            <div
              key={s.id}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "1.5rem",
                alignItems: "start",
                background: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1rem 1.25rem",
              }}
            >
              <p style={{ fontSize: "0.875rem", fontWeight: 600 }}>{s.label}</p>
              <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.55 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Link to framework */}
      <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Link
            href="/framework/modalities"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-accent)", textDecoration: "none" }}
          >
            → Read the full Modality chapter
          </Link>
          <Link
            href="/framework/surfaces"
            style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--color-accent)", textDecoration: "none" }}
          >
            → Read the full Surface chapter
          </Link>
        </div>
      </div>
    </div>
  );
}
