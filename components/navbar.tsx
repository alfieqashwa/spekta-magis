"use client";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";
import { useState } from "react";

const magurie = localFont({
  src: "../public/fonts/Magurie.woff2",
  preload: false,
});

export function NavbarSpekta({
  navItems,
}: {
  navItems: { name: string; link: string }[];
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // === STARTS: For Mobile Navigation ===

  // Replace "About" with "Promotor"
  const updatedNavItems = navItems.map((item) =>
    item.name === "About" ? { name: "Promotor", link: "/promotor" } : item,
  );

  // Insert "Events" after "Promotor"
  const promotorIndex = updatedNavItems.findIndex(
    (item) => item.name === "Promotor",
  );
  const modifiedItems = [
    ...updatedNavItems.slice(0, promotorIndex + 1),
    { name: "Events", link: "/events" },
    ...updatedNavItems.slice(promotorIndex + 1),
  ];
  // === ENDS: For Mobile Navigation ===

  return (
    <Navbar className="z-[150]">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-4">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {modifiedItems.map((item, idx) => (
            <Link
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted-foreground relative w-full rounded-lg border px-4 py-1.5 tracking-widest"
              key={`mobile-link-${idx}`}
            >
              <span
                className={cn(
                  "block text-lg tracking-widest",
                  magurie.className,
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
