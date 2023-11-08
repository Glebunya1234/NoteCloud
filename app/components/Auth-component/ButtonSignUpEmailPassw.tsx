import AddNewUser from "@/app/firebase/Methods/AddNewUser";
import {
  emailAndPassw,
  emailAndPasswAndConfPassw,
} from "@/app/firebase/Interfaсe/collection-user-datatype";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import {
  showErrorToast,
  showMessangeToast,
  showSuccessToast,
} from "../Toast/toast";

export function RegisterButton({
  email,
  password,
  confirm_password,
}: emailAndPasswAndConfPassw) {
  const auth = getAuth();

  const handleSignUp = () => {
    if (password === confirm_password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Успешная регистрация
          const user = userCredential.user;
          //Show Toasts
          console.log("userrrrrrrr", user);
          console.log("authh", auth);
          showSuccessToast("Successfully registered!");
          AddNewUser({
            userID: `${user.uid}`,
            displayName: " ",
            email: email,
            password: password,
            photoURL: "",
          });
        })
        .catch((error) => {
          //Show Toasts
          showErrorToast("Registration error!");
          showMessangeToast(
            "Check your email and/or password! \n\nMail should be gmail and the password is at least 6 characters",
            2000
          );
          const errorCode = error.code;
          const errorMessage = error.message;
          // Обработка ошибки
        });
    } else {
      showErrorToast("Registration error!");
      showMessangeToast("Password mismatch! \n\nPlease try again", 2000);
      console.log("pass",password, "\ncomfPassw", confirm_password)
    }
  };

  return (
    <button className="btn glass w-w90% max-w-xs m-1 " onClick={handleSignUp}>
      Sign Up
    </button>
  );
}
