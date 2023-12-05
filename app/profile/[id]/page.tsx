"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { HiOutlinePlus } from "react-icons/hi";

import { userService, MyUser } from "@services/User-Service/UserServ";

import Logo2 from "@/public/logoNC.svg";
import {
  TodosContent,
  HomeContent,
  ButtonMenuNavigations,
  AllertToast,
  ModalEditProf,
  BottonSignOut,
  BottonCloseTest,
  SearchInput,
  ButtonEditProfModal,
} from "@/components";


const getUser = async (id: string): Promise<MyUser | null> => {
  return await userService.getById(id);
};

const UserPage = ({ params }: { params: { id: string } }) => {
  const linkDefaultPhoto = "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg"
  
  const router = useRouter();
  const [activeMain, setActiveMain] = useState("Home");
  const [setSrc, setSetSrc] = useState(linkDefaultPhoto);
  const [userDisplayName, setuserDisplayName] = useState<string | null>("");
  
  

  useEffect(() => {
    const fetchData = async () => {
      const googleUser = await getUser(params.id);
      console.log(googleUser);
      if (googleUser !== null) {
        //Проверка на аватар
        if (googleUser.photoURL !== "") {
          setSetSrc(googleUser.photoURL);
        } else {
          setSetSrc(
            "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg"
          );
        }
        console.log(googleUser.displayName);
        //Проверка на ник нейм
        if (googleUser.displayName !== "") {
          setuserDisplayName(googleUser.displayName);
        } else {
          setuserDisplayName("");
        }
      } else {
        router.push("../404");
      }
    };
    fetchData();
  }, []); // Пустой массив завершает эффект после монтирования

  const handleButtonClick = (buttonName: string) => {
    setActiveMain(buttonName);
    console.log("buttonName==", buttonName);
  };

  // readDocTodo(params.id);
  return (
    <div className="flex justify-center items-center bg-cover  bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')] h-screen">
      <div className="w-11/12 h-h90% min-w-wmin max-w-1/2 flex  shadow-2xl  bg-bg-mygrey  rounded-3xl overflow-hidden">
        <div className="border-r-bg-mydurkgrey border-r-[1px] w-w-300 h-full flex items-center  flex-col ">
          
          <section className="w-full h-24 flex items-center justify-center ">
            <Image src={Logo2} width={30} height={30} alt="__" />
            <h1 className="text-center text-lg mx-2 text-gray-300 font-Orbitron">
              NoteCloud
            </h1>
          </section>
          
          <section className="w-full h-auto py-3 flex items-center justify-center flex-col">
            <img
              className="mask mask-circle"
              src={setSrc}
              width={100}
              height={100}
              alt="Avatar"
            />
            <h3 className="py-2 font-bold">{userDisplayName}</h3>
            <ButtonEditProfModal/>
          </section>
          
          <section className="w-full my-5 px-10 flex items-center flex-col justify-center ">
            <ButtonMenuNavigations onButtonClick={handleButtonClick} />
          </section>

        </div>
        <div className="w-full h-full flex flex-col">
          <header className="w-full h-24 flex items-center p-5">
            
            <h1 className="text-center text-3xl ml-5 mr-10 text-gray-300 ">
              Your&nbsp;Tasks
            </h1>

            <SearchInput />
            <BottonSignOut />
            <BottonCloseTest />
          </header>

          <main className="w-full h-full flex overflow-auto">
            {activeMain === "Home" && <HomeContent />}
            {activeMain === "Todos" && <TodosContent id={params.id} />}
          </main>

          <div className="h-24 w-full flex justify-end pb-5">
            <button className="btn btn-circle btn-ghost btn-lg text-black mx-5 z-50 bg-bg-myyellow">
              <HiOutlinePlus />
            </button>
          </div>

        </div>
      </div>
      <AllertToast />
      <ModalEditProf />
    </div>
  );
};
export default UserPage;
