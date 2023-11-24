import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiHome } from "react-icons/fi";

export default function ButtonWhatchHome() {
  return (
    <button className="btn btn-ghost my-1 w-full rounded-2xl">
      <div className="flex text-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        <p className="mx-1">Home</p>
      </div>
    </button>
  );
}
