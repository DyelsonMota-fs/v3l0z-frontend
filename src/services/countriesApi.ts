import { Country } from "@/types/country";

const API_URL = "https://restcountries.com/v3.1";

const COUNTRY_FIELDS = [
  "name",
  "flags",
  "population",
  "region",
  "subregion",
  "capital",
  "cca3",
  "languages",
  "currencies",
  "area",
].join(",");

export async function getAllCountries(): Promise<Country[]> {
  const response = await fetch(`${API_URL}/all?fields=${COUNTRY_FIELDS}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    const errorMessage = await response.text();

    console.error("Status:", response.status);
    console.error("Erro da API:", errorMessage);

    throw new Error("Erro ao buscar países");
  }

  return response.json();
}

export async function getCountryByName(name: string): Promise<Country[]> {
  const response = await fetch(
    `${API_URL}/name/${name}?fields=${COUNTRY_FIELDS}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorMessage = await response.text();

    console.error("Status:", response.status);
    console.error("Erro da API:", errorMessage);

    throw new Error("Erro ao buscar país");
  }

  return response.json();
}