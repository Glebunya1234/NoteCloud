//list doc
import { doc, getFirestore, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { mydatabase } from "../Config/firebaseConfig";

import { notFound } from "next/navigation";
import { Iuser_collect_datatype } from "../Interfaсe/collection-user-datatype";
import { getDoc } from "firebase/firestore/lite";

export  function readDoc(userID:string){
    const newdoc = doc(mydatabase, `collection-users/${userID}`);
    
    onSnapshot(newdoc, (docSnapsh) => {
        if (docSnapsh.exists()) {
            const docData = docSnapsh.data();
            console.log(`my data = ${JSON.stringify(docData)}`);
        }
        else{
         console.log("Not found user", userID);
        }
    })
    
}

