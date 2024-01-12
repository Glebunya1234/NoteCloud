import PropTypes from "prop-types";
import React, { Component, FC } from "react";

type shapeAvatar =
  | "rounded-xl"
  | "rounded-full"
  | "mask mask-squircle"
  | "mask mask-hexagon";

const ChangeAvatar: FC<{
  AvatarScr: string | undefined;
  Shape: shapeAvatar;
  margin?: string;
  onButtonClick: (shape: string) => void;
}> = ({ AvatarScr, Shape, margin, onButtonClick }) => {
  const handle = ()=>{
    onButtonClick(Shape)
  }
  return (
    <>
      <div
        className={`avatar p-2 ${margin} hover:scale-110 rounded-3xl  transition-all`}
        onClick={handle}
      >
        <div className={`w-24 ${Shape}`}>
          <img src={AvatarScr} />
        </div>
      </div>
    </>
  );
};

export default ChangeAvatar;
