import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiHome } from "react-icons/fi";

export default function HomeContent() {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center ">
      <h1 className="font-Orbitron text-5xl">Welcome to NoteCloud</h1>
      <p className="text-2xl font-normal my-3">
        To start creating tasks, go to the TODOES tab and create a few examples.
      </p>
    </main>
  );
}
