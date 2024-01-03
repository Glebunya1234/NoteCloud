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

      <div className="relative w-full mb-1 flex justify-center">
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
          className="absolute inset-y-0 left-[83%] pt-1  flex z-50 items-center cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <HiEye /> : <HiEyeOff />}
        </motion.div>
      </div>
      <ButtonSignIn email={email} password={password} />
    </>
  );
}
