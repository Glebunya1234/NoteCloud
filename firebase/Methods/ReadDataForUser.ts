//list doc
import { DocumentData, QueryDocumentSnapshot, collection, doc, getDocs, getFirestore, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { mydatabase } from "../Config/firebaseConfig";

import { notFound } from "next/navigation";
import { IdataTodos, Iuser_collect_datatype } from "../Interfaсe/collection-user-datatype";
import { getDoc } from "firebase/firestore/lite";

export function readDoc(userID: string) {
    const newdoc = doc(mydatabase, `collection-users/${userID}`);

    onSnapshot(newdoc, (docSnapsh) => {
        if (docSnapsh.exists()) {
            const docData = docSnapsh.data();
            console.log(`my data = ${JSON.stringify(docData)}`);
        }
        else {
            console.log("Not found user", userID);
        }
    })

}

// export async function readDocTodo(userID: string) {
//     const citiesRef = collection(mydatabase, "collection-todos");

//     // Create a query against the collection.
//     const q = query(citiesRef, where("userId", "==", `${userID}`));
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// }

export async function readDocTodo(userID: string): Promise<IdataTodos[]> {
    const citiesRef = collection(mydatabase, "collection-todos");
  
    // Create a query against the collection.
    const q = query(citiesRef, where("userId", "==", userID));
  

      const querySnapshot = await getDocs(q);
      const todos: IdataTodos[] = [];
      // Преобразовать QueryDocumentSnapshot в обычные объекты данных
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const todoData = doc.data() as IdataTodos; // Приводим тип данных к интерфейсу Todo
        todos.push(todoData);
      });
    
      return todos;
   
  }