import Image from "next/image";
import { motion } from "framer-motion";
import Logo2 from "@/public/logoNC.svg";
import hat from "@/public/dizzy-santa-hat-pompon-down-back.png";
import { AllertToast, ActiveTabs, ButtonGoogle } from "@/components";

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
              {/* <div className="w-6/12 px-8 pr-4  py-9 max-h-full hidden md:block">
                <div className="w-full h-full flex flex-col border-[1px] rounded-3xl border-bg-mydurkgrey  px-4 py-3 items-center overflow-hidden ">
                  <p className="text-justify max-h-[552px] text-lg overflow-auto">
                    The NoteCloud project is a web application designed for
                    creating, editing, and deleting scheduled tasks. It is
                    important to note that the author of this project does not
                    take responsibility for the security and protection of user
                    data. The application was developed solely for educational
                    purposes, and the author does not guarantee the complete
                    security of user information. Users should be aware that the
                    use of NoteCloud may not provide a high level of data
                    security, and it is recommended to avoid using personal or
                    sensitive information. The author does not recommend storing
                    important data in the application and does not guarantee the
                    preservation of information in case of potential security
                    threats. Remember that the application is developed for
                    educational purposes, and its use is at your own risk. The
                    author advises paying attention to data security and using
                    the application with consideration of limitations in the
                    protection of confidential information. You can visit the
                    author's{" "}
                    <a
                      className="link"
                      target="_blank"
                      href="https://github.com/Glebunya1234"
                    >
                      GitHub
                    </a>{" "}
                    by following the link
                  </p>
                </div>
              </div> */}
            
          
              <div className="w-full md:px-8 md:py-9 max-h-full">
                <div className="w-full h-full flex flex-col items-center rounded-3xl overflow-hidden pt-8 bg-opacity-70 bg-bg-mygrey shadow-2xl">
                  <Image src={Logo2} width={80} height={80} alt="NoteCloud" />
                  <h1 className="text-center font-Orbitron text-gray-300 text-2xl">
                    NoteCloud
                  </h1>
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
