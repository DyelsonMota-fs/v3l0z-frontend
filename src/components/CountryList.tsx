import type { Country } from "@/types/country";
import { CountryCard } from "./CountryCard";

type CountryListProps = {
  countries: Country[];
  translations: Record<string, string>;
};

export function CountryList({ countries, translations }: CountryListProps) {
  if (countries.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-12 text-center">
        <h2 className="text-xl font-semibold text-zinc-950">
          {translations.emptyTitle}
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          {translations.emptyDescription}
        </p>
      </div>
    );
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          translations={translations}
        />
      ))}
    </section>
  );
}
