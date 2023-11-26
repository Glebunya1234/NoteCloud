import { IdataTodos } from "@/firebase/Interfaсe/collection-user-datatype";
import { readDocTodo } from "@/firebase/Methods/ReadDataForUser";
import { useEffect, useState } from "react";
import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiBook } from "react-icons/fi";

const TodosContent: React.FC<{ id: string }> = ({ id }) => {
  const [blocks, setBlocks] = useState<IdataTodos[][]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readDocTodo(id);

        // Создаем объект для группировки по блокам
        const blocksMap: Record<string, IdataTodos[]> = {};

        data.forEach((todo) => {
          if (!blocksMap[todo.nameBlock]) {
            blocksMap[todo.nameBlock] = [];
          }
          blocksMap[todo.nameBlock].push({
            nameBlock: todo.nameBlock,
            titleTodos: todo.titleTodos,
            teg: todo.teg,
            userId: todo.userId,
          });
        });

        // Преобразуем объект в массив
        const blocksArray = Object.values(blocksMap);

        setBlocks(blocksArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="flex flex-wrap">
      {blocks.map((block, index) => (
        <article>
          <div
            key={index}
            className="w-72 m-5 h-auto flex flex-col justify-between bg-bg-myyellow overflow-hidden rounded-3xl"
          >
            <section>
              <h2 className="text-black text-lg font-bold m-5 mb-2">
                {block[0].nameBlock}
              </h2>
            </section>
            <ul>
              {block.map((todo, todoIndex) => (
                <li
                  key={todoIndex}
                  className="my-2 p-5 bg-opacity-10 bg-bg-mygrey text-black w-full flex flex-col hover:bg-opacity-70"
                >
                  {todo.titleTodos}
                  <div className="flex justify-end">
                    <span className="badge bg-transparent hover:bg-zinc-800">
                      {todo.teg}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <section className="m-5 mt-3">Дополнительный контент</section>
          </div>
        </article>
      ))}
    </main>
  );
};
export default TodosContent;
