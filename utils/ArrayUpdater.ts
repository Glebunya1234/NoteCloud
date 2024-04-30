
import { HoverContextType } from "@/components/Context";
import { readDocTodo } from "@/services/Firebase-Methods/Task-Management-methods";
import { TodosData } from "@/types/Сollection-Todoes-interfaces/types";



export const ArrayUpdater = async (theme: string): Promise<TodosData[][]> => {
    try {

        const data = await readDocTodo(theme);

        const blocksMap: Record<string, TodosData[]> = {};

        data.forEach((todo) => {
            if (!blocksMap[todo.nameBlock]) {
                blocksMap[todo.nameBlock] = [];
            }
            blocksMap[todo.nameBlock].push({
                spaceName: todo.spaceName,
                nameBlock: todo.nameBlock,
                deadLine: todo.deadLine,
                titleTodos: todo.titleTodos,
                teg: todo.teg,
                userId: todo.userId,
            });
        });

        const blocksArray = Object.values(blocksMap);

        return blocksArray
    } catch (error) {
        console.error(error);
        return []
    }

};