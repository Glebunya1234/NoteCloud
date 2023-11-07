import AddNewUser from "@/app/firebase/Methods/AddNewUser";
import { emailAndPassw } from "@/app/firebase/Interfaсe/collection-user-datatype";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { showErrorToast, showSuccessToast } from "../Toast/toast";

export function RegisterButton({ email, password }: emailAndPassw) {
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Успешная регистрация
        const user = userCredential.user;
        showSuccessToast("Successfully registered!");
        console.log(user);
      })
      .catch((error) => {
        showErrorToast("Successfully registered!");
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
