"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
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
} from "@/components";

import {
  RemoveOrEdit,
  HoverContextType,
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
import { getAuth, onAuthStateChanged } from "firebase/auth";

const UserPage = () => {
  const linkDefaultPhoto =
    "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg";

  const router = useRouter();
  const searchParams = useSearchParams();

  const userUid = searchParams.get("userUid");

  const [activeMain, setActiveMain] =
    useState<NavButMenuType["activeMain"]>("Home");

  const [activeSetName, setActiveSetName] =
    useState<NavButSetType["activeSetName"]>("Account");

  // const [setSrc, setSetSrc] = useState<string | undefined>(linkDefaultPhoto);

  // const [userDisplayName, setuserDisplayName] = useState<
  //   string | null | undefined
  // >("");

  const [userDisplayName, setuserDisplayName] =
    useState<NavButSetType["userDisplayName"]>("");

  const [setSrc, setSetSrc] =
    useState<NavButSetType["setSrc"]>(linkDefaultPhoto);

  const [ModeEditOrRemove, setModeEditOrRemove] =
    useState<HoverContextType["ModeEditOrRemove"]>("none");

  const auth = getAuth();

  useEffect(() => {
    const fetchData = async () => {
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
  const valueForNavBut = {
    id: userUid || "",
    auth: auth,
    setSrc,
    setSetSrc,
    fetchDataName: fetchDataName,
    fetchDataIMG: fetchDataIMG,
    userDisplayName,
    setuserDisplayName,
    activeSetName,
    setActiveSetName,
  };
  const valueForNavMenu = {
    activeMain,
    setActiveMain,
  };
  //#endregion

  // useEffect(() => {
  //   fetchDataIMG();
  // }, []);

  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <main className="relative overflow-hidden">
          <Image
            src={hat}
            width={110}
            height={120}
            alt="NoteCloud"
            className="absolute top-5 right-[4px]  z-50 hidden lg:block"
            style={{ transform: "scaleX(-1) rotate(-20deg)" }}
          />
          <div className="flex w-screen justify-center items-center h-screen bg-cover md:bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')]">
            <div className="md:w-94% h-full md:h-90%  max-w-1/2 flex  shadow-2xl overflow-hidden bg-bg-mygrey  md:rounded-3xl  w-full">
              <section className="hidden md:flex border-r-bg-mydurkgrey border-r-[1px]  w-w-300 h-full  items-center  flex-col ">
                <aside className="w-full h-24 mt-[1px] flex items-center border-b-[1px] border-bg-mydurkgrey justify-center ">
                  <Image src={Logo2} width={30} height={30} alt="  " />
                  <h1 className="text-center text-lg mx-2 text-gray-300 font-Orbitron">
                    NoteCloud
                  </h1>
                </aside>

                <aside className="w-full h-auto py-10 flex items-center justify-center flex-col">
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
                    alt="  "
                  />
                  <h3 className="pt-2 px-10 max-h-20 w-[230px] font-bold text-center text-ellipsis overflow-hidden">
                    {userDisplayName}
                  </h3>
                </aside>

                <section className="w-full  pt-10 px-10 flex items-center flex-col border-t-[1px] border-bg-mydurkgrey justify-center ">
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
                          Task&nbsp;bar 
                        </h1>

                        {/* <SearchInput /> */}
                      </>
                    )}
                  </header>
                  <header className="md:hidden w-full h-24 flex items-center p-5">
                    <ButtonDrawer />
                    {activeMain === "Todos" && (
                      <>
                        {/* <SearchInput /> */}
                      </>
                    )}
                    {activeMain === "Settings" && (
                      <ButtonSetNaw onButtonClick={handleButtonSetClick} />
                    )}
                  </header>
                </header>
                {/* ----------------------------------------------------------------------PageReder---------------------------------------------------------------- */}
                <aside className="flex flex-row w-full h-full overflow-hidden ">
                  <main
                    className={`w-full h-full flex  scroll-smooth overflow-auto  ${
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
                            <TodosContent />
                          </div>
                        </RemoveOrEdit.Provider>
                      </>
                    )}
                  </main>
                </aside>
                {/* -------------------------------------------------------------------Footer------------------------------------------------------------------- */}
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

            {/* <ModalEditProf
              id={userUid || ""}
              oldUserName={`${userDisplayName}`}
              onPhotoChange={fetchDataIMG}
              onNameChange={fetchDataName}
            /> */}

            {/* <EditBlockModal /> */}
          </div>
        </main>
      </div>
      <NavButMenu.Provider value={valueForNavMenu}>
        <NavButSet.Provider value={valueForNavBut}>
          <DrawerSide />
        </NavButSet.Provider>
      </NavButMenu.Provider>
    </div>
  );
};
export default UserPage;
