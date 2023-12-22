import { collection, deleteDoc, deleteField, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { mydatabase } from "@services/Firebase-Config/firebaseConfig";
import type { TodosData } from "@/types/Сollection-Todoes-interfaces/types";

const dataRefTodos = collection(mydatabase, 'collection-todos');

// поиск задач по айди юзера
export async function readDocTodo(userID: string): Promise<TodosData[]> {


    // Create a query against the collection.
    const q = query(dataRefTodos, where("userId", "==", userID));


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


    await setDoc(doc(dataRefTodos), {
        nameBlock: nameBlock, teg: "low priority",
        titleTodos: titleTodos, userId: userID
    });
}
//Удаление Задачи 
export async function deleteTaskInBlick(userID: string, nameBlock: string, titleTodos: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('titleTodos', '==', titleTodos), where('nameBlock', '==', nameBlock));
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
    const q = query(dataRefTodos, where('userId', '==', userID), where('nameBlock', '==', nameBlock));
    // Get the documents that match the query
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot=", querySnapshot)
    // Iterate through the documents and delete each one
    querySnapshot.forEach(async (documentSnapshot) => {

        // Use the document reference to delete the document
        await deleteDoc(doc(mydatabase, 'collection-todos', documentSnapshot.id));
    });
}

// Изменение названия блока

export async function UpdateBlockName(userID: string, nameBlock: string, newNameBlock: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('nameBlock', '==', nameBlock));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(dataRefTodos, documentSnapshot.id);
        await updateDoc(docRef, { nameBlock: newNameBlock });
    });
}

// Изменение приоритета задачи

export async function UpdatePriority(userID: string, nameBlock: string, titleTodos: string, titlePriority: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('nameBlock', '==', nameBlock), where('titleTodos', '==', titleTodos));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(dataRefTodos, documentSnapshot.id);
        await updateDoc(docRef, { teg: titlePriority });
    });
}
