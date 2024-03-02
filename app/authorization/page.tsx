"use client";
import Image from "next/image";

import Logo2 from "@/public/logoNC.svg";

import { AllertToast, ActiveTabs, ButtonGoogle } from "@/components";
import BottonBack from "@/components/Buttons/Auth-Buttons/Buttons-router-Back";

export default function AuthPage() {
  return (
    <div className="flex w-screen justify-center items-center  bg-cover overflow-hidden bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')] h-screen bg-white">
      {/* <main className="lg:relative block w-9/12 max-w-[380px] md:max-w-none md:w-[450px]"> */}
      <main className="lg:relative  h-full sm:h-min block w-full sm:max-w-none sm:w-[450px]">
        
        <section className="w-full  h-full  sm:w-[450px]  flex bg-center shadow-2xl  backdrop-blur-lg  sm:rounded-3xl overflow-hidden transition ease-linear duration-1000 ">
          <div className="w-full items-center flex justify-center sm:px-8 sm:py-9 h-full">
            <div className="w-full  h-full flex flex-col sm:rounded-3xl overflow-hidden pt-4 bg-opacity-70 bg-bg-mygrey shadow-2xl">
              <section className="flex flex-col ">
                <BottonBack />
              </section>
              <section className="flex w-full h-full flex-col  justify-center items-center py-3 ">
                <div className="w-full flex justify-center mb-8 flex-col items-center">
                  <Image
                    src={Logo2}
                    width={80}
                    height={80}
                    alt="NoteCloud"
                    className=""
                  />
                  <h1 className="text-center font-Orbitron text-gray-300 text-2xl">
                    NoteCloud
                  </h1>
                </div>
                <ActiveTabs />
              </section>
              <section className="w-full flex flex-col mb-10 items-center">
                <div className="divider p-5">OR</div>
                <ButtonGoogle />
              </section>
            </div>
          </div>
        </section>
      </main>
      <AllertToast />
    </div>
  );
}
