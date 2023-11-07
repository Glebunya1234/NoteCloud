import AddNewUser from "@/app/firebase/Methods/AddNewUser";
import { emailAndPassw } from "@/app/firebase/Interfaсe/collection-user-datatype";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { showErrorToast, showMessangeToast, showSuccessToast } from "../Toast/toast";

export function RegisterButton({ email, password }: emailAndPassw) {
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Успешная регистрация
        const user = userCredential.user;

        //Show Toasts
        showSuccessToast("Successfully registered!");
        console.log(user);
      })
      .catch((error) => {

        //Show Toasts
        showErrorToast("Registration error!");
        showMessangeToast("Check your email and/or password! \n\nMail should be gmail and the password is at least 6 characters", 2000);
        const errorCode = error.code;
        const errorMessage = error.message;
        // Обработка ошибки
      });
  };

  return (
    <button className="btn glass w-w90% max-w-xs m-1 " onClick={handleSignUp}>
      Sign Up
    </button>
  );
}
