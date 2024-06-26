"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useContext, useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { FaRegFolder } from "react-icons/fa";

import Logo2 from "@/public/logoNC.svg";
import {
  ButtonMenuNavigations,
  AllertToast,
  DrawerSide,
  ButtonDrawer,
  DropdownEditBlock,
  AllertCall,
  ButtonSetNaw,
  HomeContent,
  SettingsContent,
  TodosContent,
  showSuccessToast,
  showMessangeToast,
} from "@/components";

import {
  RemoveOrEdit,
  HoverContextType,
  NavButSetType,
  NavButSet,
  NavButMenuType,
  NavButMenu,
  NavSpaceNames,
  ArraySpaceNamesContex,
} from "@/components/Context";

import { ReadNameData } from "@/services/Firebase-Methods/ReadDataForUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ReadShemeColor } from "@/services/Local-Storage/ReadFromStorage";
import { motion } from "framer-motion";

import useMediaQueryHook from "@/hooks/useMediaQueryHook";
import SpaceButtons from "@/components/Pagination-Navigations/Space-Note-ButtonsNav/SpaceNoteButtonsNav";
import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";
const UserPage = () => {
  const linkDefaultPhoto =
    "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg";

  const router = useRouter();

  // useSearchParams() !++==
  const searchParams = useSearchParams();

  const userUid = searchParams.get("userUid");

  const [activeMain, setActiveMain] =
    useState<NavButMenuType["activeMain"]>("Home");

  const shouldSMRender = useMediaQueryHook("(max-width: 768px)", false);
  const shouldMDRender = useMediaQueryHook("(min-width: 768px)", false);

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

  const [activeSpace, setActiveSpace] =
    useState<NavSpaceNames["activeSpace"]>("All");

  const [ArraySpaceCont, setArraySpaceNames] = useState<
    ArraySpaceNamesContex["ArraySpaceCont"]
  >([]);

  const auth = getAuth();

  const [isLoading, setIsLoading] = useState(true);

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

  const hendClickDellButton = () => {
    openAModalWindowbyID("AddSpaceDialog");
  };

  const clearLocalStoragePositions = () => {
    localStorage.removeItem("positions");
    showSuccessToast("Positions were reset");
    showMessangeToast("You can return to the page back", 1000);
    setActiveMain("Home");
  };
  //#endregion

  //#region Objects

  const valueForAllert = {
    id: userUid || "",
    ModeEditOrRemove,
    setModeEditOrRemove,
  };
  const valueForSpace = {
    activeSpace,
    setActiveSpace,
  };
  const valueForSpaceArray = {
    ArraySpaceCont,
    setArraySpaceNames,
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

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <main className="relative overflow-hidden  ">
          <div className="flex w-screen justify-center items-center h-screen bg-cover bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')]">
            <div
              className={`md:w-94% h-full md:h-90%   max-w-1/2 flex  shadow-2xl overflow-hidden ${
                importTheme === null
                  ? "bg-bg-mygrey backdrop-blur-0"
                  : `${importTheme.backgroundColor} ${importTheme.blur} ${importTheme.textColor}`
              }  md:rounded-3xl  w-full`}
            >
              {isLoading ? (
                <div className=" justify-center items-center flex"></div>
              ) : (
                <>
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
                </>
              )}

              <section className="w-full h-full overflow-hidden flex flex-col  pb-5  items-center">
                {/* ---------------------Pc--------------- */}
                {isLoading ? (
                  <div className=" justify-center items-center flex"></div>
                ) : (
                  <header
                    className={`w-full border-b-[1px] border-${importTheme.borderColor}`}
                  >
                    <nav className="w-full h-24 flex md:flex-row justify-start items-center p-5">
                      {!shouldMDRender ? (
                        <motion.aside
                          animate={{
                            x: 0,
                            opacity: 1,
                          }}
                          className="w-14"
                          initial={{ opacity: 0, x: 200 }}
                        >
                          <ButtonDrawer />
                        </motion.aside>
                      ) : (
                        <></>
                      )}
                      {activeMain === "Settings" && (
                        <ButtonSetNaw onButtonClick={handleButtonSetClick} />
                      )}
                      {activeMain === "Todos" && (
                        <motion.aside
                          animate={{
                            x: 0,
                            opacity: 1,
                          }}
                          initial={{ opacity: 0, x: -200 }}
                          className="overflow-x-auto w-full ml-5 md:ml-0 md:w-auto flex justify-between items-center"
                        >
                          <ArraySpaceNamesContex.Provider
                            value={valueForSpaceArray}
                          >
                            <NavSpaceNames.Provider value={valueForSpace}>
                              <SpaceButtons />
                            </NavSpaceNames.Provider>
                          </ArraySpaceNamesContex.Provider>
                          <button
                            className="btn btn-ghost my-1 ml-5 md:ml-0  rounded-lg md:rounded-2xl flex justify-between md:justify-start normal-case items-center"
                            onClick={hendClickDellButton}
                          >
                            <FaRegFolder className="text-[18px]" />
                          </button>
                        </motion.aside>
                      )}

                      {activeMain === "Todos" && shouldMDRender ?  (
                        <motion.aside
                          animate={{
                            x: 0,
                            opacity: 1,
                          }}
                          initial={{ opacity: 0, x: 200 }}
                          className="ml-auto min-w-[166px]"
                        >
                          <button
                            className="btn btn-ghost my-1 ml-auto  rounded-lg md:rounded-2xl flex justify-between md:justify-start normal-case items-center"
                            onClick={clearLocalStoragePositions}
                          >
                            <p>Reset positions</p>

                            <GrPowerReset className="text-[18px]" />
                          </button>
                        </motion.aside>
                      ) : (
                        <></>
                      )}
                    </nav>
                  </header>
                )}
                {/* ----------------------------------------------------------------------PageReder---------------------------------------------------------------- */}
                <aside className="flex flex-row w-full h-full overflow-hidden ">
                  {/* <span className="loading loading-ring loading-lg"></span> */}
                  {isLoading ? (
                    <div className="w-full h-full justify-center items-center flex">
                      <span className="loading loading-bars loading-lg"></span>
                    </div>
                  ) : (
                    <NavButSet.Provider value={valueForNavBut}>
                      <main className="w-full h-full flex   scroll-smooth px-5 overflow-auto ">
                        {activeMain === "Home" && <HomeContent />}

                        {activeMain === "Settings" && <SettingsContent />}

                        {activeMain === "Todos" && (
                          <>
                            <ArraySpaceNamesContex.Provider
                              value={valueForSpaceArray}
                            >
                              <NavSpaceNames.Provider value={valueForSpace}>
                                <RemoveOrEdit.Provider value={valueForAllert}>
                                  <div className="relative overflow-auto snap-mandatory  snap-x min-w-full ">
                                    <TodosContent />
                                  </div>
                                </RemoveOrEdit.Provider>
                              </NavSpaceNames.Provider>
                            </ArraySpaceNamesContex.Provider>
                          </>
                        )}
                      </main>
                    </NavButSet.Provider>
                  )}
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
