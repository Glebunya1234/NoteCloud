
import Image from "next/image";
import { SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import Logo2 from "@/public/logoNC.svg";
import reacthoticocion from "@/public/alpha_h_box_icon_137974.svg";
import allertIco from "@/public/exclamation_icon_160163.svg";
import qeastionico from "@/public/questionmark_99738.svg";

import { TbBrandNextjs } from "react-icons/tb";
import HrefButtons from "@/components/Buttons/Href-buttons/hrefButtons";


export default  function HomePageNoteCloud() {
  return (
    <div className="flex w-full justify-center flex-col items-center h-full bg-cover bg-fixed bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')]">
      <header className="w-94% h-24 rounded-b-3xl backdrop-blur-lg  px-10 md:px-26  flex items-center justify-between bg-bg-mygrey/80 z-50 fixed top-0 shadow-xl">
        <aside className="flex items-center">
          <Image src={Logo2} className="w-[40px]" alt="  " />
          <h1 className="text-center text-xs sm:text-lg md:text-2xl mx-2 text-gray-300 font-Orbitron">
            NoteCloud
          </h1>
        </aside>
        <nav>
          <HrefButtons typeButton="Log In" />
          <HrefButtons typeButton="Sign Up" />
        </nav>
      </header>
      <main      
        className="w-full flex h-auto mt-[135px] flex-col justify-center items-center "
      >
        <section className="h-[300px] sm:h-[500px] 2xl:h-[700px]  w-94% rounded-3xl backdrop-blur-lg bg-bg-mygrey/80 items-center flex  px-10">
          <div className="lg:w-8/12 w-full xl:ml-20 text-center lg:text-left ">
            <h1 className="brightness-150 text-base-content flex justify-center lg:justify-start  contrast-150 font-Figtree font-extrabold text-2xl sm:text-6xl xl:text-8xl">
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

        <section className="h-[100px] md:h-[215px]  w-94% rounded-3xl  my-10 backdrop-blur-lg bg-bg-mygrey/80 items-center flex md:px-10">
          <div className="w-full ">
            <h1 className="  flex justify-center font-Figtree text-[#baffff] font-extrabold text-center text-xl sm:text-4xl  lg:text-6xl">
              About the project
            </h1>
          </div>
        </section>

        <section className="h-[340px] md:h-[500px] w-94% rounded-3xl lg:justify-between mb-10 backdrop-blur-lg bg-bg-mygrey/80 items-center flex justify-start flex-row px-10">
          <div className="lg:w-3/4 w-full ">
            <h1 className=" brightness-150 text-base-content  contrast-150 font-Figtree font-extrabold text-justify md:text-left text-sm sm:text-2xl lg:text-3xl">
              The "NoteCloud" project is an innovative web application designed
              for effective self-management and productivity improvement. It is
              an intelligent system for organizing notes and tasks based on
              cloud technologies.
            </h1>
          </div>
          <div className="hidden md:block  md:mx-2 xl:mx-10 ">
            <Image src={qeastionico} className="w-[200px] " alt=" " />
          </div>
        </section>

        <section className="h-[100px] md:h-[215px]  w-94% rounded-3xl  mt-0 my-10 backdrop-blur-lg bg-bg-mygrey/80 items-center flex md:px-10">
          <div className="w-full ">
            <h1 className="brightness-150 text-base-content flex justify-center contrast-150 font-Figtree  font-extrabold text-center text-xl sm:text-4xl  lg:text-6xl">
              <p className="text-bg-myyellow">NoteCloud</p>
              <p className="text-[#64ff61]">&nbsp;features:</p>
            </h1>
          </div>
        </section>

        <section className="flex justify-between w-94% flex-col lg:flex-row">
          <section className="w-full lg:w-[30%] min-w-[300px] aspect-w-4 aspect-h-4 rounded-3xl p-10 backdrop-blur-lg bg-bg-mygrey/80 items-center flex flex-col justify-center mb-10 lg:mb-0">
            <h1 className="text-white flex justify-center contrast-150 font-Figtree font-extrabold text-center text-xl sm:text-4xl xl:text-5xl mb-5">
              Cloud Storage:
            </h1>
            <p className="text-white font-Figtree font-extrabold text-justify xl:px-5 text-sm sm:text-2xl lg:text-xl">
              NoteCloud provides users with a convenient and secure cloud
              storage for saving and synchronizing their notes and tasks across
              different devices. This ensures data accessibility at any time and
              from anywhere.
            </p>
          </section>

          <section className="w-full lg:w-[30%] min-w-[300px] aspect-w-4 aspect-h-4 rounded-3xl p-10 backdrop-blur-lg bg-bg-mygrey/80 items-center flex flex-col justify-center mb-10 lg:mb-0">
            <h1 className="text-white flex justify-center contrast-150 font-Figtree font-extrabold text-center text-xl sm:text-4xl xl:text-5xl mb-5">
              Task and Goal Management:
            </h1>
            <p className="text-white font-Figtree font-extrabold text-justify xl:px-5 text-sm sm:text-2xl lg:text-xl">
              NoteCloud enables users to create tasks, set priorities, delete,
              edit, and most importantly, create separate spaces for tasks. It
              serves as a tool for effective planning and time management.
            </p>
          </section>

          <section className="w-full lg:w-[30%] min-w-[300px] aspect-w-4 aspect-h-4 rounded-3xl p-10 backdrop-blur-lg bg-bg-mygrey/80 items-center flex flex-col justify-center lg:mb-0">
            <h1 className="text-white flex justify-center contrast-150 font-Figtree font-extrabold text-center text-xl sm:text-4xl xl:text-5xl mb-5">
              Intuitive Interface:
            </h1>
            <p className="text-white font-Figtree font-extrabold text-justify xl:px-5 text-sm sm:text-2xl lg:text-xl">
              The NoteCloud interface is designed with simplicity and
              user-friendliness in mind. The web application features an
              intuitively understandable design, making it accessible to users
              of varying levels of technical proficiency.
            </p>
          </section>
        </section>

        <section className="h-[100px] md:h-[215px]  w-94% rounded-3xl backdrop-blur-lg my-10 bg-bg-mygrey/80 items-center flex md:px-10">
          <div className="w-full ">
            <h1 className=" brightness-150 flex justify-center contrast-150 font-Figtree font-extrabold text-center text-xl sm:text-4xl  lg:text-6xl">
              NoteCloud Security{" "}
              <p className="text-[#f87272]">&nbsp;Disclaimer</p>
            </h1>
          </div>
        </section>

        <section className="h-[340px] md:h-[500px] w-94% rounded-3xl backdrop-blur-lg mb-10 bg-bg-mygrey/80 items-center flex justify-end px-10">
          <div className="hidden md:block">
            <Image src={allertIco} className="w-[400px] pr-10" alt=" " />
          </div>
          <div className="lg:w-3/4 w-full ">
            <h1 className="brightness-150 text-base-content  contrast-150 font-Figtree font-extrabold text-justify md:text-left text-sm sm:text-2xl lg:text-3xl">
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

        <footer className="h-[215px] w-94% rounded-t-3xl backdrop-blur-lg md:mt-10 bg-bg-mygrey/80 items-center pt-14 flex flex-col md:px-32">
          <div className="w-full text-white flex flex-col items-center md:items-start justify-center overflow-hidden ">
            <p className="font-extrabold  text-base md:text-xl  mb-3">
              This course project was built with:
            </p>
            <div className="flex-row text-xs sm:text-sm md:text-base justify-center md:justify-start pl-10 md:pl-0 flex w-[500px]">
              <div className="font-bold flex-col mr-5">
                <p className="flex items-center">
                  <SiReact />{" "}
                  <a
                    href="https://react.dev/learn "
                    target="_blank"
                    className="ml-1 link link-hover"
                  >
                    React js
                  </a>
                </p>
                <p className="flex items-center">
                  <SiTailwindcss />{" "}
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    className="ml-1 link link-hover"
                  >
                    TailwindCSS
                  </a>
                </p>
                <p className="flex items-center">
                  <TbBrandNextjs />
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    className="ml-1 link link-hover"
                  >
                    Next.js
                  </a>
                </p>
              </div>
              <div className="font-bold flex-col mx-10">
                <p className="flex items-center">
                  <SiReact />
                  <a
                    href="https://react-icons.github.io/react-icons/"
                    target="_blank"
                    className="ml-1 link link-hover"
                  >
                    React-icons
                  </a>
                </p>
                <p className="flex items-center">
                  <Image src={reacthoticocion} className="w-[16px]" alt={""} />
                  <a
                    href="https://react-hot-toast.com"
                    target="_blank"
                    className="ml-1 link link-hover"
                  >
                    React-Hot-Toast
                  </a>
                </p>
                <p className="flex items-center">
                  <SiFramer />{" "}
                  <a
                    href="https://www.framer.com/motion/"
                    target="_blank"
                    className="ml-1 link link-hover"
                  >
                    framer-motion
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-white w-full flex-row flex justify-center md:justify-end  text-sm md:text-base ">
            <p>Source code available on&nbsp;</p>
            <a
              href="https://github.com/Glebunya1234/NoteCloud"
              target="_blank"
              className="link link-hover"
            >
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
