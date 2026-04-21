import type { Metadata } from "next";
import { getAllPatterns } from "@/lib/content";
import { PatternGrid } from "@/components/patterns/PatternGrid";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Pattern Library",
};

export default function PatternsPage() {
  const patterns = getAllPatterns();

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <PageHeader
        eyebrow="Pattern Library"
        title="15 reusable enterprise AI interaction patterns."
        description="Filter by job, pattern family, modality, surface, trust level, autonomy level, or enterprise risk. Each pattern includes when to use it, when not to, interaction anatomy, trust requirements, and failure modes."
      />

      <PatternGrid patterns={patterns} />
    </div>
  );
}
