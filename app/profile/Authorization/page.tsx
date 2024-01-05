import Image from "next/image";
import { motion } from "framer-motion";
import Logo2 from "@/public/logoNC.svg";
import hat from "@/public/dizzy-santa-hat-pompon-down-back.png";
import { AllertToast, ActiveTabs, ButtonGoogle } from "@/components";
import BottonBack from "@/components/Buttons/Auth-Buttons/Buttons-router-Back";

export default function AuthPage() {
  return (
    <div className="flex w-screen justify-center items-center  bg-cover overflow-hidden bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')] h-screen bg-white">
      <main className="lg:relative block w-9/12 max-w-[380px] md:max-w-none md:w-[450px]">
        <Image
          src={hat}
          width={100}
          height={100}
          alt="NoteCloud"
          className="absolute -top-9 -right-14 m-4 z-50 hidden lg:block"
          style={{ transform: "scaleX(-1) rotate(-20deg)" }}
        />
        <section className="w-full lg:w-[450px]  ml-1  flex bg-center shadow-2xl  backdrop-blur-lg  rounded-3xl overflow-hidden transition ease-linear duration-1000 ">
          <div className="w-full md:px-8 md:py-9 max-h-full">
            <div className="w-full h-full flex flex-col rounded-3xl overflow-hidden pt-4 bg-opacity-70 bg-bg-mygrey shadow-2xl">
             <div className="flex flex-col">
                <BottonBack />
                <div className="w-full flex justify-center flex-col items-center">
                  <Image src={Logo2} width={80} height={80} alt="NoteCloud" />
                  <h1 className="text-center font-Orbitron text-gray-300 text-2xl">
                    NoteCloud
                  </h1>
                </div>
             </div>
              <div className="flex w-full h-full flex-col  items-center py-9 ">
                <ActiveTabs />
                <div className="divider p-5">OR</div>
                <ButtonGoogle />
              </div>
            </div>
          </div>
        </section>
      </main>
      <AllertToast />
    </div>
  );
}
