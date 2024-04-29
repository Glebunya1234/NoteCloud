import { collection, deleteDoc, deleteField, doc, getDocs, limit, orderBy, query, setDoc, updateDoc, where } from "firebase/firestore";
import { mydatabase } from "@services/Firebase-Config/firebaseConfig";
import type { SpaceNamesbyUser, TodosData } from "@/types/Сollection-Todoes-interfaces/types";

const dataRefTodos = collection(mydatabase, 'collection-todos');


// поиск задач по айди юзера
export async function readDocTodo(userID: string): Promise<TodosData[]> {


    // Create a query against the collection.
    const q = query(dataRefTodos, where("userId", "==", userID), orderBy("priority"));


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

// поиск всех существующих пространств по айди юзера
export async function readSpaceName(userID: string): Promise<SpaceNamesbyUser[]> {


    // Create a query against the collection.
    const q = query(dataRefTodos, where("userId", "==", "yeKv7dHxJVYQ07vXSx5c5CfWyLI2"), orderBy("spaceName"),);


    const querySnapshot = await getDocs(q);
    const spaces: SpaceNamesbyUser[] = [];
    // Преобразовать QueryDocumentSnapshot в обычные объекты данных
    querySnapshot.forEach((doc) => {

        // doc.data() is never undefined for query doc snapshots
        const SpaceData = doc.data() as SpaceNamesbyUser; // Приводим тип данных к интерфейсу Todo
        spaces.push(SpaceData);
    });


    return spaces;

}

//Добавление ЗАДАЧИ если есть блок если нету блока создает новый 
export async function AddNewTaskInBlock(userID: string, nameBlock: string, titleTodos: string, spaceName: string) {


    await setDoc(doc(dataRefTodos), {
        nameBlock: nameBlock, teg: "Medium priority", priority: "3",
        titleTodos: titleTodos, userId: userID,
        spaceName: spaceName

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

// Изменение названия блока и или пространство к нему

export async function UpdateBlockName(userID: string, nameBlock: string, newNameBlock: string, spaceName: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('nameBlock', '==', nameBlock));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(dataRefTodos, documentSnapshot.id);
        await updateDoc(docRef, { nameBlock: newNameBlock , spaceName: spaceName });
    });
}
// Изменение названия Пространства
export async function СhangeNewNameSpace(userID: string, spaceName: string, newSpaceNane: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('spaceName', '==', spaceName));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(dataRefTodos, documentSnapshot.id);
        await updateDoc(docRef, { spaceName: newSpaceNane });
    });
}

// Удаление Пространства
export async function RemoveSpace(userID: string, spaceName: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('spaceName', '==', spaceName));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(dataRefTodos, documentSnapshot.id);
        await updateDoc(docRef, { spaceName: "All" });
    });
}





// Изменение приоритета задачи
const priorityMap: Record<string, number> = {
    "Highest priority": 1,
    "High priority": 2,
    "Medium priority": 3,
    "Low priority": 4,
    "Lowest priority": 5
};
export async function UpdateTask(userID: string, nameBlock: string, titleTodos: string, newtitleTodos: string, titlePriority: string) {
    const q = query(dataRefTodos, where('userId', '==', userID), where('nameBlock', '==', nameBlock), where('titleTodos', '==', titleTodos));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(dataRefTodos, documentSnapshot.id);
        const prior = priorityMap[titlePriority] || 3;

        await updateDoc(docRef, { titleTodos: newtitleTodos, teg: titlePriority, priority: prior });
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