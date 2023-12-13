"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
  DrawerSide,
  ButtonDrawer,

  DropdownEditBlock,
} from "@/components";


const getUser = async (id: string): Promise<MyUser | null> => {
  return await userService.getById(id);
};

const UserPage = ({ params }: { params: { id: string } }) => {
  const linkDefaultPhoto =
    "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg";

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
          setSetSrc(linkDefaultPhoto);
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
  };

  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="flex w-screen justify-center items-center h-screen bg-cover md:bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')]">
          <div className="sm:w-11/12 h-full sm:h-h90%  max-w-1/2 flex  shadow-2xl  bg-bg-mygrey  sm:rounded-3xl  w-full">
            <section className="hidden md:flex border-r-bg-mydurkgrey border-r-[1px] w-w-300 h-full  items-center  flex-col ">
              <aside className="w-full h-24 flex items-center justify-center ">
                <Image src={Logo2} width={30} height={30} alt="__" />
                <h1 className="text-center text-lg mx-2 text-gray-300 font-Orbitron">
                  NoteCloud
                </h1>
              </aside>

              <aside className="w-full h-auto py-3 flex items-center justify-center flex-col">
                <img
                  className="mask mask-circle"
                  src={setSrc}
                  width={100}
                  height={100}
                  alt="Avatar"
                />
                <h3 className="py-2 font-bold">{userDisplayName}</h3>
                <ButtonEditProfModal />
              </aside>

              <section className="w-full my-5 px-10 flex items-center flex-col justify-center ">
                <ButtonMenuNavigations onButtonClick={handleButtonClick} />
              </section>
            </section>

            <section className="w-full h-full overflow-hidden flex flex-col  pb-5  items-center">
              <header className="w-full border-b-[1px] border-bg-mydurkgrey">
                <header className="hidden w-full h-24 sm:flex items-center p-5">
                  <h1 className="text-center text-3xl ml-5 mr-10 text-gray-300 ">
                    Your&nbsp;Tasks
                  </h1>

                  <SearchInput />
                  <BottonSignOut />
                  <BottonCloseTest />
                </header>
                <header className="sm:hidden w-full h-24 flex items-center p-5">
                  <ButtonDrawer />
                  <SearchInput />
                </header>
              </header>
              <aside className="flex flex-row w-full h-full overflow-hidden">
                <main
                  className={`w-full h-full flex  scroll-smooth overflow-auto ${
                    activeMain === "Todos" ? "main1" : ""
                  }`}
                >
                  {activeMain === "Home" && <HomeContent />}
                  {activeMain === "Todos" && (
                    <>
                      <div className=" relative overflow-auto min-w-full ">
                        <TodosContent id={params.id} />
                      </div>
                      <aside className="relative">
                        <DropdownEditBlock />
                      </aside>
                    </>
                  )}
                </main>
              </aside>
              <footer className="w-full h-12 "></footer>
            </section>
          </div>
          <AllertToast />
          <ModalEditProf />
        </div>
      </div>
      <DrawerSide />
    </div>
  );
};
export default UserPage;
// {activeMain === "Todos" && (
//   <>
//     <TodosContent id={params.id} />
//     {/* <div className="absolute bottom-5 w-full flex flex-row justify-end">
//       <ButtonAddBlock />
//     </div> */}
//   </>
// )}
