import PropTypes from "prop-types";
import React, { Component, FC } from "react";
import ChangeAvatar from "./ChangeAvatar";
import { motion } from "framer-motion";

const ChangeAvatarBlock: FC<{
  AvatarScr: string | undefined;
  onButtonClick: (shape: string) => void;
}> = ({ AvatarScr, onButtonClick }) => {
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
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.ul
      className="container flex w-full  lg:w-min flex-wrap md:flex-nowrap justify-center items-center md:flex-row  p-5 "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.li
        className="item"
        variants={item}
        whileHover={{ scale: 1.01}}
        whileTap={{
          scale: 0.8
          
        }}
      >
        <ChangeAvatar
          AvatarScr={AvatarScr}
          Shape="rounded-xl"
          onButtonClick={onButtonClick}
        />
      </motion.li>
      <motion.li
        className="item"
        variants={item}
        whileHover={{ scale: 1.01}}
        whileTap={{
          scale: 0.8,
        
        }}
      >
        <ChangeAvatar
          AvatarScr={AvatarScr}
          margin="lg:mx-5"
          Shape="rounded-full"
          onButtonClick={onButtonClick}
        />
      </motion.li>
      <motion.li
        className="item"
        variants={item}
        whileHover={{ scale: 1.01 }}
        whileTap={{
          scale: 0.8,
         
        }}
      >
        <ChangeAvatar
          AvatarScr={AvatarScr}
          Shape="mask mask-squircle"
          onButtonClick={onButtonClick}
        />
      </motion.li>
      <motion.li
        className="item"
        variants={item}
        whileHover={{ scale: 1.01 }}
        whileTap={{
          scale: 0.8,
       
        }}
      >
        <ChangeAvatar
          AvatarScr={AvatarScr}
          margin="lg:ml-5"
          Shape="mask mask-hexagon"
          onButtonClick={onButtonClick}
        />
      </motion.li>
    </motion.ul>
  );
};

export default ChangeAvatarBlock;
