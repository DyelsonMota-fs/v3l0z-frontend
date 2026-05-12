"use client";

import { useMemo, useState } from "react";

import { Country } from "@/app/types/country";
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

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:grid-cols-2">
        <SearchInput value={search} onChange={setSearch} />

        <SubregionFilter
          value={selectedSubregion}
          subregions={subregions}
          onChange={setSelectedSubregion}
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-600">
          {filteredCountries.length} país(es) encontrado(s)
        </p>

        {(search || selectedSubregion) && (
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setSelectedSubregion("");
            }}
            className="text-sm font-medium text-zinc-900 underline-offset-4 hover:underline"
          >
            Limpar filtros
          </button>
        )}
      </div>

      <CountryList countries={filteredCountries} />
    </div>
  );
}
