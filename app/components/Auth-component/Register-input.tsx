import AddNewUser, {} from "@/app/firebase/Methods/AddNewUser"
import styles from "@/app/components/StyleAuthComponents/style-inputs.module.css";


export function RegisterInputName() {
    return (
      <input
        type="text"
        placeholder="Name"
        className={styles.authinputs}
      />
    );
  }



  export function RegisterInputNamePassword() {
    return (
      <input
        type="text"
        placeholder="Password"
        className="input input-bordered w-full bg-transparent max-w-xs m-1 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
      />
    );
  }
  export function RegisterInputNameConfirmPassword() {
    return (
      <input
        type="text"
        placeholder="Confirm the password"
        className="input input-bordered w-full bg-transparent max-w-xs m-1 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
      />
    );
  }


  export function RegisterButton() {
    return <button className="btn glass w-w90% max-w-xs m-1 " onClick={() => {AddNewUser()}}>Sign Up</button>;
  }