"use client";

import { User, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authh } from "@/app/firebase/Config/firebaseConfig";

import { onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import SvgGoogle from "../Svg-Google";
import { showSuccessToast } from "../Toast/toast";


export default function ButtonGoogle() {
  const [userss, setUser] = useState<User | null | undefined>(null);
  const router = useRouter();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(authh, provider);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(authh, (currentUser: User | null) => {
      setUser(currentUser);
      if (userss !== null) {
        showSuccessToast("Successful login!")
        console.log("usess: ", userss);
        router.push(`/profile/${userss?.uid}`);
      }
    });

    return () => unsubcribe();
  }, [userss]);

  const handleSignInWithGoogle = () => {
    googleSignIn();
  };

  return (
    <button
      className="btn btn-ghost w-w90% max-w-xs m-1"
      onClick={handleSignInWithGoogle}
    >
      <SvgGoogle />
      <div>Continue with Google</div>
    </button>
  );
}
