import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  Pattern, PatternMeta,
  Recipe, RecipeMeta,
  Foundation, FoundationMeta,
  FrameworkChapter, FrameworkChapterMeta,
  Example, ExampleMeta,
  Enterprise, EnterpriseMeta,
} from "./types";

const contentDir = path.join(process.cwd(), "content");

function readMDX(dir: string, slug: string) {
  const fullPath = path.join(contentDir, dir, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  return matter(raw);
}

function listSlugs(dir: string): string[] {
  const fullDir = path.join(contentDir, dir);
  if (!fs.existsSync(fullDir)) return [];
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

// ── Patterns ──────────────────────────────────────────────────────────────

export function getAllPatterns(): PatternMeta[] {
  return listSlugs("patterns")
    .map((slug) => {
      const { data } = readMDX("patterns", slug);
      return { id: slug, ...data } as PatternMeta;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getPattern(slug: string): Pattern {
  const { data, content } = readMDX("patterns", slug);
  return { id: slug, ...data, content } as Pattern;
}

// ── Recipes ───────────────────────────────────────────────────────────────

export function getAllRecipes(): RecipeMeta[] {
  return listSlugs("recipes").map((slug) => {
    const { data } = readMDX("recipes", slug);
    return { id: slug, ...data } as RecipeMeta;
  });
}

export function getRecipe(slug: string): Recipe {
  const { data, content } = readMDX("recipes", slug);
  return { id: slug, ...data, content } as Recipe;
}

// ── Foundations ───────────────────────────────────────────────────────────

export function getAllFoundations(): FoundationMeta[] {
  return listSlugs("foundations")
    .map((slug) => {
      const { data } = readMDX("foundations", slug);
      return { id: slug, ...data } as FoundationMeta;
    })
    .sort((a, b) => a.order - b.order);
}

export function getFoundation(slug: string): Foundation {
  const { data, content } = readMDX("foundations", slug);
  return { id: slug, ...data, content } as Foundation;
}

// ── Framework chapters ────────────────────────────────────────────────────

export function getAllFrameworkChapters(): FrameworkChapterMeta[] {
  return listSlugs("framework")
    .map((slug) => {
      const { data } = readMDX("framework", slug);
      return { id: slug, ...data } as FrameworkChapterMeta;
    })
    .sort((a, b) => a.order - b.order);
}

export function getFrameworkChapter(slug: string): FrameworkChapter {
  const { data, content } = readMDX("framework", slug);
  return { id: slug, ...data, content } as FrameworkChapter;
}

// ── Examples ──────────────────────────────────────────────────────────────

export function getAllExamples(): ExampleMeta[] {
  return listSlugs("examples").map((slug) => {
    const { data } = readMDX("examples", slug);
    return { id: slug, ...data } as ExampleMeta;
  });
}

export function getExample(slug: string): Example {
  const { data, content } = readMDX("examples", slug);
  return { id: slug, ...data, content } as Example;
}

// ── Enterprise constraints ─────────────────────────────────────────────────

export function getAllEnterprise(): EnterpriseMeta[] {
  return listSlugs("enterprise")
    .map((slug) => {
      const { data } = readMDX("enterprise", slug);
      return { id: slug, ...data } as EnterpriseMeta;
    })
    .sort((a, b) => a.order - b.order);
}

export function getEnterprise(slug: string): Enterprise {
  const { data, content } = readMDX("enterprise", slug);
  return { id: slug, ...data, content } as Enterprise;
}
