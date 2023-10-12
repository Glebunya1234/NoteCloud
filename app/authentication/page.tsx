"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/Image/logoNC.png";

export default function auth() {
  return (

    // bg-[url('https://img.freepik.com/free-vector/realistic-polygonal-background_52683-59997.jpg?w=1380&t=st=1697136991~exp=1697137591~hmac=ea73f477bd266aa86e3ee0d42e3d755b6af6f8b3f190ca77764294eca5365c05')]

    <div className="flex justify-center items-center bg-cover  bg-[url('https://img.freepik.com/free-vector/realistic-polygonal-background_52683-59997.jpg?w=1380&t=st=1697136991~exp=1697137591~hmac=ea73f477bd266aa86e3ee0d42e3d755b6af6f8b3f190ca77764294eca5365c05')] h-screen">
      <div className="w-1/2 h-2/3 flex bg-center drop-shadow-xl  bg-white backdrop-blur-lg  rounded-3xl overflow-hidden">
        <div className="w-6/12 "></div>
        <div className="w-6/12 px-8 py-9 ">
          <div className="w-full h-full flex flex-col items-center rounded-3xl pt-8  bg-white drop-shadow-xl">
            
              <Image src={Logo} width={90} height={90}/>
              <h1 className="text-center text-3xl text-black font-sans font-bold">
                NoteCloud
              </h1>
          
          </div>
        </div>
      </div>
    </div>
  );
}
