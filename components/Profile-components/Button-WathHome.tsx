import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiHome } from "react-icons/fi";

export default function ButtonWhatchHome() {
  return (
    <button className="btn btn-ghost my-1 w-full rounded-2xl">
      <div className="flex text-center justify-center">
        <FiHome/>
        <p className="mx-1">Home</p>
      </div>
    </button>
  );
}
