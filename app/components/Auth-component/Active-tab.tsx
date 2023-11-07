import { useState } from "react";
import { InputSignInLogin, InputSignInPassword, ButtonSignIn} from "./Inputs-SignIn";
import {  RegisterInputs } from "./Register-input";


export function ActiveTabs() {
    const [activeTab, setActiveTab] = useState("Log In");

    const handleTabClick = (tab: string) => {
      setActiveTab(tab);
    };


    return (
        <main className="flex w-full h-full flex-col  items-center ">
        <div className="tabs mb-2">
          <a
            className={`tab tab-bordered transition-all ease-linear ${
              activeTab === "Log In" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Log In")}
          >
            Log In
          </a>
          <a
            className={`tab tab-bordered transition-all ease-linear ${
              activeTab === "Sign Up" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Sign Up")}
          >
            Sign Up
          </a>
        </div>
        {activeTab === "Log In" ? (
          <>
            <InputSignInLogin />
            <InputSignInPassword />
            <ButtonSignIn />
          </>
        ) : (
          <>
            <RegisterInputs/>
            
          </>
        )}
      </main>
    );
  }
