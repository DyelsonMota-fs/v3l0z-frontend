type SubregionFilterProps = {
  value: string;
  subregions: string[];
  onChange: (value: string) => void;
};

export function SubregionFilter({
  value,
  subregions,
  onChange,
}: SubregionFilterProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="subregion"
        className="mb-2 block text-sm font-semibold text-zinc-800"
      >
        Sub-região
      </label>

      <select
        id="subregion"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-950 outline-none transition focus:border-zinc-900 focus:bg-white focus:ring-4 focus:ring-zinc-900/10"
      >
        <option value="">Todas as sub-regiões</option>

        {subregions.map((subregion) => (
          <option key={subregion} value={subregion}>
            {subregion}
          </option>
        ))}
      </select>
    </div>
  );
}
