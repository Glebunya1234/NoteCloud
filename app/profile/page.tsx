"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { userService, MyUser } from "@services/User-Service/UserServ";
import hat from "@/public/dizzy-santa-hat-pompon-down-back.png";
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
  showSuccessToast,
} from "@/components";

import {
  RemoveOrEdit,
  HoverContextType,
  NavButSetType,
  NavButSet,
  NavButMenuType,
  NavButMenu,
} from "@/components/Context";


import { ReadNameData } from "@/services/Firebase-Methods/ReadDataForUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReadShemeColor } from "@/services/Local-Storage/ReadFromStorage";
import { motion } from "framer-motion";

import useMediaQueryHook from "@/hooks/useMediaQueryHook";
import { useMediaQuery } from "react-responsive";
import SpaceButtons from "@/components/Pagination-Navigations/Space-Note-ButtonsNav/SpaceNoteButtonsNav";
const UserPage = () => {
  const linkDefaultPhoto =
    "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg";

  const router = useRouter();
  const searchParams = useSearchParams();

  const userUid = searchParams.get("userUid");

  const [activeMain, setActiveMain] =
    useState<NavButMenuType["activeMain"]>("Home");

  const shouldSMRender = useMediaQueryHook("(max-width: 768px)", false);
  const shouldMDRender = useMediaQueryHook("(min-width: 768px)", false);
  const shouldLGRender = useMediaQueryHook("(min-width: 1024px)", false);
  const shouldSMRender2222 = useMediaQuery({ maxWidth: '768px' });

  const [activeSetName, setActiveSetName] =
    useState<NavButSetType["activeSetName"]>("Account");

  const [importTheme, setImportTheme] = useState({
    backgroundColor: "bg-bg-mygrey",
    textColor: "text-myGreyForFont",
    blur: "backdrop-blur-0",
    borderColor: "bg-mydurkgrey",
    CardColor: "bg-bg-myyellow",
    AvatarShape: "rounded-full",
  });

  const [userDisplayName, setuserDisplayName] =
    useState<NavButSetType["userDisplayName"]>("");

  const [setSrc, setSetSrc] =
    useState<NavButSetType["setSrc"]>(linkDefaultPhoto);

  const [ModeEditOrRemove, setModeEditOrRemove] =
    useState<HoverContextType["ModeEditOrRemove"]>("none");

  const auth = getAuth();
  const user = auth.currentUser;

  //#region Functions
  const fetchDataIMG = async () => {
    if (userUid !== null) {
      let imgref = await ReadNameData(userUid);
      if (
        imgref?.photoURL?.trim() === undefined ||
        imgref.photoURL?.trim() === ""
      ) {
        setSetSrc(linkDefaultPhoto);
      } else {
        setSetSrc(imgref.photoURL);
      }
    }
  };

  const fetchDataName = async () => {
    if (userUid !== null) {
      let nameRef = await ReadNameData(userUid);
      if (nameRef !== undefined) {
        setuserDisplayName(nameRef.displayName);
      } else {
        setuserDisplayName("");
      }
    }
  };

  const handleButtonSetClick = (buttonName: string) => {
    setActiveSetName(buttonName);
  };
  //#endregion

  //#region Objects

  const valueForAllert = {
    id: userUid || "",
    ModeEditOrRemove,
    setModeEditOrRemove,
  };
  const valueForNavBut: NavButSetType = {
    id: userUid || "",
    auth: auth,
    setSrc,
    setSetSrc,
    fetchDataName: fetchDataName,
    fetchDataIMG: fetchDataIMG,
    userDisplayName,
    setuserDisplayName,
    importTheme,
    setImportTheme,
    activeSetName,
    setActiveSetName,
  };
  const valueForNavMenu = {
    activeMain,
    setActiveMain,
  };
  //#endregion

  useEffect(() => {
    const fetchData = () => {
      onAuthStateChanged(auth, (user) => {
        if (user?.uid === userUid) {
          // setuserDisplayName(user.displayName);
          fetchDataName();
          fetchDataIMG();
        } else {
          router.push("../404");
        }
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const ReadShemeColorUseEffect = () => {
      const theme = ReadShemeColor();
      if (theme) {
        setImportTheme({
          backgroundColor: theme?.backgroundColor,
          textColor: theme?.textColor,
          blur: theme?.blur,
          borderColor: theme?.borderColor,
          CardColor: theme?.CardColor,
          AvatarShape: theme?.AvatarShape,
        });
      }
    };
    ReadShemeColorUseEffect();
  }, []);

  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <main className="relative overflow-hidden  ">
          {shouldLGRender && (
            <Image
              src={hat}
              width={110}
              height={120}
              alt="NoteCloud"
              className="absolute top-5 right-[4px]  z-50 block"
              style={{ transform: "scaleX(-1) rotate(-20deg)" }}
            />
          )}
          <div className="flex w-screen justify-center items-center h-screen bg-cover bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')]">
            <div
              className={`md:w-94% h-full md:h-90%   max-w-1/2 flex  shadow-2xl overflow-hidden ${
                importTheme === null
                  ? "bg-bg-mygrey backdrop-blur-0"
                  : `${importTheme.backgroundColor} ${importTheme.blur} ${importTheme.textColor}`
              }  md:rounded-3xl  w-full`}
            >
              {shouldMDRender && (
                <section
                  className={`flex border-${importTheme.borderColor} border-r-[1px]  w-w-300 h-full  items-center  flex-col `}
                >
                  <aside
                    className={`w-full h-24 mt-[1px] flex items-center border-b-[1px] border-${importTheme.borderColor}  justify-center `}
                  >
                    <Image src={Logo2} width={30} height={30} alt="  " />
                    <h1 className="text-center text-lg mx-2 font-Orbitron">
                      NoteCloud
                    </h1>
                  </aside>

                  <aside className="w-full h-auto py-10 flex items-center justify-center flex-col">
                    <img
                      className={`${importTheme.AvatarShape} min-w-[100px] min-h-[100px] w-[100px] h-[100px] object-cover `}
                      src={setSrc}
                      alt="  "
                    />
                    <h3 className="pt-2 px-10 max-h-20 w-[230px] font-bold text-center text-ellipsis overflow-hidden">
                      {userDisplayName}
                    </h3>
                  </aside>

                  <section
                    className={`w-full  pt-10 px-10 flex items-center flex-col border-t-[1px] border-${importTheme.borderColor} justify-center `}
                  >
                    <NavButMenu.Provider value={valueForNavMenu}>
                      <ButtonMenuNavigations />
                    </NavButMenu.Provider>
                  </section>
                </section>
              )}
              <section className="w-full h-full overflow-hidden flex flex-col  pb-5  items-center">
                <header
                  className={`w-full border-b-[1px] border-${importTheme.borderColor}`}
                >
                  {shouldMDRender ? (
                    <header className="w-full h-24 md:flex items-center p-5">
                      {activeMain === "Settings" && (
                        <ButtonSetNaw onButtonClick={handleButtonSetClick} />
                      )}
                      {activeMain === "Todos" && (
                        <>
                          <motion.h1
                            animate={{
                              y: 0,
                              opacity: 1,
                            }}
                            initial={{ opacity: 0, y: -200 }}
                            className="text-center text-3xl ml-5 mr-10"
                          >
                            {/* Task&nbsp;bar  */}
                            <SpaceButtons/>
                          </motion.h1>

                          {/* <SearchInput /> */}
                        </>
                      )}
                    </header>
                  ) : (
                    <header className="w-full h-24 flex items-center p-5">
                      <ButtonDrawer />
                      {activeMain === "Todos" && <>{/* <SearchInput /> */}</>}
                      {activeMain === "Settings" && (
                        <ButtonSetNaw onButtonClick={handleButtonSetClick} />
                      )}
                      {activeMain === "Todos" && (
                        <>
                          <motion.h1
                            animate={{
                              y: 0,
                              opacity: 1,
                            }}
                            initial={{ opacity: 0, y: -200 }}
                            className="text-center text-3xl ml-5 mr-10"
                          >
                            Task&nbsp;bar
                          </motion.h1>

                          {/* <SearchInput /> */}
                        </>
                      )}
                    </header>
                  )}
                </header>

                {/* ----------------------------------------------------------------------PageReder---------------------------------------------------------------- */}
                <aside className="flex flex-row w-full h-full overflow-hidden ">
                  <NavButSet.Provider value={valueForNavBut}>
                    <main className="w-full h-full flex   scroll-smooth px-5 overflow-auto  ">
                      {activeMain === "Home" && <HomeContent />}

                      {activeMain === "Settings" && <SettingsContent />}

                      {activeMain === "Todos" && (
                        <>
                          <RemoveOrEdit.Provider value={valueForAllert}>
                            <div className="relative overflow-auto snap-mandatory  snap-x min-w-full ">
                              <TodosContent />
                            </div>
                          </RemoveOrEdit.Provider>
                        </>
                      )}
                    </main>
                  </NavButSet.Provider>
                </aside>
                {/* -------------------------------------------------------------------Footer------------------------------------------------------------------- */}
                {activeMain === "Todos" && (
                  <motion.footer
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    initial={{ opacity: 0, y: 200 }}
                    className="w-full h-24 mt-5 items-center  flex"
                  >
                    <RemoveOrEdit.Provider value={valueForAllert}>
                      <div className="flex justify-between items-center w-full">
                        <AllertCall />
                        <DropdownEditBlock />
                      </div>
                    </RemoveOrEdit.Provider>
                  </motion.footer>
                )}
              </section>
            </div>
            <AllertToast />
          </div>
        </main>
      </div>
      {shouldSMRender && (
        <NavButMenu.Provider value={valueForNavMenu}>
          <NavButSet.Provider value={valueForNavBut}>
            <DrawerSide />
          </NavButSet.Provider>
        </NavButMenu.Provider>
      )}
    </div>
  );
};
export default UserPage;
