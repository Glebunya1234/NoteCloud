//list doc
import {collection, doc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import {mydatabase } from "@services/Firebase-Config/firebaseConfig";
import type {TodosData} from "@/types/Сollection-Todoes-interfaces/types";


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



// смена аватара по юзера айди 
export const addImageData = async (data:string, userID: string): Promise<void> => {
    const newdoc = collection(mydatabase, `collection-users`);
    const q = query(newdoc, where('userID', '==', userID));
    try {
      // Изменение данных в коллекции
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(newdoc, documentSnapshot.id);
        await updateDoc(docRef, { photoURL:data});
    });
      console.log('Данные успешно добавлены в коллекцию');
    } catch (error) {
      console.error('Ошибка при добавлении данных в коллекцию', error);
      throw error;
    }
  };

 
// // поиск задач по айди юзера
// export async function readDocTodo(userID: string): Promise<IdataTodos[]> {
//     const dataref = collection(mydatabase, "collection-todos");

//     // Create a query against the collection.
//     const q = query(dataref, where("userId", "==", userID));


//     const querySnapshot = await getDocs(q);
//     const todos: IdataTodos[] = [];
//     // Преобразовать QueryDocumentSnapshot в обычные объекты данных
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         const todoData = doc.data() as IdataTodos; // Приводим тип данных к интерфейсу Todo
//         todos.push(todoData);
//     });

//     return todos;

// }

// export async function AddNewTaskInBlock(userID: string, nameBlock: string, titleTodos: string) {
//     const dataref = collection(mydatabase, "collection-todos");

//     await setDoc(doc(dataref), {
//         nameBlock: nameBlock , teg: "low priority",
//         titleTodos: titleTodos, userId:userID
//     });
// }