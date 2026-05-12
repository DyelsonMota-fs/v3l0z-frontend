import { Country } from "@/app/types/country";
import { CountryCard } from "./CountryCard";

type CountryListProps = {
  countries: Country[];
};

export function CountryList({ countries }: CountryListProps) {
  if (countries.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center">
        <h2 className="text-lg font-semibold text-zinc-900">
          Nenhum país encontrado
        </h2>

        <p className="mt-2 text-sm text-zinc-500">
          Tente buscar por outro nome ou alterar o filtro de sub-região.
        </p>
      </div>
    );
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </section>
  );
}
