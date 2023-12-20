import ButtonAddBlock from "@/components/Buttons/DropDown-Buttons/ButtonAddBlock";
import {
  HiDotsVertical,
  HiOutlinePlus,
  HiOutlineTrash,
  HiPencil,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { ButtonDellBlock, ButtonEditBlock } from "@/components";
import RemoveAllert from "./RemoveAllert/RemoveAllert";
import AllertEdit from "./EditAllert/EditAllert";
import { useContext } from "react";
import ThemeContext from "@/components/Context";

const AllertCall = () => {
  const Mode = useContext(ThemeContext);
  return (
    <>
      {Mode?.ModeEditOrRemove === "edit" && <AllertEdit />}
      {Mode?.ModeEditOrRemove === "remove" && <RemoveAllert />}
      {Mode?.ModeEditOrRemove === "none" && <></>}
    </>
  );
};
export default AllertCall;
