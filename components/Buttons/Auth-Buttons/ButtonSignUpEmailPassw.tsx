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
import { CreateUser, getOrCreateUser2 } from "@/services/Firebase-Methods/ReadDataForUser";

export function RegisterButton({
  email,
  password,
  confirm_password,
}: EmailAndPasswAndConfPassw) {
  const auth = getAuth();

  const handleSignUp = () => {
    if (password === confirm_password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Успешная регистрация
          const user = userCredential.user;
          //Show Toasts
          // console.log("userrrrrrrr", user);
          // console.log("authh", auth);
          showSuccessToast("Successfully registered!");
          // AddNewUser({
          //   userID: `${user.uid}`,
          //   displayName: " ",
          //   email: email,
          //   password: password,
          //   photoURL: "",
          // });
          // const userData1: User_collect_datatype = {
          //   displayName: `${user?.displayName}`,
          //   email: `${email}`,
          //   photoURL: `${user?.photoURL === null ? "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg" : user?.photoURL}`,
          //   userID: `${user?.uid}`,
          //   password: `${password}`,
          // };

          const userData: User_collect_datatype = {
            displayName: " ",
            email: `${email}`, 
            photoURL: "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg",
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
          const errorCode = error.code;
          const errorMessage = error.message;
          // Обработка ошибки
        });
    } else {
      showErrorToast("Registration error!");
      showMessangeToast("Password mismatch!", 2000);
      showMessangeToast("Please try again", 2000);
      console.log("pass", password, "\ncomfPassw", confirm_password);
    }
  };

  return (
    <button className="btn glass w-90% max-w-xs m-1 " onClick={handleSignUp}>
      Sign Up
    </button>
  );
}
