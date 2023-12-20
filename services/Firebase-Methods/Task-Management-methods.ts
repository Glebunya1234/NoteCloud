import { collection, deleteDoc, deleteField, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { mydatabase } from "@services/Firebase-Config/firebaseConfig";
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
//Добавление ЗАДАЧИ если есть блок если нету блока создает новый 
export async function AddNewTaskInBlock(userID: string, nameBlock: string, titleTodos: string) {
    const dataref = collection(mydatabase, "collection-todos");

    await setDoc(doc(dataref), {
        nameBlock: nameBlock, teg: "low priority",
        titleTodos: titleTodos, userId: userID
    });
}
export async function deleteTaskInBlick(userID: string, nameBlock: string, titleTodos: string) {
    const dataRef = collection(mydatabase, 'collection-todos');
    const q = query(dataRef, where('userId', '==', userID), where('titleTodos', '==', titleTodos), where('nameBlock', '==', nameBlock));
    // Get the documents that match the query
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot=", querySnapshot)
    // Iterate through the documents and delete each one
    querySnapshot.forEach(async (documentSnapshot) => {

        // Use the document reference to delete the document
        await deleteDoc(doc(mydatabase, 'collection-todos', documentSnapshot.id));
    });
}

//Удаление блока по имени
export async function deleteBlockInName(userID: string, nameBlock: string) {
    const dataRef = collection(mydatabase, 'collection-todos');
    const q = query(dataRef, where('userId', '==', userID), where('nameBlock', '==', nameBlock));
    // Get the documents that match the query
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot=", querySnapshot)
    // Iterate through the documents and delete each one
    querySnapshot.forEach(async (documentSnapshot) => {

        // Use the document reference to delete the document
        await deleteDoc(doc(mydatabase, 'collection-todos', documentSnapshot.id));
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