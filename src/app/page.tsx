import { HomeContent } from "@/components/HomeContent";
import { getAllCountries } from "@/services/countriesApi";

export default async function Home() {
  const countries = await getAllCountries();

  return <HomeContent countries={countries} />;
}
