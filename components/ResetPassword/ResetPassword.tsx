import { ChangeEvent, useContext, useEffect, useState } from "react";
import { NavButSet } from "../Context";
import {
  Auth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";
import { showErrorToast, showSuccessToast } from "..";

const ResetPassword = () => {
  const dataContext = useContext(NavButSet);

  const [newPassword, setNewPassword] = useState("");
  const [confNewpassword, setConfNewPassword] = useState("");

  const [errorInputNewPassStyle, SetErrorInputNewPassStyle] = useState(true);
  const [errorInputConfPassStyle, SetErrorInputConfPassStyle] = useState(true);

  const handleClickChangePassw = (PaswNew: string, PaswConf: string) => {
    if (typeof dataContext?.auth !== "string") {
      onAuthStateChanged(dataContext?.auth, (user) => {
        if (user) {
          if (newPassword === confNewpassword) {
            updatePassword(user, PaswConf)
              .then(() => {
                showSuccessToast("Password change");
              })
              .catch((error) => {
                showErrorToast("Passw not change");
              });
          } else {
          }
        }
      });
    }
  };
  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
    if (value.length >= 6) {
      SetErrorInputNewPassStyle(false);
    } else {
      SetErrorInputNewPassStyle(true);
    }
  };
  useEffect(() => {
   
    if (newPassword === confNewpassword) {
      SetErrorInputConfPassStyle(false);
    } else {
      SetErrorInputConfPassStyle(true);
    }
  }, [newPassword, confNewpassword]);

  return (
    <>
      <h3 className="font-bold text-sm  my-2">Change passord</h3>

      <span className="text-xs">New password</span>
      <input
        type="password"
        className={`${
          errorInputNewPassStyle ? "input-error" : ""
        } input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20`}
        value={newPassword}
        onChange={handleNewPasswordChange}
      />
      <span className="text-xs">Confirm new password</span>
      <input
        type="password"
        className={`${
          errorInputConfPassStyle ? "input-error" : ""
        } input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20`}
        onChange={(e) => {
          setConfNewPassword(e.target.value);
        }}
        value={confNewpassword}
      />
      <span className="text-xs">
        Make sure it is at least 6 characters AND you have confirmed the new
        password correctly.
      </span>
      <button
        className={`${
          errorInputConfPassStyle === true || errorInputNewPassStyle === true
            ? "btn-disabled"
            : ""
        } btn btn-outline  btn-sm w-[180px] mt-2`}
        onClick={() => handleClickChangePassw(newPassword, confNewpassword)}
      >
        Update passord
      </button>
    </>
  );
};
export default ResetPassword;
