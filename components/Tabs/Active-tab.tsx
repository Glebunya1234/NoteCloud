"use client";
import { useState } from "react";
import { RegisterInputs } from "@/components/Inputs/Register-input";
import { LogInInputs } from "@/components/Inputs/LogIn-input";

export function ActiveTabs() {
  const [activeTab, setActiveTab] = useState("Log In");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  const getTabClassName = (tabName:string) => {
    return `tab tab-bordered transition-all ease-linear ${activeTab === tabName ? "tab-active" : ""}`;
  };

  return (
    <main className="flex w-full h-full flex-col  items-center ">
      <div className="tabs mb-2">
        <a className={getTabClassName("Log In")} onClick={() => handleTabClick("Log In")} >
          Log In
        </a>
        <a className={getTabClassName("Sign Up")} onClick={() => handleTabClick("Sign Up")}>
          Sign Up
        </a>
      </div>
      {activeTab === "Log In" ? <LogInInputs /> : <RegisterInputs />}
    </main>
  );
}
