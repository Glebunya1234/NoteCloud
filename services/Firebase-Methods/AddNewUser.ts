import { doc, setDoc } from "firebase/firestore";
import { mydatabase } from "@services/Firebase-Config/firebaseConfig";
import { User_collect_datatype } from "@/types/Сollection-User-interfaces/types"


export default async function AddNewUser({
    userID,
    displayName = "",
    email,
    password,
    photoURL,
}: User_collect_datatype): Promise<void> {
    try {
        // Создаем новый документ
        const newDoc = doc(mydatabase, `collection-users/${userID}`);

        // Формируем данные для документа
        const docData: User_collect_datatype = {
            userID: `${userID}`,
            displayName: `${displayName}`,
            email: `${email}`,
            photoURL: `${photoURL}`,
            password: `${password}`
        };

        // Устанавливаем данные в документ
        await setDoc(newDoc, docData);
    } catch (error) {
        // Обработка ошибок, например, можно вывести сообщение в консоль
        console.error('Ошибка при добавлении пользователя:', error);
        throw error; // Можно выбросить ошибку дальше для обработки в вызывающем коде
    }
}
// export default function AddNewUser({
//     userID,
//     displayName = "",
//     email,
//     password,
//     photoURL,
// }: User_collect_datatype) {

//     //add doc
//     const newdoc = doc(mydatabase, `collection-users/${userID}`);
//     const docData: User_collect_datatype = {
//         userID: `${userID}`,
//         displayName: `${displayName}`,
//         email: `${email}`,
//         photoURL: `${photoURL}`,
//         password: `${password}`
//     };
//     setDoc(newdoc, docData);
// }