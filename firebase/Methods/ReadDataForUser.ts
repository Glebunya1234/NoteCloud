//list doc
import { DocumentData, QueryDocumentSnapshot, collection, doc, getDocs, getFirestore, onSnapshot, query, setDoc, where } from "firebase/firestore";
import { mydatabase } from "../Config/firebaseConfig";

import { notFound } from "next/navigation";
import { IdataTodos, Iuser_collect_datatype } from "../Interfaсe/collection-user-datatype";
import { getDoc } from "firebase/firestore/lite";

// поиск юзера по айди 
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

// поиск задач по айди юзера
export async function readDocTodo(userID: string): Promise<IdataTodos[]> {
    const dataref = collection(mydatabase, "collection-todos");

    // Create a query against the collection.
    const q = query(dataref, where("userId", "==", userID));


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

export async function AddNewTaskInBlock(userID: string, nameBlock: string, titleTodos: string) {
    const dataref = collection(mydatabase, "collection-todos");

    await setDoc(doc(dataref), {
        nameBlock: nameBlock , teg: "low priority",
        titleTodos: titleTodos, userId:userID
    });
}