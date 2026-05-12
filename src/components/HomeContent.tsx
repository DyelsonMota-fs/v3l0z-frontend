"use client";

import { useState } from "react";

import { CountriesExplorer } from "@/components/CountriesExplorer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Country } from "@/types/country";
import type { Language } from "@/types/language";
import { translations } from "@/utils/translations";

type HomeContentProps = {
  countries: Country[];
};

export function HomeContent({ countries }: HomeContentProps) {
  const [language, setLanguage] = useState<Language>("pt-BR");

  const t = translations[language];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#f4f4f5,_#fafafa_45%,_#ffffff)]">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-sm font-bold text-white">
              CE
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-950">
                Countries Explorer
              </p>

              <p className="text-xs text-zinc-500">Front-end Challenge</p>
            </div>
          </div>

          <LanguageSwitcher language={language} onChange={setLanguage} />
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 shadow-sm">
              {t.badge}
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600">
              {t.description}
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">
              {t.totalCountries}
            </p>

            <p className="mt-2 text-4xl font-bold text-zinc-950">
              {countries.length}
            </p>

            <p className="mt-2 text-sm text-zinc-500">{t.apiDescription}</p>
          </div>
        </div>

        <CountriesExplorer countries={countries} translations={t} />
      </section>
    </main>
  );
}
