import { useState } from "react";
import { ButtonSignIn } from "../Buttons/ButtonLogInEmailPassw";
import styles from "@/components/Auth-component/Inputs-auth/style-inputs.module.css";
export function LogInInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Email"
        className={styles.authinputs}
        onChange={(e)=> setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className={styles.authinputs}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <ButtonSignIn email={email} password={password}/>
    </>
  );
}
