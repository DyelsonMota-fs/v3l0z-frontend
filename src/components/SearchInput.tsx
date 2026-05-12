type SearchInputProps = {
  value: string;
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function SearchInput({
  value,
  label,
  placeholder,
  onChange,
}: SearchInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="search"
        className="mb-2 block text-sm font-semibold text-zinc-800"
      >
        {label}
      </label>

      <input
        id="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:bg-white focus:ring-4 focus:ring-zinc-900/10"
      />
    </div>
  );
}
