export const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Search company or job title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white border rounded-xl p-3 outline-none mt-2 mb-4 "
      />
    </div>
  );
};
