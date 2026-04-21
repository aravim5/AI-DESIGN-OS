import type { RiskLevel, Status } from "@/lib/types";

type BadgeVariant = "default" | "accent" | "muted" | "success" | "warning" | "danger" | "info";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
}

const VARIANT_STYLES: Record<BadgeVariant, React.CSSProperties> = {
  default: { backgroundColor: "var(--color-subtle)", color: "var(--color-foreground)", border: "1px solid var(--color-border)" },
  accent: { backgroundColor: "var(--color-accent-light)", color: "var(--color-accent)", border: "1px solid #c7d7fa" },
  muted: { backgroundColor: "var(--color-subtle)", color: "var(--color-muted)", border: "1px solid var(--color-border)" },
  success: { backgroundColor: "#F0FDF4", color: "#166534", border: "1px solid #bbf7d0" },
  warning: { backgroundColor: "#FFFBEB", color: "#92400e", border: "1px solid #fde68a" },
  danger: { backgroundColor: "#FFF1F2", color: "#9f1239", border: "1px solid #fecdd3" },
  info: { backgroundColor: "#F0F9FF", color: "#0c4a6e", border: "1px solid #bae6fd" },
};

export function Badge({ children, variant = "default", size = "sm" }: BadgeProps) {
  return (
    <span
      style={{
        ...VARIANT_STYLES[variant],
        display: "inline-flex",
        alignItems: "center",
        borderRadius: "var(--radius-sm)",
        fontSize: size === "sm" ? "0.6875rem" : "0.75rem",
        fontWeight: 500,
        padding: size === "sm" ? "0.125rem 0.5rem" : "0.25rem 0.625rem",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        lineHeight: 1.4,
      }}
    >
      {children}
    </span>
  );
}

export function RiskBadge({ level }: { level: RiskLevel }) {
  const RISK_MAP: Record<RiskLevel, { label: string; variant: BadgeVariant }> = {
    low: { label: "Low risk", variant: "success" },
    medium: { label: "Medium risk", variant: "warning" },
    high: { label: "High risk", variant: "danger" },
    critical: { label: "Critical risk", variant: "danger" },
  };
  const { label, variant } = RISK_MAP[level];
  return <Badge variant={variant}>{label}</Badge>;
}

export function StatusBadge({ status }: { status: Status }) {
  const STATUS_MAP: Record<Status, { label: string; variant: BadgeVariant }> = {
    stable: { label: "Stable", variant: "success" },
    emerging: { label: "Emerging", variant: "warning" },
    experimental: { label: "Experimental", variant: "info" },
  };
  const { label, variant } = STATUS_MAP[status];
  return <Badge variant={variant}>{label}</Badge>;
}

export function TrustBadge({ level }: { level: number }) {
  const labels: Record<number, string> = {
    1: "Informational",
    2: "Advisory",
    3: "Consequential",
    4: "High-Stakes",
    5: "Autonomous",
  };
  return <Badge variant="muted">Trust {level} — {labels[level]}</Badge>;
}

export function AutonomyBadge({ level }: { level: number }) {
  const labels: Record<number, string> = {
    1: "Inform",
    2: "Recommend",
    3: "Prepare",
    4: "Execute w/ Approval",
    5: "Execute in Policy",
  };
  return <Badge variant="accent">L{level} — {labels[level]}</Badge>;
}
