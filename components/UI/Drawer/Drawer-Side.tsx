import { ButtonCloseDrawer, ButtonMenuNavigations } from "@/components";
import { NavButMenu, NavButMenuType, NavButSet } from "@/components/Context";
import Logo2 from "@/public/logoNC.svg";
import Image from "next/image";
import { useContext, useState } from "react";

const DrawerSide = () => {
  const DataContext = useContext(NavButSet);

  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay "
      ></label>
      <main className="flex h-screen flex-col ">
        <ul className="menu p-1 w-80 min-h-full  text-base-content  bg-black bg-opacity-10 backdrop-blur-lg  rounded-r-3xl ">
          <header className="flex flex-row justify-between items-center py-4 mx-5  border-b-[1px] border-bg-mydurkgrey">
            <div className="flex items-center">
              <Image src={Logo2} width={30} height={30} alt="__" />
              <h1 className="text-center text-lg text-gray-300 font-Orbitron ml-2">
                NoteCloud
              </h1>
            </div>
            <ButtonCloseDrawer />
          </header>
          {/* Содержимое боковой панели здесь */}

          <section className="flex flex-col w-full justify-center items-start">
            <div className="w-full flex flex-col justify-center items-center my-5 ">
              <img
                className={`${DataContext.importTheme.AvatarShape}`}
                src={DataContext.setSrc}
                style={{
                  minWidth: "100px",
                  minHeight: "100px",
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                }}
                alt="  "
              />
              {/* <h1 className="text-center text-lg mt-5 text-gray-300"> */}
              <h1 className="pt-5 max-h-24 px-10 w-[230px] font-bold text-center text-ellipsis overflow-hidden">
                {DataContext.userDisplayName}
              </h1>
            </div>
            <nav className="flex flex-col w-full px-5 ">
              <ButtonMenuNavigations />
            </nav>
          </section>
        </ul>
      </main>
    </div>
  );
};
export default DrawerSide;
