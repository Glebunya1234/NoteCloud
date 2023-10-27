"use client";
import Link from "next/link";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import Image from "next/image";
import { authh } from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";
import Logo from "@/Image/logoNC.png";

export default function userPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const handleSignUp = () => {
    try {
      signOut(authh);
      router.push("../");
    } catch (error) {
      console.log(error);
    }
  };

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
              src="https://lh3.googleusercontent.com/a/ACg8ocKywbPxgKG4hzjnzqYanbDy2jv6UrE4anferjpEt4FV1Q=s96-c"
            />
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
    </div>
  );
}
