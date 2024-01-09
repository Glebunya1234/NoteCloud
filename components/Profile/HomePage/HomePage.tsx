import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiHome } from "react-icons/fi";

export default function HomeContent() {
  return (
    <main className="w-full h-full px-5 flex flex-col justify-center items-center ">
      <h1 className="font-Orbitron text-base md:text-2xl lg:text-3xl text-center ">Welcome to NoteCloud</h1>
      <p className="text-xs md:text-xl lg:text-2xl font-normal my-3 text-center">
        To start creating tasks, go to the TODOES tab and create a few examples.
      </p>
    </main>
  );
}
