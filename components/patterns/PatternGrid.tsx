"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { PatternMeta, PatternFamily, Job, Modality, RiskLevel } from "@/lib/types";
import {
  PATTERN_FAMILY_LABELS,
  JOB_LABELS,
  MODALITY_LABELS,
  RISK_LEVEL_LABELS,
} from "@/lib/taxonomy";
import { RiskBadge, StatusBadge, AutonomyBadge } from "@/components/ui/Badge";

interface PatternGridProps {
  patterns: PatternMeta[];
}

type FilterState = {
  family: PatternFamily | "";
  job: Job | "";
  modality: Modality | "";
  risk: RiskLevel | "";
  autonomy: number | "";
};

const FAMILY_OPTIONS: { value: PatternFamily | ""; label: string }[] = [
  { value: "", label: "All families" },
  { value: "answer", label: "Answer" },
  { value: "recommendation", label: "Recommendation" },
  { value: "creation", label: "Creation" },
  { value: "workflow-assistance", label: "Workflow Assistance" },
  { value: "monitoring-signal", label: "Monitoring & Signal" },
  { value: "governance-control", label: "Governance & Control" },
  { value: "recovery-continuity", label: "Recovery & Continuity" },
];

const JOB_OPTIONS: { value: Job | ""; label: string }[] = [
  { value: "", label: "All jobs" },
  ...Object.entries(JOB_LABELS).map(([value, label]) => ({
    value: value as Job,
    label,
  })),
];

const MODALITY_OPTIONS: { value: Modality | ""; label: string }[] = [
  { value: "", label: "All modalities" },
  ...Object.entries(MODALITY_LABELS).map(([value, label]) => ({
    value: value as Modality,
    label,
  })),
];

const RISK_OPTIONS: { value: RiskLevel | ""; label: string }[] = [
  { value: "", label: "All risk levels" },
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "critical", label: "Critical" },
];

const FAMILY_COLORS: Record<PatternFamily, string> = {
  answer: "#2D5BE3",
  recommendation: "#059669",
  creation: "#7C3AED",
  "workflow-assistance": "#D97706",
  "monitoring-signal": "#DC2626",
  "governance-control": "#0891B2",
  "recovery-continuity": "#9333EA",
};

function SelectFilter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      <label style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          fontSize: "0.8125rem",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-sm)",
          padding: "0.375rem 0.625rem",
          backgroundColor: "white",
          color: value ? "var(--color-foreground)" : "var(--color-muted)",
          appearance: "none",
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%236B7280'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.5rem center",
          paddingRight: "1.75rem",
          cursor: "pointer",
        }}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function PatternGrid({ patterns }: PatternGridProps) {
  const [filters, setFilters] = useState<FilterState>({
    family: "",
    job: "",
    modality: "",
    risk: "",
    autonomy: "",
  });

  const filtered = useMemo(() => {
    return patterns.filter((p) => {
      if (filters.family && p.patternFamily !== filters.family) return false;
      if (filters.job && !p.jobs.includes(filters.job as Job)) return false;
      if (filters.modality && !p.modalities.includes(filters.modality as Modality)) return false;
      if (filters.risk && p.enterpriseRisk !== filters.risk) return false;
      if (filters.autonomy && p.autonomyLevel !== filters.autonomy) return false;
      return true;
    });
  }, [patterns, filters]);

  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <div>
      {/* Filter bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "0.875rem",
          padding: "1.25rem",
          background: "var(--color-subtle)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-md)",
          marginBottom: "1.5rem",
        }}
      >
        <SelectFilter
          label="Pattern Family"
          value={filters.family}
          onChange={(v) => setFilters((f) => ({ ...f, family: v as PatternFamily | "" }))}
          options={FAMILY_OPTIONS}
        />
        <SelectFilter
          label="Job"
          value={filters.job}
          onChange={(v) => setFilters((f) => ({ ...f, job: v as Job | "" }))}
          options={JOB_OPTIONS}
        />
        <SelectFilter
          label="Modality"
          value={filters.modality}
          onChange={(v) => setFilters((f) => ({ ...f, modality: v as Modality | "" }))}
          options={MODALITY_OPTIONS}
        />
        <SelectFilter
          label="Enterprise Risk"
          value={filters.risk}
          onChange={(v) => setFilters((f) => ({ ...f, risk: v as RiskLevel | "" }))}
          options={RISK_OPTIONS}
        />
        <SelectFilter
          label="Autonomy Level"
          value={String(filters.autonomy)}
          onChange={(v) => setFilters((f) => ({ ...f, autonomy: v ? Number(v) : "" }))}
          options={[
            { value: "", label: "All levels" },
            { value: "1", label: "L1 — Inform" },
            { value: "2", label: "L2 — Recommend" },
            { value: "3", label: "L3 — Prepare" },
            { value: "4", label: "L4 — Execute w/ Approval" },
            { value: "5", label: "L5 — Execute in Policy" },
          ]}
        />
      </div>

      {/* Results count + clear */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>
          {filtered.length} pattern{filtered.length !== 1 ? "s" : ""}
          {hasFilters ? " matching filters" : ""}
        </p>
        {hasFilters && (
          <button
            onClick={() => setFilters({ family: "", job: "", modality: "", risk: "", autonomy: "" })}
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-accent)",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: "2px",
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "4rem",
            border: "1px dashed var(--color-border)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <p style={{ fontSize: "0.9375rem", fontWeight: 500, marginBottom: "0.5rem" }}>
            No patterns match these filters.
          </p>
          <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>
            Try adjusting or clearing your filters.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.875rem",
          }}
        >
          {filtered.map((pattern) => (
            <Link
              key={pattern.id}
              href={`/patterns/${pattern.id}`}
              style={{
                display: "block",
                textDecoration: "none",
                background: "white",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1.25rem",
                color: "inherit",
              }}
            >
              {/* Family tag */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "3px",
                    height: "20px",
                    backgroundColor: FAMILY_COLORS[pattern.patternFamily],
                    borderRadius: "2px",
                    marginRight: "0.625rem",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    flex: 1,
                  }}
                >
                  {PATTERN_FAMILY_LABELS[pattern.patternFamily]}
                </span>
                <StatusBadge status={pattern.status} />
              </div>

              <h3
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  marginBottom: "0.5rem",
                  color: "var(--color-foreground)",
                  lineHeight: 1.35,
                }}
              >
                {pattern.title}
              </h3>

              <p
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.55,
                  marginBottom: "1rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {pattern.summary}
              </p>

              {/* Tags row */}
              <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                <RiskBadge level={pattern.enterpriseRisk} />
                <AutonomyBadge level={pattern.autonomyLevel} />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
