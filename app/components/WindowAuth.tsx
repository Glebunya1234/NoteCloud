"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/Image/logoNC.png";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { authh } from "@/app/firebaseConfig";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import SvgGoogle from "./Svg-Google";


export default function WindowAuth() {
  const [userss, setUser] = useState<User | null | undefined>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authh, provider);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(authh, (currentUser: User | null) => {
      setUser(currentUser);
    });
    return () => unsubcribe();
  }, [userss]);

  const handleSignInWithGoogle = () => {
    googleSignIn();
  };

  return (
    <div className="w-w-1200 min-w-wmin max-w-1/2 flex bg-center shadow-2xl  backdrop-blur-lg  rounded-3xl overflow-hidden">
      <div className="w-6/12 "></div>

      <div className="w-6/12 px-8 py-9 max-h-full ">
        <div className="w-full h-full flex flex-col items-center rounded-3xl overflow-hidden pt-8 bg-opacity-70 bg-bg-mygrey shadow-2xl">
          <Image src={Logo} width={80} height={80} alt="__" />
          <h1 className="text-center text-3xl text-gray-300 font-sans font-bold">
            NoteCloud
          </h1>
          <div className="flex w-full h-full flex-col  items-center py-9 ">
            <div className="tabs mb-2">
              <a className="tab tab-bordered tab-active">Log In</a>
              <a className="tab tab-bordered ">Sign Up</a>
            </div>
            <input
              type="text"
              placeholder="Login"
              className="input input-bordered w-w90% max-w-xs  m-1 mt-5"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered w-w90% max-w-xs m-1"
            />
            <button className="btn glass w-w90% max-w-xs m-1">Log In</button>
            <div className="divider p-5">OR</div>
            <button className="btn btn-ghost w-w90% max-w-xs m-1" onClick={handleSignInWithGoogle}>
              <SvgGoogle/>
              <div>Continue with Google</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
