"use client"
import Link from "next/link";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

import { authh } from "@/app/firebaseConfig" ;
import { useRouter } from "next/navigation";

export default function userPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const handleSignUp = () =>
  {
    try{
      signOut(authh)
      router.push("../")
    }
    catch(error){
      console.log(error)
    }
    
  }
  
  return (
    <div className="">
      
    <button onClick={handleSignUp}>SignOut</button>

    </div>
  );  
}
