
import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, doc, getDoc, setDoc } from "firebase/firestore";
import { mydatabase } from "@services/Firebase-Config/firebaseConfig";
import { notFound, useRouter } from "next/navigation";
import { Iuser_collect_datatype } from "@/types/Сollection-User-interfaces/types";

export class MyUser {
    readonly userID: string;
    readonly displayName: string | null;
    readonly email: string | null;
    readonly photoURL: string;
    constructor(
        userID: string,
        displayName: string | null,
        email: string | null,
        photoURL: string,
    ) {
        this.userID = userID;
        this.displayName = displayName;

        this.email = email;
        this.photoURL = photoURL;
    }
}



const userConvertor = {
    toFirestore(user: MyUser): DocumentData {
        return {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): MyUser {
        const data = snapshot.data(options);
        return new MyUser(snapshot.id, data.displayName, data.email, data.photoURL);
    },
}



class UserService {
    async getById(userID: string): Promise<MyUser | null> {
        const docSnapsh = await getDoc(
            doc(mydatabase, "collection-users", userID).withConverter(userConvertor),
        );
        if (docSnapsh.exists()) {
            return docSnapsh.data()
        }
        else {

            return null
        }
    }
    // async createOrUpdateUser(user: User): Promise<void> {
    //     const userDocRef = doc(mydatabase, "collection-users", user.userID);

    //     try {
    //         await setDoc(userDocRef, user, { merge: true });
    //     } catch (error) {
    //         console.error("Error creating/updating user:", error);
    //         throw new Error(`Failed to create/update user ${user.userID}`);
    //     }
    // }

    async getOrCreateUser(userID: string, userData: Partial<Iuser_collect_datatype>): Promise<MyUser | null> {
        try {
            return await this.getById(userID);
        } catch (error) {
            const newdoc = doc(mydatabase, `collection-users/${userID}`);
            const docData: Iuser_collect_datatype = {
                userID: `${userID}`,
                displayName: `${userData.displayName}`,
                email: `${userData.email}`,
                photoURL: `${userData.photoURL}`,
                password: `${userData.password}`
            };
            setDoc(newdoc, docData);

            return await this.getById(userID);

        }
    }
}

export const userService = new UserService();

