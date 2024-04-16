import { collection, deleteDoc, deleteField, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { mydatabase } from "@services/Firebase-Config/firebaseConfig";
import type { TodosData } from "@/types/Сollection-Todoes-interfaces/types";

const dataRefTodos = collection(mydatabase, 'collection-todos');

// // поиск задач по айди юзера
// export function readDocTodo(userID: string): Promise<TodosData[]> {
//     // Create a query against the collection.
//     const q = query(dataRefTodos, where("userId", "==", userID));

//     return getDocs(q)
//         .then((querySnapshot) => {
//             const todos: TodosData[] = [];

//             // Преобразовать QueryDocumentSnapshot в обычные объекты данных
//             querySnapshot.forEach((doc) => {
//                 // doc.data() is never undefined for query doc snapshots
//                 const todoData = doc.data() as TodosData; // Приводим тип данных к интерфейсу Todo
//                 todos.push(todoData);
//             });

//             return todos;
//         });
// }


// поиск задач по айди юзера
export async function readDocTodo(userID: string): Promise<TodosData[]> {


    // Create a query against the collection.
    const q = query(dataRefTodos, where("userId", "==", userID));
    let i = 0;

    const querySnapshot = await getDocs(q);
    const todos: TodosData[] = [];
    // Преобразовать QueryDocumentSnapshot в обычные объекты данных
    querySnapshot.forEach((doc) => {
    
        // doc.data() is never undefined for query doc snapshots
        const todoData = doc.data() as TodosData; // Приводим тип данных к интерфейсу Todo
        todos.push(todoData);
    });
    // console.log("i = ", todos)

    return todos;

}



//Добавление ЗАДАЧИ если есть блок если нету блока создает новый 
export async function AddNewTaskInBlock(userID: string, nameBlock: string, titleTodos: string) {


    await setDoc(doc(dataRefTodos), {
        nameBlock: nameBlock, teg: "Medium priority",
        titleTodos: titleTodos, userId: userID
    });
}
//Удаление Задачи 
export async function deleteTaskInBlick(userID: string, nameBlock: string, titleTodos: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('titleTodos', '==', titleTodos), where('nameBlock', '==', nameBlock));
    // Get the documents that match the query
    const querySnapshot = await getDocs(q);

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


// // Изменение названия блока
// export function UpdateBlockName(userID: string, nameBlock: string, newNameBlock: string) {
//     const q = query(dataRefTodos, where('userId', '==', userID), where('nameBlock', '==', nameBlock));

//     // Get the documents that match the query
//     getDocs(q)
//         .then((querySnapshot) => {
//             // Map through the documents and create an array of update promises
//             const updatePromises = querySnapshot.docs.map((documentSnapshot) => {
//                 const docRef = doc(dataRefTodos, documentSnapshot.id);
//                 // Use the document reference to update the document
//                 return updateDoc(docRef, { nameBlock: newNameBlock });
//             });

//             // Wait for all update promises to resolve
//             return Promise.all(updatePromises);
//         })
//         .catch((error) => {
//             // Handle errors here
//             console.error('Error updating block names:', error);
//         });
// }

// Изменение приоритета задачи

export async function UpdateTask(userID: string, nameBlock: string, titleTodos: string, newtitleTodos: string, titlePriority: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('nameBlock', '==', nameBlock), where('titleTodos', '==', titleTodos));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(dataRefTodos, documentSnapshot.id);
        await updateDoc(docRef, { titleTodos: newtitleTodos, teg: titlePriority });
    });
}

// // Изменение приоритета задачи
// export function UpdateTask(userID: string, nameBlock: string, titleTodos: string, newtitleTodos: string, titlePriority: string) {
//     const q = query(dataRefTodos, where('userId', '==', userID), where('nameBlock', '==', nameBlock), where('titleTodos', '==', titleTodos));

//     // Get the documents that match the query
//     getDocs(q)
//         .then((querySnapshot) => {
//             // Map through the documents and create an array of update promises
//             const updatePromises = querySnapshot.docs.map((documentSnapshot) => {
//                 const docRef = doc(dataRefTodos, documentSnapshot.id);
//                 // Use the document reference to update the document
//                 return updateDoc(docRef, { titleTodos: newtitleTodos, teg: titlePriority });
//             });

//             // Wait for all update promises to resolve
//             return Promise.all(updatePromises);
//         })
//         .catch((error) => {
//             // Handle errors here
//             console.error('Error updating task:', error);
//         });
// }