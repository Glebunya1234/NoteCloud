import { useState } from "react";
import styles from "@components/Inputs/style-inputs.module.css";
import { RegisterButton } from "@/components";
import { motion } from "framer-motion";
import { HiEye, HiEyeOff } from "react-icons/hi";

export function RegisterInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const animationVariants = {
    hover: {
      scale: 1.05,
    },
  };

  const animationTransition = {
    type: "spring",
    stiffness: 400,
    damping: 20,
  };

  return (
    <>
      <input
        type="text"
        placeholder="Email"
        className={styles.authinputs}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className=" w-full flex justify-center">
        <div className="relative max-w-sm w-full  flex justify-center">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={styles.authinputs}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <motion.div
            whileHover={animationVariants.hover}
            transition={animationTransition}
            className="absolute inset-y-0 left-[83%] flex z-50 items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <HiEye /> : <HiEyeOff />}
          </motion.div>
        </div>
      </div>
      <div className=" w-full flex justify-center">
        <div className="relative max-w-sm w-full flex justify-center">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm the password"
            className={styles.authinputs}
            onChange={(e) => setConfPassword(e.target.value)}
            value={confpassword}
          />
          <motion.div
            whileHover={animationVariants.hover}
            transition={animationTransition}
            className="absolute inset-y-0 left-[83%] flex z-50 items-center cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            {showConfirmPassword ? <HiEye /> : <HiEyeOff />}
          </motion.div>
        </div>
      </div>
      <RegisterButton
        email={email}
        password={password}
        confirm_password={confpassword}
      />
    </>
  );
}
