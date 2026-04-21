export type Job =
  | "ask"
  | "find"
  | "understand"
  | "decide"
  | "create"
  | "execute"
  | "monitor"
  | "remember"
  | "collaborate"
  | "recover";

export type PatternFamily =
  | "answer"
  | "recommendation"
  | "creation"
  | "workflow-assistance"
  | "monitoring-signal"
  | "governance-control"
  | "recovery-continuity";

export type Modality =
  | "text"
  | "voice"
  | "vision"
  | "data-visualization"
  | "code"
  | "multimodal"
  | "ambient"
  | "spatial";

export type Surface =
  | "inline"
  | "sidebar"
  | "overlay"
  | "workspace"
  | "feed-stream"
  | "notification"
  | "ambient"
  | "spatial";

export type TrustLevel = 1 | 2 | 3 | 4 | 5;
export type AutonomyLevel = 1 | 2 | 3 | 4 | 5;
export type RiskLevel = "low" | "medium" | "high" | "critical";
export type Status = "stable" | "emerging" | "experimental";

export type FrameworkLayer =
  | "jobs"
  | "patterns"
  | "modalities"
  | "surfaces"
  | "trust"
  | "autonomy"
  | "context";

export interface PatternMeta {
  id: string;
  title: string;
  summary: string;
  patternFamily: PatternFamily;
  jobs: Job[];
  modalities: Modality[];
  surfaces: Surface[];
  trustLevel: TrustLevel;
  autonomyLevel: AutonomyLevel;
  enterpriseRisk: RiskLevel;
  status: Status;
  relatedPatterns: string[];
  relatedRecipes: string[];
}

export interface Pattern extends PatternMeta {
  content: string;
}

export interface RecipeMeta {
  id: string;
  title: string;
  summary: string;
  workflowShape: string;
  patterns: string[];
  jobs: Job[];
  surfaces: Surface[];
  trustLevel: TrustLevel;
  autonomyLevel: AutonomyLevel;
  status: Status;
}

export interface Recipe extends RecipeMeta {
  content: string;
}

export interface FoundationMeta {
  id: string;
  title: string;
  summary: string;
  order: number;
}

export interface Foundation extends FoundationMeta {
  content: string;
}

export interface FrameworkChapterMeta {
  id: string;
  title: string;
  layer: FrameworkLayer;
  summary: string;
  order: number;
}

export interface FrameworkChapter extends FrameworkChapterMeta {
  content: string;
}

export interface ExampleMeta {
  id: string;
  title: string;
  summary: string;
  industry: string;
  patterns: string[];
  jobs: Job[];
  surfaces: Surface[];
}

export interface Example extends ExampleMeta {
  content: string;
}

export interface EnterpriseMeta {
  id: string;
  title: string;
  summary: string;
  order: number;
}

export interface Enterprise extends EnterpriseMeta {
  content: string;
}
