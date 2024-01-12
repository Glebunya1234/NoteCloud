import PropTypes from "prop-types";
import React, { Component, FC } from "react";
import ChangeAvatar from "./ChangeAvatar";

const ChangeAvatarBlock: FC<{
  AvatarScr: string|undefined;
  onButtonClick: (shape: string) => void;
}> = ({ AvatarScr, onButtonClick }) => {
  return (
    <>
      <ChangeAvatar
        AvatarScr={AvatarScr}
        Shape="rounded-xl"
        onButtonClick={onButtonClick}
      />
      <ChangeAvatar
        AvatarScr={AvatarScr}
        margin="lg:mx-5"
        Shape="rounded-full"
        onButtonClick={onButtonClick}
      />
      <ChangeAvatar
        AvatarScr={AvatarScr}
        Shape="mask mask-squircle"
        onButtonClick={onButtonClick}
      />
      <ChangeAvatar
        AvatarScr={AvatarScr}
        margin="lg:ml-5"
        Shape="mask mask-hexagon"
        onButtonClick={onButtonClick}
      />
      {/* <div className="avatar p-2 hover:scale-110 rounded-3xl  transition-all">
        <div className="w-24 rounded-xl">
          <img src={AvatarScr} />
        </div>
      </div>
      <div className="avatar p-2 lg:mx-5  hover:scale-110 rounded-3xl  transition-all">
        <div className="w-24 rounded-full">
          <img src={AvatarScr} />
        </div>
      </div>
      <div className="avatar p-2  hover:scale-110 rounded-3xl  transition-all">
        <div className="w-24 mask mask-squircle">
          <img src={AvatarScr} />
        </div>
      </div>
      <div className="avatar lg:ml-5 p-2  hover:scale-110 rounded-3xl  transition-all">
        <div className="w-24 mask mask-hexagon">
          <img src={AvatarScr} />
        </div>
      </div> */}
    </>
  );
};

export default ChangeAvatarBlock;
