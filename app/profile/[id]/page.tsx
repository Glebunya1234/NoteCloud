"use client";
import Link from "next/link";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Image from "next/image";
import { authh, mydatabase } from "@/firebase/Config/firebaseConfig";
import { notFound, useRouter } from "next/navigation";
import Logo from "@/Image/logoNC.png";

import { readDoc } from "@/firebase/Methods/ReadDataForUser";
import { useEffect } from "react";
import { AllertToast, showSuccessToast } from "@/components/Toast/toast";
import { userService } from "@/firebase/Methods/UserServ";
import { MyUser } from "@/firebase/Methods/UserServ";
// import {getUser} from "@/firebase/Methods/GetUser";

const getUser = async (id: string): Promise<MyUser> => {
  try {
    return await userService.getById(id);
  } catch (error) {
    notFound();
  }
};

export default async function userPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleSignUp = () => {
    try {
      signOut(authh);
      router.push("../");
    } catch (error) {
      console.log(error);
    }
  };
  const googleUser = await getUser(params.id);
  let src_url;
  if (googleUser.photoURL === " ") {
    src_url = googleUser.photoURL;
  } else {
    src_url =
      "https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek=";
  }

  console.log("src_url = ", src_url);

  // useEffect(() => {

  // }, []);

  return (
    <div className="flex justify-center items-center bg-cover  bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')] h-screen">
      <div className="w-11/12 h-h90% min-w-wmin max-w-1/2 flex  shadow-2xl  bg-bg-mygrey  rounded-3xl overflow-hidden">
        <div className="border-r-bg-mydurkgrey border-r-[1px] w-w-300 h-full flex items-center  flex-col ">
          <section className="w-full h-24 flex items-center justify-center ">
            <Image src={Logo} width={30} height={30} alt="__" />
            <h1 className="text-center text-3xl mx-2 text-gray-300 font-mono font-bold">
              NoteCloud
            </h1>
          </section>
          <section className="w-full h-24 flex items-center justify-center ">
            <img
              className="mask mask-circle"
              src={src_url}
              width={100}
              height={100}
              alt="User Avatar"
            />
            <h1></h1>
          </section>
        </div>
        <div className="w-full h-full">
          <header className="w-full h-24 flex items-center p-5">
            <h1 className="text-center text-3xl ml-5 mr-10 text-gray-300 font-mono font-light">
              Your&nbsp;Tasks
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost w-full bg-transparent max-w-4xl mr-5 ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
            />
            <button
              className="btn btn-ghost bg-bg-myyellow  rounded-2xl text-black ml-auto"
              onClick={handleSignUp}
            >
              SignOut
            </button>
            <button className="btn btn-square bg-transparent border-[#3a393c] rounded-2xl ml-5  hover:bg-bg-mydurkgrey">
              X
            </button>
          </header>
          <main className="w-full h-full"></main>
        </div>
      </div>
      <AllertToast />
    </div>
  );
}
