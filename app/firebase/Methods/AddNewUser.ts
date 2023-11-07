import { doc, setDoc } from "firebase/firestore";
import { mydatabase } from "../Config/firebaseConfig";
import { user_collect_datatype } from "@/app/firebase/Interfaсe/collection-user-datatype"
export default function AddNewUser() {

    const name = "Глеб Буцкий"
    const eml= "glebbuckiy@gmail.com"
    const photo = "https://lh3.googleusercontent.com/a/ACg8ocLEPkaYChKDjS3eUDCBFl_W-cSwM6noThVKg4G6msD61no=s96-c"


    //add doc
    const newdoc = doc(mydatabase, 'collection-users/MpDlhqv9ipbqizZjviJB0YeDM6L2');
    const docData: user_collect_datatype = {
        displayName: "",
        email: "",
        photoURL: "",
        password:""
    };
    setDoc(newdoc, docData);
}

