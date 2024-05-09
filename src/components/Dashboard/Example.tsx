function Example() {
  return (
    <div className="flex justify-between items-center p-2 bg-blueMoon shadow rounded-3xl">
      <div className="inline-block rounded min-h-[1em] w-2 self-stretch bg-red300"></div>
      <span className="text-sm">Angelina 13-00</span>
      <div className="flex items-center">
        <input type="checkbox" className="w-5 h-5 bg-white shadow" />
        <label className="ms-1 text-sm  text-black dark:text-gray capitalize">
          Done
        </label>
      </div>
    </div>
  );
}

export default Example;
