//list doc
import { doc, getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { mydatabase } from "../Config/firebaseConfig";
export default function readDoc(userID:string) {

    const newdoc = doc(mydatabase, `collection-users/${userID}`);

    onSnapshot(newdoc, (docSnapsh) => {
        if (docSnapsh.exists()) {
            const docData = docSnapsh.data();
            console.log(`my data = ${JSON.stringify(docData)}`);
        }
    })
}
