import type { Job, PatternFamily, Modality, Surface, FrameworkLayer } from "./types";

export const JOB_LABELS: Record<Job, string> = {
  ask: "Ask",
  find: "Find",
  understand: "Understand",
  decide: "Decide",
  create: "Create",
  execute: "Execute",
  monitor: "Monitor",
  remember: "Remember",
  collaborate: "Collaborate",
  recover: "Recover",
};

export const PATTERN_FAMILY_LABELS: Record<PatternFamily, string> = {
  answer: "Answer",
  recommendation: "Recommendation",
  creation: "Creation",
  "workflow-assistance": "Workflow Assistance",
  "monitoring-signal": "Monitoring & Signal",
  "governance-control": "Governance & Control",
  "recovery-continuity": "Recovery & Continuity",
};

export const MODALITY_LABELS: Record<Modality, string> = {
  text: "Text",
  voice: "Voice",
  vision: "Vision / Image",
  "data-visualization": "Data & Visualization",
  code: "Code",
  multimodal: "Multimodal",
  ambient: "Ambient",
  spatial: "Spatial",
};

export const SURFACE_LABELS: Record<Surface, string> = {
  inline: "Inline",
  sidebar: "Sidebar",
  overlay: "Overlay",
  workspace: "Workspace",
  "feed-stream": "Feed / Stream",
  notification: "Notification",
  ambient: "Ambient",
  spatial: "Spatial",
};

export const FRAMEWORK_LAYER_LABELS: Record<FrameworkLayer, string> = {
  jobs: "The Job Model",
  patterns: "Pattern Families",
  modalities: "The Modality Model",
  surfaces: "The Surface Model",
  trust: "Trust & Governance",
  autonomy: "The Autonomy Model",
  context: "The Context Model",
};

export const TRUST_LEVEL_LABELS: Record<number, string> = {
  1: "Informational",
  2: "Advisory",
  3: "Consequential",
  4: "High-Stakes",
  5: "Autonomous",
};

export const AUTONOMY_LEVEL_LABELS: Record<number, string> = {
  1: "Inform",
  2: "Recommend",
  3: "Prepare",
  4: "Execute with Approval",
  5: "Execute within Policy",
};

export const RISK_LEVEL_LABELS = {
  low: "Low",
  medium: "Medium",
  high: "High",
  critical: "Critical",
};

export const FRAMEWORK_LAYERS: FrameworkLayer[] = [
  "jobs",
  "patterns",
  "modalities",
  "surfaces",
  "trust",
  "autonomy",
  "context",
];

export const FRAMEWORK_LAYER_SUMMARIES: Record<FrameworkLayer, string> = {
  jobs: "What is the user actually trying to accomplish right now?",
  patterns: "What kind of AI interaction is happening here?",
  modalities: "In what form should this intelligence be experienced?",
  surfaces: "Where should this intelligence show up?",
  trust: "Why should the user and the organization trust this system — and how is that trust controlled?",
  autonomy: "How much is the system allowed to do?",
  context: "What does the system need to know about this situation to respond appropriately?",
};
