import { useContext } from "react";
import {RemoveOrEdit} from "@/components/Context";
import AllertEditOrRemove from "./AlertEditOrRemove";
import { AnimatePresence, motion } from "framer-motion";


const AllertCall = () => {
  const Mode = useContext(RemoveOrEdit);
  return (
    <>
      {Mode?.ModeEditOrRemove === "edit" && <AllertEditOrRemove Mode="edit"/>}
      {Mode?.ModeEditOrRemove === "remove" && <AllertEditOrRemove Mode="remove"/>}
      {Mode?.ModeEditOrRemove === "none" && <></>}
    </>
  );
};
export default AllertCall;
