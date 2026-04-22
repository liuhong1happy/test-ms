/*
 * Nav Component
 * Design: Academic Minimalism
 * - Left: Company name in IBM Plex Mono bold
 * - Right: Navigation links
 * - No background color, no border, clean and minimal
 */

import { navLinks, siteInfo } from "@/data/siteConfig";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "13px",
      }}
      className="py-5 mb-4"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo / Company Name */}
          <a
            href="#home"
            className="font-semibold text-foreground hover:no-underline"
            style={{ fontSize: "15px", letterSpacing: "-0.02em" }}
          >
            {siteInfo.companyName}
            {siteInfo.companySuffix && (
              <span className="text-muted-foreground ml-1 font-normal">
                {siteInfo.companySuffix}
              </span>
            )}
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:underline"
                style={{ textUnderlineOffset: "3px" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="菜单"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {mobileOpen ? (
                <>
                  <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        {mobileOpen && (
          <div className="sm:hidden mt-3 flex flex-col gap-3 border-t border-border pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
