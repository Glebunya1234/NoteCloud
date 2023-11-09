
import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, doc, getDoc } from "firebase/firestore";
import { mydatabase } from "../Config/firebaseConfig";

export class User {
    readonly userID: string;
    readonly displayName: string | null;
    readonly email: string | null;
    readonly photoURL: string | null;
    constructor(
        userID: string,
        displayName: string | null,
        email: string | null,
        photoURL: string | null,
    ) {
        this.userID = userID;
        this.displayName = displayName;
  
        this.email = email;
        this.photoURL = photoURL;
    }
}



const userConvertor = {
    toFirestore(user: User): DocumentData {
        return {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): User {
        const data = snapshot.data(options);
        return new User(snapshot.id, data.displayName, data.email, data.photoURL);
    },
}



class UserService {
    async getById(userID: string): Promise<User> {
        const docSnapsh = await getDoc(
            doc(mydatabase, "collection-users", userID).withConverter(userConvertor),
        );
        if (docSnapsh.exists()) {
            return docSnapsh.data()
        }
        throw new Error(`Not Found user ${userID}`)
    }
}

export const userService = new UserService();

