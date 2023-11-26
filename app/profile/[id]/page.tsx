"use client";

import { signOut } from "firebase/auth";
import { FiCheck } from "react-icons/fi";

import Image from "next/image";
import { CgSearch } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
import { authh, mydatabase } from "@/firebase/Config/firebaseConfig";
import { useRouter } from "next/navigation";
import Logo from "@/assets/logoNC.png";

import { readDoc, readDocTodo } from "@/firebase/Methods/ReadDataForUser";
import { useEffect, useState } from "react";
import { AllertToast, showSuccessToast } from "@/components/Toast/toast";
import { userService } from "@/firebase/Methods/UserServ";
import { MyUser } from "@/firebase/Methods/UserServ";
import { HiOutlinePlus } from "react-icons/hi";
import ButtonMenuNavigations from "@/components/Profile-components/Button-MenuNav";
import HomeContent from "@/components/Profile-components/HomeContent";
import TodosContent from "@/components/Profile-components/TodoContent";
// import {getUser} from "@/firebase/Methods/GetUser";

const getUser = async (id: string): Promise<MyUser | null> => {
  return await userService.getById(id);
};

const UserPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [activeMain, setActiveMain] = useState("Home");
  const [blocks, setBlocks] = useState([]);
  const [setSrc, setSetSrc] = useState(
    "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg"
  );
  const [userDisplayName, setuserDisplayName] = useState<string | null>("");

  const handleSignUp = () => {
    try {
      signOut(authh);
      router.push("../");
    } catch (error) {
      console.log(error);
    }
  };

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
            // "https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek="
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

  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (modal) {
      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.open = true;
      }
    }
  };

  // readDocTodo(params.id);
  return (
    <div className="flex justify-center items-center bg-cover  bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')] h-screen">
      <div className="w-11/12 h-h90% min-w-wmin max-w-1/2 flex  shadow-2xl  bg-bg-mygrey  rounded-3xl overflow-hidden">
        <div className="border-r-bg-mydurkgrey border-r-[1px] w-w-300 h-full flex items-center  flex-col ">
          <section className="w-full h-24 flex items-center justify-center ">
            <Image src={Logo} width={30} height={30} alt="__" />
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
            <button
              className="btn btn-outline btn-xs w-13 rounded-2xl"
              onClick={openModal}
            >
              <p className="mx-1">Edit</p>
            </button>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box bg-bg-mygrey">
                <h3 className="font-bold text-lg mb-2 ">
                  Fast edit your profile
                </h3>

                {/* Первая пара инпута и кнопки */}
                <span className="label-text">Edit your name</span>
                <div className="flex items-center mb-4">
                  <input
                    type="text"
                    placeholder="New Name"
                    className="input input-ghost w-full bg-transparent max-w-4xl  ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
                  />
                  <button className="btn btn-square bg-transparent border-[#3a393c] ml-2 hover:bg-bg-mydurkgrey">
                    <FiCheck style={{ fontSize: "20px" }} />
                  </button>
                </div>
                <span className="label-text">Upload a photo...</span>
                {/* Вторая пара инпута и кнопки */}
                <div className="flex items-center">
                  <input
                    type="file"
                    className="file-input w-full bg-transparent max-w-4xl ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
                  />
                  <button className="btn btn-square bg-transparent border-[#3a393c]  ml-2 hover:bg-bg-mydurkgrey">
                    <FiCheck style={{ fontSize: "20px" }} />
                  </button>
                </div>

                {/* Текст ниже */}
                <p className="mt-5 text-xs text-right">
                  Press ESC key or click outside to close
                </p>
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
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
            <div className="relative w-full mr-5">
              <input
                type="text"
                placeholder="Type here"
                className="input input-ghost w-full bg-transparent max-w-4xl mr-5 pl-10 pr-4 py-2 ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CgSearch />
              </div>
            </div>

            <button
              className="btn btn-ghost bg-bg-myyellow  rounded-2xl text-black ml-auto"
              onClick={handleSignUp}
            >
              SignOut
            </button>
            <button className="btn btn-square bg-transparent border-[#3a393c] rounded-2xl ml-5  hover:bg-bg-mydurkgrey">
              <CgClose style={{ fontSize: "20px" }} />
            </button>
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
    </div>
  );
};
export default UserPage;
