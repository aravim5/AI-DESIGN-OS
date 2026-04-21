"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Foundations", href: "/foundations" },
  { label: "Framework", href: "/framework" },
  { label: "Patterns", href: "/patterns" },
  { label: "Recipes", href: "/recipes" },
  { label: "Modalities", href: "/modalities" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Examples", href: "/examples" },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-border)",
        backgroundColor: "var(--color-background)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "56px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "var(--color-accent)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="1" width="4" height="4" fill="white" />
              <rect x="7" y="1" width="4" height="4" fill="white" opacity="0.6" />
              <rect x="1" y="7" width="4" height="4" fill="white" opacity="0.6" />
              <rect x="7" y="7" width="4" height="4" fill="white" opacity="0.3" />
            </svg>
          </span>
          <span
            style={{
              fontSize: "0.9375rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--color-foreground)",
            }}
          >
            Enterprise AI Design
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.125rem",
          }}
          className="hidden-mobile"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: "0.8125rem",
                fontWeight: isActive(item.href) ? 600 : 400,
                color: isActive(item.href)
                  ? "var(--color-accent)"
                  : "var(--color-muted)",
                textDecoration: "none",
                padding: "0.375rem 0.625rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: isActive(item.href)
                  ? "var(--color-accent-light)"
                  : "transparent",
                transition: "all 0.1s ease",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link
            href="/contribute"
            style={{
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "var(--color-foreground)",
              textDecoration: "none",
              padding: "0.375rem 0.875rem",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--color-border)",
              backgroundColor: "white",
              transition: "border-color 0.1s ease",
            }}
          >
            Contribute
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "0.25rem",
              color: "var(--color-foreground)",
            }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "0.75rem 1.5rem 1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.125rem",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.875rem",
                fontWeight: isActive(item.href) ? 600 : 400,
                color: isActive(item.href)
                  ? "var(--color-accent)"
                  : "var(--color-foreground)",
                textDecoration: "none",
                padding: "0.5rem 0.75rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: isActive(item.href)
                  ? "var(--color-accent-light)"
                  : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
