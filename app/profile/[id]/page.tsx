"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { userService, MyUser } from "@services/User-Service/UserServ";

import Logo2 from "@/public/logoNC.svg";
import {
  ButtonMenuNavigations,
  AllertToast,
  ModalEditProf,
  BottonCloseTest,
  SearchInput,
  ButtonEditProfModal,
  DrawerSide,
  ButtonDrawer,
  DropdownEditBlock,
  AllertCall,
  ButtonSetNaw,
  HomeContent,
  SettingsContent,
  TodosContent,
} from "@/components";

import {
  RemoveOrEdit,
  HoverContextType,
  ChangeNickNameAndPhotoUrl,
  ChandeNameAndPhoto,
  NavButSetType,
  NavButSet,
  NavButMenuType,
  NavButMenu,
} from "@/components/Context";
import { AnimatePresence, motion } from "framer-motion";
import DropdownEditBlockCopy from "@/components/UI/DropDown/EditDropDownBlockComponentcopy";
import {
  ReadImageData,
  ReadNameData,
} from "@/services/Firebase-Methods/ReadDataForUser";

const getUser = async (id: string): Promise<MyUser | null> => {
  return await userService.getById(id);
};

const UserPage = ({ params }: { params: { id: string } }) => {
  const linkDefaultPhoto =
    "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg";

  const router = useRouter();
  const [activeMain, setActiveMain] =
    useState<NavButMenuType["activeMain"]>("Home");

  const [activeSetName, setActiveSetName] =
    useState<NavButSetType["activeSetName"]>("Account");

  const [setSrc, setSetSrc] = useState<string | undefined>(linkDefaultPhoto);

  const [userDisplayName, setuserDisplayName] = useState<
    string | null | undefined
  >("");

  const [ModeEditOrRemove, setModeEditOrRemove] =
    useState<HoverContextType["ModeEditOrRemove"]>("none");

  const valueForAllert = {
    ModeEditOrRemove,
    setModeEditOrRemove,
  };
  const valueForNavBut = {
    activeSetName,
    setActiveSetName,
  };
  const valueForNavMenu = {
    activeMain,
    setActiveMain,
  };

  useEffect(() => {
    const fetchData = async () => {
      const googleUser = await getUser(params.id);
      console.log(googleUser);
      if (googleUser !== null) {
        //Проверка на аватар гугл авториз
        // if (googleUser.photoURL !== "") {
        //   setSetSrc(googleUser.photoURL);
        // } else {
        //   setSetSrc(linkDefaultPhoto);
        // }

        // console.log(googleUser.displayName);
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
  }, []);
  // Пустой массив завершает эффект после монтирования
  const fetchDataIMG = async () => {
    let imgref = await ReadImageData(params.id); // Проверка на аватар через обращение в бд в коллекцию
    if (imgref !== undefined) {
      setSetSrc(imgref);
    } else {
      setSetSrc(linkDefaultPhoto);
    }
    let nameRef = await ReadNameData(params.id); // Проверка на аватар через обращение в бд в коллекцию
    if (nameRef !== undefined) {
      setuserDisplayName(nameRef);
    } else {
      setuserDisplayName("");
    }
  };

  useEffect(() => {
    fetchDataIMG();
  }, []);

  // const handleButtonNavClick = (buttonName: string) => {
  //   if (
  //     buttonName == "Home" ||
  //     buttonName == "Todos" ||
  //     buttonName == "Settings"
  //   )
  //     setActiveMain(buttonName);
  //   else console.log("Unknown button");
  // };
  const handleButtonSetClick = (buttonName: string) => {
    setActiveSetName(buttonName);
  };

  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <div className="flex w-screen justify-center items-center h-screen bg-cover md:bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')]">
          <div className="md:w-94% h-full md:h-90%  max-w-1/2 flex  shadow-2xl overflow-hidden bg-bg-mygrey  md:rounded-3xl  w-full">
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
                  style={{
                    minWidth: "100px",
                    minHeight: "100px",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  alt="Avatar"
                />
                <h3 className="py-2 font-bold">{userDisplayName}</h3>
                <ButtonEditProfModal />
              </aside>

              <section className="w-full my-5 px-10 flex items-center flex-col justify-center ">
                <NavButMenu.Provider value={valueForNavMenu}>
                  <ButtonMenuNavigations />
                </NavButMenu.Provider>
              </section>
            </section>

            <section className="w-full h-full overflow-hidden flex flex-col  pb-5  items-center">
              <header className="w-full border-b-[1px] border-bg-mydurkgrey">
                <header className="hidden w-full h-24 md:flex items-center p-5">
                  {activeMain === "Settings" && (
                    <ButtonSetNaw onButtonClick={handleButtonSetClick} />
                  )}
                  {activeMain === "Todos" && (
                    <>
                      <h1 className="text-center text-3xl ml-5 mr-10 text-gray-300 ">
                        Your&nbsp;Tasks
                      </h1>

                      <SearchInput />
                      <BottonCloseTest />
                    </>
                  )}
                </header>
                <header className="md:hidden w-full h-24 flex items-center p-5">
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
                  {activeMain === "Settings" && (
                    <NavButSet.Provider value={valueForNavBut}>
                      <SettingsContent />
                    </NavButSet.Provider>
                  )}

                  {activeMain === "Todos" && (
                    <>
                      <RemoveOrEdit.Provider value={valueForAllert}>
                        <div className="relative overflow-auto min-w-full ">
                          <TodosContent id={params.id} />
                        </div>
                      </RemoveOrEdit.Provider>
                    </>
                  )}
                </main>
              </aside>
              {activeMain === "Todos" && (
                <footer className="w-full h-24 mt-5 items-center  flex">
                  <RemoveOrEdit.Provider value={valueForAllert}>
                    <div className="flex justify-between items-center w-full">
                      <AllertCall />
                      <DropdownEditBlockCopy />
                    </div>
                  </RemoveOrEdit.Provider>
                </footer>
              )}
            </section>
          </div>
          <AllertToast />

          <ModalEditProf
            id={params.id}
            oldUserName={`${userDisplayName}`}
            onPhotoChange={fetchDataIMG}
          />

          {/* <EditBlockModal /> */}
        </div>
      </div>
      <NavButMenu.Provider value={valueForNavMenu}>
        <DrawerSide />
      </NavButMenu.Provider>
    </div>
  );
};
export default UserPage;
