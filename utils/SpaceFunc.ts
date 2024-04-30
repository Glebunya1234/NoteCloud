
import { readSpaceName } from "@/services/Firebase-Methods/Task-Management-methods";
import { SpaceNamesbyUser } from "@/types/Сollection-Todoes-interfaces/types";

export const SpaceFunc = async (userID: string): Promise<SpaceNamesbyUser[][]> => {
    try {
        const dataSpaceName = await readSpaceName(userID);

        const SpaceArrayMap: Record<string, SpaceNamesbyUser[]> = {};
        dataSpaceName.forEach((names, index) => {
            if (!SpaceArrayMap[names.spaceName]) {
                SpaceArrayMap[names.spaceName] = [];
            }

            SpaceArrayMap[names.spaceName].push({ spaceName: names.spaceName });
        });
        const spaceArray = Object.values(SpaceArrayMap);




        return spaceArray
    } catch (error) {
        console.error(error);
        return []
    }

};