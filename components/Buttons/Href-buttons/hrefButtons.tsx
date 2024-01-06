"use client";

import { useRouter } from "next/navigation";

type ButtonType = {
  typeButton: "Log In" | "Sign Up";
};

const HrefButtons: React.FC<ButtonType> = ({ typeButton }) => {
  const router = useRouter();
  const handlClick = (typeAuth: ButtonType) => {
    
    router.push(`/Authorization?typeAuth=${typeAuth.typeButton}`);
  };
  return (
    <>
      {typeButton === "Log In" && (
        <a
          className="btn btn-sm text-xs sm:text-base sm:btn-md sm:px-5 md:mx-5 p-2 btn-ghost"
          onClick={()=>{handlClick({typeButton: "Log In"})}}
        >
          Log In
        </a>
      )}
      {typeButton === "Sign Up" && (
        <a
          className="btn btn-sm text-xs sm:text-base sm:btn-md sm:px-5 p-2 bg-bg-myyellow text-black hover:text-white hover:bg-bg-mydurkgrey border-0"
          onClick={()=>{handlClick({typeButton: "Sign Up"})}}
        >
          Sign Up
        </a>
      )}
    </>
  );
};
export default HrefButtons;
