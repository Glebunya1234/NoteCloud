import { CgSearch } from "react-icons/cg";

const SearchInput = () => {
  return (
    <div className="relative w-full mr-5">
      <input
        type="text"
        placeholder="Type here"
        className="input input-ghost w-full bg-transparent max-w-4xl mr-5 pl-10 pr-4 py-2 ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
      />

      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <CgSearch />
      </div>
    </div>
  );
};
export default SearchInput;
