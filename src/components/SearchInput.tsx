type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="search"
        className="mb-2 block text-sm font-medium text-zinc-700"
      >
        Buscar país
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Digite o nome do país..."
        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900"
      />
    </div>
  );
}
