import { NavButSet } from "@/components/Context";
import { useContext } from "react";

export default function SettingsContent() {
  const Mode = useContext(NavButSet);
    return (
      <main className="w-full h-full px-5 flex flex-col justify-center items-center ">
       {Mode?.activeSetName === "Account" && <p>Account</p>}
       {Mode?.activeSetName === "Appearance" && <p>Appearance</p>}
      </main>
    );
  }