import { NavButSet } from "@/components/Context";
import PropTypes from "prop-types";
import React, { Component, FC, useContext, useState } from "react";

type shapeAvatar =
  | "rounded-xl"
  | "rounded-full"
  | "mask mask-squircle"
  | "mask mask-hexagon"
  | "mask mask-hexagon-2"
  | "mask mask-heart";

const ChangeAvatar: FC<{
  AvatarScr: string | undefined;
  Shape: shapeAvatar;
  margin?: string;
  changeAvatar: string;
  onButtonClick: (shape: string) => void;
  onСhangeClick: (AvatarChange: string) => void;
}> = ({
  AvatarScr,
  changeAvatar,
  Shape,
  margin,
  onButtonClick,
  onСhangeClick,
}) => {
  const dataContext = useContext(NavButSet);

  const handle = () => {
    onButtonClick(Shape);
    onСhangeClick(Shape);
  };
  return (
    <>
      <div
        className={`avatar ${changeAvatar === Shape ? "backdrop-blur-3xl bg-gray-600/40" : ""} ${
          dataContext.importTheme.AvatarShape === Shape ? `backdrop-blur-3xl bg-black/60` : ""
        } ${margin}  p-2  hover:scale-110 rounded-3xl   transition-all`}
        onClick={handle}
      >
        <div className={`w-24 ${Shape} `}>
          <img src={AvatarScr} />
        </div>
      </div>
    </>
  );
};

export default ChangeAvatar;
