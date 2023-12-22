import { useContext } from "react";
import ThemeContext from "@/components/Context";
import AllertEditOrRemove from "./AlertEditOrRemove";


const AllertCall = () => {
  const Mode = useContext(ThemeContext);
  return (
    <>
      {Mode?.ModeEditOrRemove === "edit" && <AllertEditOrRemove Mode="edit"/>}
      {Mode?.ModeEditOrRemove === "remove" && <AllertEditOrRemove Mode="remove"/>}
      {Mode?.ModeEditOrRemove === "none" && <></>}
    </>
  );
};
export default AllertCall;
