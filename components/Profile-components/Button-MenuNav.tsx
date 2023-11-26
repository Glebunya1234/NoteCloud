"use client";
import SvgHome from "@/assets/Svg-Home";
import { useState } from "react";
import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiBook } from "react-icons/fi";

const ButtonMenuNavigations: React.FC<{
  onButtonClick: (buttonName: string) => void;
}> = ({ onButtonClick }) => {
  return (
    <>
      <button
        className="btn btn-ghost my-1 w-full rounded-2xl"
        onClick={() => onButtonClick("Home")}
      >
        <div className="flex text-center justify-center">
          <CgHomeAlt />
          <p className="mx-1">Home</p>
        </div>
      </button>

      <button
        className="btn btn-ghost my-1 w-full rounded-2xl"
        onClick={() => onButtonClick("Todos")}
      >
        <div className="flex text-center justify-center">
          <FiBook />
          <p className="mx-1">Todos</p>
        </div>
      </button>
    </>
  );
};
export default ButtonMenuNavigations;
