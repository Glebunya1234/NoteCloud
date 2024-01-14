import { NavButSet } from "@/components/Context";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiHome } from "react-icons/fi";

export default function HomeContent() {
  const DataContext = useContext(NavButSet);
  return (
    <main className={` w-full h-full px-5 flex flex-col justify-center items-center overflow-hidden ${DataContext.importTheme.textColor} `}>
      <motion.h1
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        initial={{ opacity: 0, scale: 0.5, x: 2000 }}
        className="font-Orbitron md:text-2xl lg:text-3xl text-center "
      >
        Welcome to NoteCloud
      </motion.h1>
      <motion.p
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        initial={{ opacity: 0, scale: 0.5, x: -2000 }}
        className="text-xs md:text-xl lg:text-2xl font-normal my-3 text-center"
      >
        To start creating tasks, go to the TODOES tab and create a few examples.
      </motion.p>
    </main>
  );
}
