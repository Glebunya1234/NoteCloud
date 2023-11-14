import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { IemailAndPassw } from "@/firebase/Interfaсe/collection-user-datatype";
import { showErrorToast, showMessangeToast, showSuccessToast } from "@/components/Toast/toast"



export function ButtonSignIn({ email, password }: IemailAndPassw) {
    const auth = getAuth();
  

    const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("userrrrrrrr",user);
        console.log("authh",auth);
        showSuccessToast("Successful login!")
        // ...
      })
      .catch((error) => {
        showErrorToast("Registration error!");
        showMessangeToast("Check your email and/or password! \n\nMail should be gmail and the password is at least 6 characters", 2000);
     
      });
    }
  
    return <button className="btn glass w-w90% max-w-xs m-1 " onClick={handleLogIn}>Log In</button>;
  }