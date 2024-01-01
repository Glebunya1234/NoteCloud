//list doc
import { collection, doc, getDocs, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { mydatabase } from "@services/Firebase-Config/firebaseConfig";
import type { TodosData } from "@/types/Сollection-Todoes-interfaces/types";


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


// вывод аватара по юзера айди 
const usersCollection = collection(mydatabase, 'collection-users');

interface UserData {
    photoURL?: string;
    // Другие поля, если есть
}
interface UserNameData {
    displayName?: string;
    // Другие поля, если есть
}

export const ReadImageData = async (userID: string): Promise<string | undefined> => {
    const q = query(usersCollection, where('userID', '==', userID));

    try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const documentSnapshot = querySnapshot.docs[0];
            const userData = documentSnapshot.data() as UserData;
            return userData.photoURL;
        } else {
            return undefined;
        }
    } catch (error) {
        console.error('Ошибка при чтении данных из коллекции', error);
        throw error;
    }
};

export const ReadNameData = async (userID: string): Promise<string | undefined> => {
    const q = query(usersCollection, where('userID', '==', userID));

    try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const documentSnapshot = querySnapshot.docs[0];
            const userData = documentSnapshot.data() as UserNameData;
            return userData.displayName;
        } else {
            return undefined;
        }
    } catch (error) {
        console.error('Ошибка при чтении данных из коллекции', error);
        throw error;
    }
};


// смена аватара по юзера айди 
export const addImageData = async (data: string, userID: string): Promise<void> => {

    const q = query(usersCollection, where('userID', '==', userID));
    try {
        // Изменение данных в коллекции
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (documentSnapshot) => {
            const docRef = doc(usersCollection, documentSnapshot.id);
            await updateDoc(docRef, { photoURL: data });
        });
        console.log('Данные успешно добавлены в коллекцию');
    } catch (error) {
        console.error('Ошибка при добавлении данных в коллекцию', error);
        throw error;
    }
};

// смена ника по юзера айди 
export const ChangeNameUser = async (newNickName: string, userID: string): Promise<string | undefined> => {

    const q = query(usersCollection, where('userID', '==', userID));
    try {
        // Изменение данных в коллекции
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (documentSnapshot) => {
            const docRef = doc(usersCollection, documentSnapshot.id);
            await updateDoc(docRef, { displayName: newNickName });
        });

        // чтение данных в коллекции
        const querySnapshotAfterChange = await getDocs(q);
        if (!querySnapshotAfterChange.empty) {
            const documentSnapshot = querySnapshotAfterChange.docs[0];
            const userData = documentSnapshot.data() as UserNameData;

            console.log('Данные успешно добавлены в коллекцию');
            return userData.displayName;
        } else {
            return undefined;
        }


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