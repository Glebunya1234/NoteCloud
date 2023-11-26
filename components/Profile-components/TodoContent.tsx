import { IdataTodos } from "@/firebase/Interfaсe/collection-user-datatype";
import { readDocTodo } from "@/firebase/Methods/ReadDataForUser";
import { useEffect, useState } from "react";
import { CgHomeAlt, CgLaptop } from "react-icons/cg";
import { FiBook } from "react-icons/fi";
import { HiPencil } from "react-icons/hi";
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
    <main className="flex flex-wrap overflow-auto">
      {blocks.map((block, index) => (
        <article key={index}>
          <div
            className="w-72 min-w-blockContent72rem m-5 h-auto flex flex-col justify-between bg-bg-myyellow overflow-hidden rounded-3xl"
          >
            <section>
              <h2 className="text-black text-lg font-bold m-5 mb-2">
                {block[0].nameBlock}
              </h2>
            </section>
            <ul>
              {block.map((todo, todoIndex) => (
                <li key={todoIndex}>
                  <div className="collapse my-1 collapse-arrow overflow-visible text-black">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl w-full font-medium overflow-hidden text-ellipsis">
                      {todo.titleTodos}
                      <div className="flex justify-end w-full">
                        <span className="badge bg-transparent text-black hover:bg-zinc-800">
                          {todo.teg}
                        </span>
                      </div>
                    </div>
                    <div className="collapse-content">
                      <nav className="flex justify-between  px-1">
                     
                      <section className="flex ">
                          <div className="dropdown  dropdown-top">
                            <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-xs"
                            >
                              {todo.teg}
                            </div>
                            <ul className="dropdown-content menu z-50 shadow bg-base-100 rounded-box w-32">
                              <li className="mb-2" >
                                <div className="flex badge badge-xs w-full">
                                  high priority
                                </div>
                              </li>
                              <li className="mb-2" >
                                <div className="flex badge badge-xs w-full">
                                  medium priority
                                </div>
                              </li>
                              <li>
                                <div className="flex badge badge-xs w-full" >
                                  low priority
                                </div>
                              </li>
                            </ul>
                          </div>
                      </section>

                        <section className="flex items-center">
                          <button className="btn btn-circle btn-xs mx-1">
                            <HiPencil />
                          </button>
                          <button className="btn btn-circle btn-xs mx-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </section>
                      </nav>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <section className="m-5 mt-3"></section>
          </div>
        </article>
      ))}
    </main>
  );
};
export default TodosContent;

{
  /* </div>className="my-2 p-5 bg-opacity-10 bg-bg-mygrey text-black w-full flex flex-col hover:bg-opacity-70" */
}
