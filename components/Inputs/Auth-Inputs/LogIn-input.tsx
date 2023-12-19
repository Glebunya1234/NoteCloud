import { useState } from "react";
import { ButtonSignIn } from "@/components";
import styles from "@components/Inputs/style-inputs.module.css";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
export function LogInInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        value={email}
      />

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className={styles.passwinputs}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
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

      <ButtonSignIn email={email} password={password} />
    </>
  );
}
