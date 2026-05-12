"use client";

import { useMemo, useState } from "react";

import type { Country } from "@/types/country";
import { CountryList } from "./CountryList";
import { SearchInput } from "./SearchInput";
import { SubregionFilter } from "./SubregionFilter";

type CountriesExplorerProps = {
  countries: Country[];
};

export function CountriesExplorer({ countries }: CountriesExplorerProps) {
  const [search, setSearch] = useState("");
  const [selectedSubregion, setSelectedSubregion] = useState("");

  const subregions = useMemo(() => {
    return Array.from(
      new Set(
        countries
          .map((country) => country.subregion)
          .filter((subregion): subregion is string => Boolean(subregion)),
      ),
    ).sort();
  }, [countries]);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesSubregion = selectedSubregion
        ? country.subregion === selectedSubregion
        : true;

      return matchesSearch && matchesSubregion;
    });
  }, [countries, search, selectedSubregion]);

  const hasActiveFilters = Boolean(search || selectedSubregion);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-[1fr_280px]">
          <SearchInput value={search} onChange={setSearch} />

          <SubregionFilter
            value={selectedSubregion}
            subregions={subregions}
            onChange={setSelectedSubregion}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-900">
            {filteredCountries.length} país(es) encontrado(s)
          </p>

          <p className="text-sm text-zinc-500">
            Use a busca e o filtro para refinar os resultados.
          </p>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSelectedSubregion("");
            }}
            className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-100"
          >
            Limpar filtros
          </button>
        )}
      </div>

      <CountryList countries={filteredCountries} />
    </div>
  );
}
