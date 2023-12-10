"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { showSuccessToast } from "@/components"

import { User_collect_datatype } from "@/types/Сollection-User-interfaces/types";

import googleSvg from "@/public/google.svg"

import { authh } from "@services/Firebase-Config/firebaseConfig";
import { getOrCreateUser } from "@services/Firebase-Methods/GetUser";
import { onAuthStateChanged, GoogleAuthProvider, User, signInWithRedirect } from "firebase/auth";


export default function ButtonGoogle() {
  const router = useRouter();
  const [userss, setUser] = useState<User | null | undefined>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(authh, provider);
  };

  const handleSignInWithGoogle = () => {
    googleSignIn();
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(
      authh,
      (currentUser: User | null) => {
        setUser(currentUser);

        if (userss !== null) {
          const userData: User_collect_datatype = {
            displayName: `${userss?.displayName}`,
            email: `${userss?.email}`,
            photoURL: `${userss?.photoURL}`,
            userID: `${userss?.uid}`,
            password: " ",
          };
          //если пользователь есть то выведет его данные а если нет то создаст а потом выведет
          router.push(`/profile/${userss?.uid}`);
          const googleUser = getOrCreateUser(userData.userID, userData);
          showSuccessToast("Successful login!");
          console.log("googleUser: ", googleUser);

        }
      }
    );

    return () => unsubcribe();
  }, [userss]);

  return (
    <button
      className="btn btn-ghost w-w90% max-w-xs m-1"
      onClick={handleSignInWithGoogle}
    >
      <Image src={googleSvg} alt="Google Logo"/>
      <div>Continue with Google</div>
    </button>
  );
}
