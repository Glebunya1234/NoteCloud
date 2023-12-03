import { doc, setDoc } from "firebase/firestore";
import { mydatabase } from "@/services/Firebase/firebaseConfig";
import {Iuser_collect_datatype } from "@/types/Сollection-User-interfaces/types"
export default function AddNewUser({
    userID,
    displayName = "",
    email,
    password,
    photoURL,
}: Iuser_collect_datatype) {

    //add doc
    const newdoc = doc(mydatabase, `collection-users/${userID}`);
    const docData: Iuser_collect_datatype = {
        userID: `${userID}`,
        displayName: `${displayName}`,
        email: `${email}`,
        photoURL: `${photoURL}`,
        password: `${password}`
    };
    setDoc(newdoc, docData);
}

