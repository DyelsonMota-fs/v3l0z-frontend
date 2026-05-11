import { Country } from "@/types/country";

const API_URL = "https://restcountries.com/v3.1";

export async function getAllCountries(): Promise<Country[]> {
  const response = await fetch(`${API_URL}/all`);

  if (!response.ok) {
    throw new Error("Erro ao buscar países");
  }

  return response.json();
}

export async function getCountryByName(name: string): Promise<Country[]> {
  const response = await fetch(`${API_URL}/name/${name}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar país");
  }

  return response.json();
}