import PropTypes from "prop-types";
import React, { Component, FC, useState } from "react";
import ChangeAvatar from "./ChangeAvatar";
import { motion } from "framer-motion";

const ChangeAvatarBlock: FC<{
  AvatarScr: string | undefined;
  onButtonClick: (shape: string) => void;
}> = ({ AvatarScr, onButtonClick }) => {
  const [change, setChange] = useState("");

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
      className="container flex w-full  flex-wrap xl:flex-nowrap justify-center items-center xl:flex-row  p-5 "
      variants={container}
      initial="hidden"
      animate="visible"
    >
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
          Shape="rounded-xl"
          onСhangeClick={() => {
            setChange("rounded-xl");
          }}
          changeAvatar={change}
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
          margin="lg:mx-5"
          Shape="rounded-full"
          onButtonClick={onButtonClick}
          onСhangeClick={() => {
            setChange("rounded-full");
          }}
          changeAvatar={change}
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
          onСhangeClick={() => {
            setChange("mask mask-squircle");
          }}
          changeAvatar={change}
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
          margin="lg:mx-5"
          Shape="mask mask-hexagon"
          onButtonClick={onButtonClick}
          onСhangeClick={() => {
            setChange("mask mask-hexagon");
          }}
          changeAvatar={change}
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
          Shape="mask mask-hexagon-2"
          onButtonClick={onButtonClick}
          onСhangeClick={() => {
            setChange("mask mask-hexagon-2");
          }}
          changeAvatar={change}
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
          Shape="mask mask-heart"
          onButtonClick={onButtonClick}
          onСhangeClick={() => {
            setChange("mask mask-heart");
          }}
          changeAvatar={change}
        />
      </motion.li>
    </motion.ul>
  );
};

export default ChangeAvatarBlock;
