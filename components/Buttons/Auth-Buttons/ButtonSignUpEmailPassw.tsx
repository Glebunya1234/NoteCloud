import AddNewUser from "@services/Firebase-Methods/AddNewUser";
import type {
  EmailAndPasswAndConfPassw,
  User_collect_datatype,
} from "@/types/Сollection-User-interfaces/types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  showErrorToast,
  showMessangeToast,
  showSuccessToast,
} from "@/components";
import {
  CreateUser,
  getOrCreateUser2,
} from "@/services/Firebase-Methods/ReadDataForUser";
import { isEmailValid } from "@/utils/Regex-email";

export function RegisterButton({
  email,
  password,
  confirm_password,
}: EmailAndPasswAndConfPassw) {
  const auth = getAuth();

  const handleSignUp = () => {
    
    if (password === confirm_password && isEmailValid(email)) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Успешная регистрация
          const user = userCredential.user;
          showSuccessToast("Successfully registered!");

          const userData: User_collect_datatype = {
            displayName: " ",
            email: `${email}`,
            photoURL:
              "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg",
            userID: `${user.uid}`,
            password: password,
          };
          CreateUser(userData.userID, userData);
          // getOrCreateUser2(userData.userID, userData)
        })
        .catch((error) => {
          //Show Toasts
          showErrorToast("Registration error!");
          showMessangeToast(
            "Check your email and/or password! \n\nMail should be gmail and the password is at least 6 characters",
            2000
          );
        });
    } else {
      showErrorToast("Registration error!");
      showMessangeToast("Password mismatch!", 2000);
      showMessangeToast("Please try again", 2000);
    }
  };

  return (
    <button className="btn glass w-90% max-w-xs m-1 " onClick={handleSignUp}>
      Sign Up
    </button>
  );
}
