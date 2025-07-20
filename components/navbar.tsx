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
import { useState } from "react";

const magurie = localFont({
  src: "../public/fonts/Magurie.woff2",
});

export function NavbarSpekta() {
  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Line Up",
      link: "/line-up",
    },
    {
      name: "Get Ticket",
      link: "/ticket",
    },
    {
      name: "Merchandise",
      link: "/merchandise",
    },
    {
      name: "AI",
      link: "/ai-chat",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted-foreground relative tracking-widest"
            >
              <span
                className={cn(
                  "block text-lg tracking-widest",
                  magurie.className,
                )}
              >
                {item.name}
              </span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
