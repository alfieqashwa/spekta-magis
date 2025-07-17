"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { redirect } from "next/navigation";
import { ParaKreator } from "./para-kreator";

export function NavbarSpekta() {
  const navItems = [
    {
      name: "Docs",
      link: "/docs/introduction",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Features",
      link: "/#features",
    },
    {
      name: "Showcase",
      link: "/showcase",
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
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              variant="gradient"
              className="w-full"
              onClick={() =>
                redirect("https://github.com/subhadeeproy3902/mvpblocks")
              }
            >
              Github
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
