"use client";
import { useState } from "react";
import { LogInInputs, RegisterInputs } from "@/components";
import { useSearchParams } from "next/navigation";

export function ActiveTabs() {
  const searchParams = useSearchParams();

  const typeAuth = searchParams.get("typeAuth");

  // const {typeAuth} = router.query;
  const [activeTab, setActiveTab] = useState(typeAuth);
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const getTabClassName = (tabName: string) => {
    return `tab tab-bordered transition-all ease-linear ${
      activeTab === tabName ? "tab-active" : ""
    }`;
  };

  return (
    <main className="flex w-full flex-col  items-center ">
      <div className="tabs tabs-bordered tabs-md  mb-2">
        <a
          className={getTabClassName("Log In")}
          onClick={() => handleTabClick("Log In")}
        >
          Log In
        </a>
        <a
          className={getTabClassName("Sign Up")}
          onClick={() => handleTabClick("Sign Up")}
        >
          Sign Up 
        </a>
      </div>
      {activeTab === "Log In" ? <LogInInputs /> : <RegisterInputs />}
    </main>
    // <div role="tablist" className="tabs tabs-lifted  ">
    //   <div className="flex">
    //     <input
    //       type="radio"
    //       name="my_tabs_2"
    //       role="tab"
    //       className="tab"
    //       aria-label="Tab 1"
    //       checked
    //     />
    //     <div role="tabpanel" className="tab-content ">
    //       <LogInInputs />
    //     </div>
    //   </div>

    //   <div className=" flex">
    //     <input
    //       type="radio"
    //       name="my_tabs_2"
    //       role="tab"
    //       className="tab"
    //       aria-label="Tab 2"
    //       checked
    //     />
    //     <div role="tabpanel" className="tab-content ">
    //       <div className="w-full flex-col">
    //         <RegisterInputs />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
