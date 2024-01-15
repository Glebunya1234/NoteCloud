import { BottonSignOut, ModalEditProf } from "@/components";
import ChangeEmail from "@/components/Inputs/ChangeEmail/ChangeEmail";
import { NavButSet } from "@/components/Context";

import ChangeNameComponent from "@/components/Inputs/Profile-Inputs/ChangeNameComponent";
import ResetPassword from "@/components/ResetPassword/ResetPassword";
import EditPictureProfile from "@/components/UI/Edit-Picture-Profile/EditPictureProfile";
import { motion } from "framer-motion";
import { useContext } from "react";

export default function AccountContent() {
  const DataContext = useContext(NavButSet);
  return (
    <motion.main className="w-full h-full flex flex-col p-3 ">
      <ul>
        <li
          className={`border-b-[1px] border-${DataContext.importTheme.borderColor} mb-5`}
        >
          <h3 className="font-bold text-lg my-2">Account</h3>
        </li>

        <li className="flex flex-col-reverse lg:flex-row">
          <motion.div
            animate={{
              x: 0,
              scale: 1,
              opacity: 1,
            }}
            initial={{ opacity: 0, scale: 0.5, x: -200 }}
            className="flex flex-col"
          >
            <h3 className="font-bold text-sm ">Change username</h3>
            <ChangeNameComponent />
          </motion.div>
          <motion.div
            animate={{
              x: 0,
              scale: 1,
              opacity: 1,
            }}
            initial={{ opacity: 0, scale: 0.5, x: 200 }}
            className="flex flex-col lg:mx-20"
          >
            <h3 className="font-bold text-sm ">Profile picture</h3>
            <EditPictureProfile />
          </motion.div>
        </li>
      </ul>
      <motion.ul
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{ opacity: 0, y: 200 }}
      >
        <li
          className={`border-b-[1px] border-${DataContext.importTheme.borderColor}  mt-5 mb-5`}
        >
          <h3 className="font-bold text-lg my-2">Security </h3>
        </li>

        <li className="flex flex-col">
          <ResetPassword />
        </li>
      </motion.ul>
      <motion.ul
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{ opacity: 0, y: -200 }}
      >
        <li
          className={`border-b-[1px] border-${DataContext.importTheme.borderColor}  mt-8 mb-5`}
        >
          <h3 className="font-bold text-lg my-2">Sign out of your account</h3>
        </li>

        <li>
          <p className="text-sm">
            Once you log out of your account, you can log back in at any time by
            logging back in.
          </p>
          <BottonSignOut />
        </li>
      </motion.ul>
      <ModalEditProf />
    </motion.main>
  );
}
