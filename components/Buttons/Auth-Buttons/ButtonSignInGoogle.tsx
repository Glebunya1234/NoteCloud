"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { showSuccessToast } from "@/components";

import type { User_collect_datatype } from "@/types/Сollection-User-interfaces/types";

import googleSvg from "@/public/google.svg";

import { authh } from "@services/Firebase-Config/firebaseConfig";
import { getOrCreateUser } from "@services/Firebase-Methods/GetUser";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  signInWithRedirect,
  getAuth,
} from "firebase/auth";
import { getOrCreateUser2 } from "@/services/Firebase-Methods/ReadDataForUser";

export default function ButtonGoogle() {
  const router = useRouter();
  const [userss, setUser] = useState<User | null | undefined>(null);
  const [isEnter, setEnter] = useState<Boolean>(false);
  const auth = getAuth();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(authh, provider);
  };

  const handleSignInWithGoogle = () => {
    googleSignIn();
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(authh, (currentUser: User | null) => {
      setUser(currentUser);

      if (userss !== null) {
        const userData: User_collect_datatype = {
          displayName: `${userss?.displayName}`,
          email: `${userss?.email}`,
          photoURL: `${userss?.photoURL}`,
          userID: `${userss?.uid}`,
          password: "",
        };

        getOrCreateUser2(userData.userID, userData).then(() => {
          setEnter(true);
          router.push(`/profile?userUid=${userData.userID}`);

          // showSuccessToast("Successful login!");
        });
      }
    });

    return () => unsubcribe();
  }, [userss]);

  return (
    <button
      className="btn btn-ghost w-90% max-w-xs m-1"
      onClick={handleSignInWithGoogle}
    >
      {isEnter ? (
        <span className="loading loading-bars loading-xs"></span>
      ) : (
        <>
          <Image src={googleSvg} alt="Google Logo" />
          <div>Continue with Google</div>
        </>
      )}
    </button>
  );
}
