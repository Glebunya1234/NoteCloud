"use client";

import { User, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authh } from "@/firebase/Config/firebaseConfig";
import { onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import SvgGoogle from "../../../assets/Svg-Google";
import { showSuccessToast } from "@/components/Toast/toast";
import { Iuser_collect_datatype } from "@/firebase/Interfaсe/collection-user-datatype";
import { getOrCreateUser } from "@/firebase/Methods/GetUser";

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
          const userData: Iuser_collect_datatype = {
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
      <SvgGoogle />
      <div>Continue with Google</div>
    </button>
  );
}
