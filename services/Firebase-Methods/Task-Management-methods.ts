import {collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import {mydatabase } from "@services/Firebase-Config/firebaseConfig";
import type { TodosData } from "@/types/Сollection-Todoes-interfaces/types";

// поиск задач по айди юзера
export async function readDocTodo(userID: string): Promise<TodosData[]> {
    const dataref = collection(mydatabase, "collection-todos");

    // Create a query against the collection.
    const q = query(dataref, where("userId", "==", userID));


    const querySnapshot = await getDocs(q);
    const todos: TodosData[] = [];
    // Преобразовать QueryDocumentSnapshot в обычные объекты данных
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const todoData = doc.data() as TodosData; // Приводим тип данных к интерфейсу Todo
        todos.push(todoData);
    });

    return todos;

}
//Добавление ЗАДАЧИ в блок
export async function AddNewTaskInBlock(userID: string, nameBlock: string, titleTodos: string) {
    const dataref = collection(mydatabase, "collection-todos");

    await setDoc(doc(dataref), {
        nameBlock: nameBlock , teg: "low priority",
        titleTodos: titleTodos, userId:userID
    });
}
//Добавление Блока для задач
// export async function AddNewBlock(userID: string, nameBlock: string, titleTodos: string) {
//     const dataref = collection(mydatabase, "collection-todos");

//     await setDoc(doc(dataref), {
//         nameBlock: nameBlock , teg: "low priority",
//         titleTodos: titleTodos, userId:userID
//     });
// }