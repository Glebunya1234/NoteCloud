import { doc, setDoc } from "firebase/firestore";
import { mydatabase } from "../Config/firebaseConfig";
import { emailAndPassw, user_collect_datatype } from "@/firebase/Interfaсe/collection-user-datatype"
export default function AddNewUser({
    userID,
    displayName = "",
    email,
    password,
    photoURL,
}: user_collect_datatype) {

    //add doc
    const newdoc = doc(mydatabase, `collection-users/${userID}`);
    const docData: user_collect_datatype = {
        userID: `${userID}`,
        displayName: `${displayName}`,
        email: `${email}`,
        photoURL: `${photoURL}`,
        password: `${password}`
    };
    setDoc(newdoc, docData);
}

