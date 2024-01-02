import { NavButSet } from "@/components/Context";
import { useContext } from "react";
import AccountContent from "./AccountPage/AccountContent";
import ApperanceContent from "./Appearance/AppearanceContent";

export default function SettingsContent() {
  const Mode = useContext(NavButSet);
    return (
      <main className="w-full h-full flex flex-col">
       {Mode?.activeSetName === "Account" && <AccountContent/>}
       {Mode?.activeSetName === "Appearance" && <ApperanceContent/>}
      </main>
    );
  }