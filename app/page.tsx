import Image from "next/image";

import Logo2 from "@/public/logoNC.svg";
import allertIco from "@/public/exclamation_icon_160163.svg";

import { AllertToast, ActiveTabs, ButtonGoogle } from "@/components";
import HrefButtons from "@/components/Buttons/Href-buttons/hrefButtons";

export default function HomePageNoteCloud() {
  return (
    <div className="flex w-full justify-center flex-col items-center h-full bg-cover bg-fixed bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')]">
      <header className="w-94% h-24 rounded-b-3xl backdrop-blur-xl  px-10 md:px-26  flex items-center justify-between bg-bg-mygrey/95 z-50 fixed top-0 shadow-xl">
        <aside className="flex items-center">
          <Image src={Logo2} className="w-[40px]" alt="  " />
          <h1 className="text-center text-xs sm:text-lg md:text-2xl mx-2 text-gray-300 font-Orbitron">
            NoteCloud
          </h1>
        </aside>
        <nav>
        <HrefButtons typeButton="Log In"/>
        <HrefButtons typeButton="Sign Up"/>
        </nav>
      </header>
      <main className="w-full flex h-auto mt-[135px] flex-col justify-center items-center ">
        <section className="h-[300px] sm:h-[500px] 2xl:h-[700px]  w-94% rounded-3xl backdrop-blur-xl bg-bg-mygrey/95 items-center flex  px-10">
          <div className="lg:w-8/12 w-full xl:ml-20 text-center lg:text-left ">
            <h1 className=" brightness-150 text-base-content flex justify-center lg:justify-start  contrast-150 font-Figtree font-extrabold text-2xl sm:text-6xl xl:text-8xl">
              The <p className="text-bg-myyellow">&nbsp;NoteCloud</p>,
            </h1>

            <h1 className=" brightness-150 text-base-content  contrast-150 font-Figtree font-extrabold text-xl sm:text-3xl xl:text-5xl">
              project is a web application designed for creating, editing, and
              deleting scheduled tasks.
            </h1>
          </div>
          <div className="hidden w-4/12  lg:flex justify-center items-center">
            <div className="w-72 h-72 bg-white/25 backdrop-blur-xl  flex justify-center items-center rounded-3xl">
              <Image src={Logo2} width={200} height={200} alt="  " />
            </div>
          </div>
        </section>
        <section className="h-[100px] md:h-[215px]  w-94% rounded-3xl backdrop-blur-xl my-10 bg-bg-mygrey/95 items-center flex md:px-10">
          <div className="w-full ">
            <h1 className=" brightness-150 flex justify-center contrast-150 font-Figtree font-extrabold text-center text-xl sm:text-4xl  lg:text-6xl">
              NoteCloud Security{" "}
              <p className="text-[#f87272]">&nbsp;Disclaimer</p>
            </h1>
          </div>
        </section>

        <section className="h-[340px] md:h-[500px] w-94% rounded-3xl backdrop-blur-xl mb-10 bg-bg-mygrey/95 items-center flex justify-end px-10">
          <div className="hidden md:block">
            <Image src={allertIco} className="w-[400px] pr-10" alt=" " />
          </div>
          <div className="lg:w-3/4 w-full ">
            <h1 className=" brightness-150 text-base-content  contrast-150 font-Figtree font-extrabold text-justify md:text-left text-sm sm:text-2xl lg:text-3xl">
              The author of this project does not take responsibility for the
              security and protection of user data. The application is developed
              solely for educational purposes, and the author does not guarantee
              the complete security of user information. Users should be aware
              that using NoteCloud may not provide a high level of data
              security. and it is recommended to avoid using personal or
              confidential information.
            </h1>
          </div>
        </section>
        <section className="h-[215px] w-94% rounded-t-3xl backdrop-blur-xl mt-10 bg-bg-mygrey/95 items-center flex px-10"></section>
      </main>
    </div>
  );
}
