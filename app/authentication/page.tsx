"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/Image/logoNC.png";
import {useEffect, useState} from "react"
import { authh } from "@/app/firebaseConfig"
import {signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider} from "firebase/auth"
import { User } from "firebase/auth";

export default function auth() {
const [user, setUser] = useState<User | null | undefined>(null)

const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(authh, provider)
}
  useEffect (()=>{
    const unsubcribe = onAuthStateChanged(authh,(currentUser: User | null)=> {
      setUser(currentUser)
    })
    return() => unsubcribe() 
  }, [user])


    const handleSignInWithGoogle = async () => {
      try {
         await googleSignIn()

      }
      catch(error)
      {
        console.log(error)
      }
    };
 

  return (
    <div className="flex justify-center items-center bg-cover  bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')] h-screen">
      <div className="w-1/2 h-2/3 flex bg-center shadow-2xl  backdrop-blur-lg  rounded-3xl overflow-hidden">
        <div className="w-6/12 "></div>

        <div className="w-6/12 px-8 py-9 ">
          <div className="w-full h-full flex flex-col items-center rounded-3xl pt-8 bg-opacity-70 bg-bg-mygrey shadow-2xl">
            <Image src={Logo} width={90} height={90} />
            <h1 className="text-center text-3xl text-gray-300 font-sans font-bold">
              NoteCloud
            </h1>
            <div className="flex w-full h-full flex-col  items-center py-9 ">
              <div className="tabs mb-2">
                <a className="tab tab-bordered tab-active">Log In</a>
                <a className="tab tab-bordered ">Sign Up</a>
              </div>
              <input
                type="text"
                placeholder="Login"
                className="input input-bordered w-full max-w-xs m-1 mt-5"
              />
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs m-1"
              />
              <button className="btn glass w-80 m-1">Log In</button>
              <div className="divider p-5">OR</div>
              <button className="btn btn-ghost" onClick={handleSignInWithGoogle}>
                <span>
                  <svg
                    class="svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="#4285f4"
                      fill-opacity="1"
                      fill-rule="evenodd"
                      stroke="none"
                      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
                    ></path>
                    <path
                      fill="#34a853"
                      fill-opacity="1"
                      fill-rule="evenodd"
                      stroke="none"
                      d="M9.003 18c2.43 0 4.467-.806 5.956-2.18l-2.909-2.26c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z"
                    ></path>
                    <path
                      fill="#fbbc05"
                      fill-opacity="1"
                      fill-rule="evenodd"
                      stroke="none"
                      d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                    ></path>
                    <path
                      fill="#ea4335"
                      fill-opacity="1"
                      fill-rule="evenodd"
                      stroke="none"
                      d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"
                    ></path>
                  </svg>
                </span>
                <div>Continue with Google</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
