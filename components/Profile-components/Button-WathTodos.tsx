import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiBook } from "react-icons/fi";

export default function ButtonWhatchTodo() {
  return (
    <button className="btn btn-ghost my-1 w-full rounded-2xl">
      <div className="flex text-center justify-center">
        <FiBook/>
        <p className="mx-1">Todos</p>
      </div>
    </button>
  );
}
