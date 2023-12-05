import { useEffect, useState } from "react";

import { IdataTodos } from "@/types/Сollection-Todoes-interfaces/types";
import { readDocTodo } from "@services/Firebase-Methods/ReadDataForUser";

import { CgClose} from "react-icons/cg";
import { HiPencil } from "react-icons/hi";

import {AddNewTaskComnponent} from "@exports/exports-components"

const TodosContent: React.FC<{ id: string }> = ({ id }) => {
  const [blocks, setBlocks] = useState<IdataTodos[][]>([]);

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


  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <main className="flex w-full flex-wrap scrollbar-container">
      {blocks.map((block, index) => (
        <article key={index}>
          <div className="w-72 min-w-blockContent72rem m-5 h-auto flex flex-col justify-between bg-bg-myyellow overflow-hidden rounded-3xl">
           
            {/* Name of block */}

            <section>
              <h2 className="text-black text-lg font-bold m-5 mb-2">
                {block[0].nameBlock}
              </h2>
            </section>
            {/* Output of Tasks in a block */}
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
                        {/* Set priority */}
                        <section className="flex ">
                          <div className="dropdown  dropdown-top">
                            <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-xs"
                            >
                              {todo.teg}
                            </div>

                            {/* Li priority */}

                            <ul className="dropdown-content menu z-50 shadow bg-base-100 rounded-box w-32">
                              <li className="mb-2">
                                <button className="flex badge badge-xs w-full">
                                  high priority
                                </button>
                              </li>
                              <li className="mb-2">
                                <button className="flex badge badge-xs w-full">
                                  medium priority
                                </button>
                              </li>
                              <li>
                                <button className="flex badge badge-xs w-full">
                                  low priority
                                </button>
                              </li>
                            </ul>
                          </div>
                        </section>

                        <section className="flex items-center">
                          <button className="btn btn-circle btn-xs mx-1">
                            <HiPencil />
                          </button>
                          <button className="btn btn-circle btn-xs mx-1">
                            <CgClose />
                          </button>
                        </section>
                      </nav>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Bottom of block */}
            <section className="m-5 mt-3 flex">
             <AddNewTaskComnponent id={id} nameBlock={block[0].nameBlock} onTaskAdded={fetchData}/>
            </section>
          </div>
        </article>
      ))}
    </main>
  );
};
export default TodosContent;
