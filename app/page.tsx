"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/Image/logoNC.png";
import WindowAuth from "./components/Auth-component/ButtonSignInGoogle";
import {
  ButtonSignIn,
  InputSignInLogin,
  InputSignInPassword,
} from "./components/Auth-component/Inputs-SignIn";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Log In");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center items-center bg-cover  bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')] h-screen">
      <div className="w-w-900 min-w-wmin max-w-1/2 flex bg-center shadow-2xl  backdrop-blur-lg  rounded-3xl overflow-hidden transition ease-linear duration-1000 ">
        <div className="w-6/12 "></div>

        <div className="w-6/12 px-8 py-9 max-h-full ">
          <div className="w-full h-full flex flex-col items-center rounded-3xl overflow-hidden pt-8 bg-opacity-70 bg-bg-mygrey shadow-2xl">
            <Image src={Logo} width={80} height={80} alt="__" />
            <h1 className="text-center text-3xl text-gray-300 font-sans font-bold">
              NoteCloud
            </h1>
            <div className="flex w-full h-full flex-col  items-center py-9 ">
              <div className="tabs mb-2">
                <a
                  className={`tab tab-bordered transition-all ease-linear ${
                    activeTab === "Log In" ? "tab-active" : ""
                  }`}
                  onClick={() => handleTabClick("Log In")}
                >
                  Log In
                </a>
                <a
                  className={`tab tab-bordered transition-all ease-linear ${
                    activeTab === "Sign Up" ? "tab-active" : ""
                  }`}
                  onClick={() => handleTabClick("Sign Up")}
                >
                  Sign Up
                </a>
              </div>
              {activeTab === "Log In" ? (
                <>
                  <InputSignInLogin />
                  <InputSignInPassword />
                  <ButtonSignIn />
                </>
              ) : (
                <>
                  <InputSignInLogin />
                  <InputSignInPassword />
                  <InputSignInLogin />
                  <InputSignInPassword />
                  <ButtonSignIn />
                </>
              )}
              <div className="divider p-5">OR</div>
              <WindowAuth />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
