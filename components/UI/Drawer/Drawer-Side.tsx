import { ButtonCloseDrawer } from "@/components";
import Logo2 from "@/public/logoNC.svg";
import Image from "next/image";
const DrawerSide = () => {
  return (
    <div className="drawer-side ">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay "
      ></label>
      <main className="flex h-screen flex-col ">
        <ul className="menu p-1 w-80 min-h-full  text-base-content  bg-black bg-opacity-10 backdrop-blur-lg  rounded-r-3xl ">
          <footer className="flex flex-row justify-between items-center p-4">
            <div className="flex items-center" >
              <Image src={Logo2} width={30} height={30} alt="__" />
              <h1 className="text-center text-lg text-gray-300 font-Orbitron ml-2">
                NoteCloud
              </h1>
            </div>
            <ButtonCloseDrawer />
          </footer>
          {/* Содержимое боковой панели здесь */}
          <li>
            
          </li>
          <li>
            
          </li>
          <li></li>
        </ul>
      </main>
    </div>
  );
};
export default DrawerSide;
