
import styles from "@/app/components/StyleAuthComponents/style-inputs.module.css";
import { useState } from "react";
import { RegisterButton } from "./ButtonSignUpEmailPassw";
import { AllertToast, showSuccessToast } from "../Toast/toast";

export function RegisterInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Email"
        className={styles.authinputs}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        className="input input-bordered w-full bg-transparent max-w-xs m-1 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Confirm the password"
        className="input input-bordered w-full bg-transparent max-w-xs m-1 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
      />
      <RegisterButton email={email} password={password} showSuccessToast={showSuccessToast} />
      
    </>
  );
}

