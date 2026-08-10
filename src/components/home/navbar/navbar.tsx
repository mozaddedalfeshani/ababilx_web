"use client";

import Image from "next/image";
import Link from "next/link";
import { Github01Icon } from "hugeicons-react";

import { Button } from "@/components/ui/button";
import { goContribute } from "@/lib/auth";
import { useHomeLocale } from "../shared/use-home-locale";

export default function Navbar() {
  const { copy } = useHomeLocale();

  return (
    <nav
      className="glass fixed top-0 right-0 left-0 z-50 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image
            src="/logo.png"
            alt="AbabilX"
            width={28}
            height={28}
            className="rounded-lg"
            priority
          />
          <span className="text-sm font-semibold tracking-tight text-slate-900">
            AbabilX
          </span>
        </Link>
        {copy.nav.length > 0 ? (
          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            {copy.nav.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="transition-colors hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : (
          <div className="hidden md:block" />
        )}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={goContribute}
          className="h-8 w-8 text-slate-500 hover:text-slate-900"
          aria-label="AbabilX on GitHub"
          title="GitHub"
        >
          <Github01Icon size={18} />
        </Button>
      </div>
    </nav>
  );
}
