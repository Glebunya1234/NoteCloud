import { ChangeEvent, useContext, useEffect, useState } from "react";
import { NavButSet } from "../Context";
import {
  Auth,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { showErrorToast, showSuccessToast } from "..";

const ChangeEmail = () => {
  const dataContext = useContext(NavButSet);
  const [email, setEmail] = useState("");
  const auth2 = getAuth();
  const [errorInputNewPassStyle, SetErrorInputNewPassStyle] = useState(true);


  const handleClickChangePassw = (email: string) => {
    if (typeof dataContext?.auth !== "string") {
      onAuthStateChanged(dataContext?.auth, async (user) => {
        if (user) {
         await updateEmail(auth2.currentUser!, `${email}`)
            .then(() => {
                showSuccessToast("Email change");
            })
            .catch((error) => {
                showErrorToast("Email not change");
            });
        }
      });
    }
  };
  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value)
    if (value.length >= 3  && value.includes("@gmail.com")) {
      SetErrorInputNewPassStyle(false);
    } else {
      SetErrorInputNewPassStyle(true);
    }
  };

  return (
    <>
      <h3 className="font-bold text-sm mb-2">Change Email</h3>

      <span className="text-xs">New email</span>
      <input
        type="text"
        className={`${
          errorInputNewPassStyle ? "input-error" : ""
        } input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20`}
        value={email}
        onChange={handleNewPasswordChange}
      />

      <span className="text-xs">
        Make sure it is at least 6 characters AND you have confirmed the new
        password correctly.
      </span>
      <button
        className={`${
        errorInputNewPassStyle === true
            ? "btn-disabled"
            : ""
        } btn btn-outline  btn-sm w-[180px] mt-2`}
        onClick={() => handleClickChangePassw(email)}
      >
        Update email
      </button>
    </>
  );
};
export default ChangeEmail;
