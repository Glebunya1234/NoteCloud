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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className={styles.authinputs}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Confirm the password"
        className={styles.authinputs}
        onChange={(e) => setConfPassword(e.target.value)}
        value={confpassword}
      />
      <motion.div
        whileHover={animationVariants.hover}
        transition={animationTransition}
        className="my-2 justify-center hover:cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        <span className="label-text-alt flex flex-row items-center">
          <p className="mx-1">View password</p>
          {showPassword ? <HiEye /> : <HiEyeOff />}
        </span>
      </motion.div>
      <RegisterButton
        email={email}
        password={password}
        confirm_password={confpassword}
      />
    </>
  );
}
