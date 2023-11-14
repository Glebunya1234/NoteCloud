import { Iuser_collect_datatype } from "../Interfaсe/collection-user-datatype";
import { MyUser, userService } from "./UserServ";

export const getUser = async (id: string): Promise<MyUser> => {
    
    const uuuu = await userService.getById(id);
    console.log("getById = ",uuuu)
    return uuuu
}

export const getOrCreateUser = async (id: string, userData:Iuser_collect_datatype): Promise<MyUser> => {
    
    const uuuu = await userService.getOrCreateUser(id, userData);
    console.log("getOrCreateUser = ",uuuu)
    return uuuu
}
