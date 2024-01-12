import { FC } from "react";
import ChangeColor from "./ChangeColor";
import { motion } from "framer-motion";

const ChangeColorblock: FC<{
  onButtonClick: (Color: string) => void;
}> = ({ onButtonClick }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.ul
      className="container w-min  justify-center items-center  flex md:flex-row mt-3 p-5 bg-bg-mydurkgrey rounded-2xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.li
        className="item"
        variants={item}
        whileHover={{ scale: 1.01, y: -5 }}
        whileTap={{
          scale: 0.8,
          y: 0,
        }}
      >
        <ChangeColor Color="bg-bg-myyellow" onButtonClick={onButtonClick} />
      </motion.li>
      <motion.li
        className="item"
        variants={item}
        whileHover={{ scale: 1.01, y: -5 }}
        whileTap={{
          scale: 0.8,
          y: 0,
        }}
      >
        <ChangeColor
          Color="bg-bg-myRedPink"
          margin="mx-2"
          onButtonClick={onButtonClick}
        />
      </motion.li>
      <motion.li
        className="item"
        variants={item}
        whileHover={{ scale: 1.01, y: -5 }}
        whileTap={{
          scale: 0.8,
          y: 0,
        }}
      >
        <ChangeColor
          Color="bg-bg-myBlueSky"
          margin="mr-2"
          onButtonClick={onButtonClick}
        />
      </motion.li>
      <motion.li
        className="item"
        variants={item}
        whileHover={{ scale: 1.01, y: -5 }}
        whileTap={{
          scale: 0.8,
          y: 0,
        }}
      >
        <ChangeColor Color="bg-bg-myLightGreen" onButtonClick={onButtonClick} />
      </motion.li>
    </motion.ul>
  );
};
export default ChangeColorblock;
