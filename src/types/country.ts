export type Country = {
  name: {
    common: string;
    official: string;
    nativeName?: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
  };
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  cca3: string;
  languages?: Record<string, string>;
  currencies?: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  borders?: string[];
  area?: number;
};