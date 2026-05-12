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
        className="mb-2 block text-sm font-medium text-zinc-700"
      >
        Filtrar por sub-região
      </label>

      <select
        id="subregion"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900"
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
