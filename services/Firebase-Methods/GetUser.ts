import type{ User_collect_datatype } from "@/types/Сollection-User-interfaces/types";
import { MyUser, userService } from "@services/User-Service/UserServ";

export const getUser = async (id: string): Promise<MyUser> => {
    
    const uuuu = await userService.getById(id);
    console.log("getById = ",uuuu)
    if (!uuuu) {
        // Обработка случая, когда userService.getById возвращает null
        throw new Error('User not found\nuserService.getById==null');
      }
    return uuuu
}

export const getOrCreateUser = async (id: string, userData:User_collect_datatype): Promise<MyUser> => {
    
    const uuuu = await userService.getOrCreateUser(id, userData);
    console.log("getOrCreateUser = ",uuuu)
    if (!uuuu) {
        // Обработка случая, когда userService.getOrCreateUser возвращает null
        throw new Error('User not found or creation failed\nuserService.getOrCreateUser==null');
      }
    return uuuu
}
