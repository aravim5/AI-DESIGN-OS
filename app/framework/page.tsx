import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { FRAMEWORK_LAYERS, FRAMEWORK_LAYER_LABELS, FRAMEWORK_LAYER_SUMMARIES } from "@/lib/taxonomy";
import type { FrameworkLayer } from "@/lib/types";

export const metadata: Metadata = {
  title: "Framework Architecture",
};

const LAYER_DESCRIPTIONS: Record<FrameworkLayer, string> = {
  jobs: "Define the work before the interface. Start from progress the user is trying to make.",
  patterns: "Reusable interaction structures that sit between work intent and implementation.",
  modalities: "The expressive form through which intelligence is perceived — text, voice, visual, spatial.",
  surfaces: "The interface context in which AI becomes visible, interactive, or actionable.",
  trust: "Safeguards, controls, oversight, and accountability structures that make AI behavior governable.",
  autonomy: "The degree of operational agency granted to the system — from informing to executing.",
  context: "The situational substrate that makes AI behavior relevant, bounded, and safe.",
};

const LAYER_NUMBERS: Record<FrameworkLayer, string> = {
  jobs: "2.1",
  patterns: "2.2",
  modalities: "2.3",
  surfaces: "2.4",
  trust: "2.5",
  autonomy: "2.6",
  context: "2.7",
};

export default function FrameworkPage() {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="Framework Architecture"
        title="The operating model for enterprise AI design."
        description="Seven interlocking layers that together answer how enterprise AI should be designed across workflows, modalities, surfaces, trust models, and levels of autonomy."
      />

      {/* Core synthesis */}
      <div
        style={{
          background: "var(--color-foreground)",
          color: "white",
          borderRadius: "var(--radius-lg)",
          padding: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            color: "rgba(255,255,255,0.4)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "0.875rem",
          }}
        >
          Core Synthesis
        </p>
        <p
          style={{
            fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.4,
            color: "white",
          }}
        >
          Enterprise AI design = Job × Pattern Family × Modality × Surface,{" "}
          <span style={{ color: "rgba(255,255,255,0.6)" }}>
            shaped by Context, calibrated by Autonomy, and bounded by Trust and Governance.
          </span>
        </p>
      </div>

      {/* Reading sequence */}
      <div
        style={{
          background: "var(--color-subtle)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          padding: "1.5rem",
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--color-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "0.75rem",
          }}
        >
          Recommended reading sequence
        </p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          {[
            "Start with Job",
            "Choose Pattern Family",
            "Select Modality",
            "Choose Surface",
            "Inject Context",
            "Calibrate Autonomy",
            "Apply Trust & Governance",
          ].map((step, i) => (
            <span key={step} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                }}
              >
                {step}
              </span>
              {i < 6 && (
                <span style={{ color: "var(--color-muted)", fontSize: "0.75rem" }}>→</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Layer cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {FRAMEWORK_LAYERS.map((layer) => (
          <Link
            key={layer}
            href={`/framework/${layer}`}
            style={{
              display: "grid",
              gridTemplateColumns: "3rem 1fr auto",
              gap: "1.5rem",
              alignItems: "center",
              textDecoration: "none",
              background: "white",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "1.375rem 1.5rem",
              color: "inherit",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--color-muted)",
                fontVariantNumeric: "tabular-nums",
                letterSpacing: "-0.01em",
              }}
            >
              {LAYER_NUMBERS[layer]}
            </span>
            <div>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "-0.015em",
                  color: "var(--color-foreground)",
                  marginBottom: "0.25rem",
                }}
              >
                {FRAMEWORK_LAYER_LABELS[layer]}
              </p>
              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.5,
                }}
              >
                {LAYER_DESCRIPTIONS[layer]}
              </p>
            </div>
            <span
              style={{
                fontSize: "0.75rem",
                color: "var(--color-muted)",
                background: "var(--color-subtle)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                padding: "0.25rem 0.625rem",
                whiteSpace: "nowrap",
                fontWeight: 500,
              }}
            >
              {FRAMEWORK_LAYER_SUMMARIES[layer].split("?")[0].trim() + "?"}
            </span>
          </Link>
        ))}
      </div>

      {/* Three-part architecture note */}
      <div
        style={{
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {[
          {
            label: "Core interaction architecture",
            layers: "Job, Pattern Family, Modality, Surface",
            description: "The what and how of the interaction itself.",
          },
          {
            label: "System intelligence substrate",
            layers: "Context",
            description: "The situational understanding that makes behavior relevant.",
          },
          {
            label: "Control architecture",
            layers: "Autonomy + Trust and Governance",
            description: "The rules that make autonomous behavior safe and accountable.",
          },
        ].map((group) => (
          <div
            key={group.label}
            style={{
              background: "var(--color-subtle)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              padding: "1.25rem",
            }}
          >
            <p
              style={{
                fontSize: "0.6875rem",
                fontWeight: 600,
                color: "var(--color-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.5rem",
              }}
            >
              {group.label}
            </p>
            <p style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.375rem" }}>
              {group.layers}
            </p>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)", lineHeight: 1.5 }}>
              {group.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
