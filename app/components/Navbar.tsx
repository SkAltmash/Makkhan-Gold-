"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site, whatsappLink } from "../lib/site";

const links = [
  { href: "#about", label: "Our Story" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why Us" },
  { href: "#recipe", label: "Recipe" },
  { href: "#dealers", label: "Dealership" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-leaf-dark/95 py-2 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <Image
            src="/makhanlogo.png"
            alt={site.name}
            width={680}
            height={600}
            preload
            className={`h-auto drop-shadow-md transition-all duration-300 ${
              scrolled ? "w-12" : "w-14 sm:w-16"
            }`}
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-lg font-semibold tracking-wide text-gold">
              MAKKHAN GOLD
            </span>
            <span className="block text-[11px] uppercase tracking-[0.3em] text-cream/70">
              Premium Chai
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm font-medium text-cream/90 transition hover:text-gold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Hi Makkhan Gold! I'd like to order chai.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-masala-dark shadow-md shadow-black/20 transition hover:-translate-y-0.5 hover:bg-gold-light sm:inline-block"
          >
            Order Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span
              className={`absolute h-0.5 w-5 bg-current transition ${open ? "rotate-45" : "-translate-y-1.5"}`}
            />
            <span className={`absolute h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute h-0.5 w-5 bg-current transition ${open ? "-rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[100svh]" : "max-h-0"
        }`}
      >
        <ul className="flex h-[calc(100svh-4rem)] flex-col gap-1 px-6 pt-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-cream/10 py-4 font-display text-2xl text-cream transition hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href={whatsappLink("Hi Makkhan Gold! I'd like to order chai.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full bg-gold py-4 text-center font-semibold text-masala-dark"
            >
              Order on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
