export default function Search() {
  return (
    <main className="flex flex-col items-center py-[3rem] gap-4">
      <h1 className="text-lg font-bold tracking-widest uppercase">
        Search Our Site
      </h1>
      <form className="flex w-1/3">
        <input
          type="text"
          name="search"
          placeholder="Search"
          className="border border-neutral-500 py-2 px-5 flex-1 text-sm"
        />
        <button className="py-3 px-4 bg-slate-500 rounded-sm text-white uppercase text-sm font-bold tracking-wider">Submit</button>
      </form>
    </main>
  );
}
