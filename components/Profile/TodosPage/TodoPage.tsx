import { ChangeEvent, useContext, useEffect, useState } from "react";

import { TodosData } from "@/types/Сollection-Todoes-interfaces/types";
import {
  deleteTaskInBlick,
  readDocTodo,
} from "@services/Firebase-Methods/Task-Management-methods";
import { motion, Variants } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";
import {
  AddNewTaskComnponent,
  DeleteTaskButton,
  EditBlockModal,
  ModalAddBlock,
} from "@/components";
import ThemeContext from "@/components/Context";
import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";

const TodosContent: React.FC<{ id: string }> = ({ id }) => {
  const [blocks, setBlocks] = useState<TodosData[][]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleMouseDown = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = () => {
    setIsChecked(isChecked);
  };

  const animationVariants = {
    hover: {
      scale: 1.05,
    },
  };

  const animationTransition = {
    type: "spring",
    stiffness: 400,
    damping: 20,
  };

  const fetchData = async () => {
    try {
      const data = await readDocTodo(id);

      // Создаем объект для группировки по блокам
      const blocksMap: Record<string, TodosData[]> = {};

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
 
  const [name, setName] = useState<string>("");
  const theme = useContext(ThemeContext);
  const handleClickOnArticle = (names: string) => {
    if (theme?.ModeEditOrRemove === "edit") {
      setName(names)
      openAModalWindowbyID("EditBlockModal");
    }

    // console.log(blocks.map((block, index) => (block.map((todo, todoIndex) => (todo)))))
  };

  return (
    <main className={`flex w-full pr-9 pb-9 h-min `}>
      {blocks.map((block, index) => (
        <motion.article
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={animationTransition}
          key={index}
          className=""
        >
          <div
            className={`min-w-[250px] lg:w-[250px] sm:w-72 md:w-96  m-5 h-auto flex flex-col justify-between bg-bg-myyellow shadow-xl -z-20 rounded-3xl ${
              theme?.ModeEditOrRemove === "remove"
                ? "hover:shadow-bg-RedPink/70"
                : theme?.ModeEditOrRemove === "edit"
                ? "hover:shadow-bg-myOrange/50"
                : ""
            }`}
            onClick={() => handleClickOnArticle(block[0].nameBlock)}
          >
            
            {/* Name of block */}

            <section>
              <h2 className="text-black text-lg font-bold m-5 mb-2">
                {block[0].nameBlock}
              </h2>
            </section>

            <motion.ul
              className={`${
                theme?.ModeEditOrRemove !== "none" ? "pointer-events-none" : ""
              }`}
            >
              {block.map((todo, todoIndex) => (
                <li key={todoIndex}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={animationVariants.hover}
                    transition={animationTransition}
                    className="collapse my-1 collapse-arrow overflow-visible text-black"
                  >
                    <input
                      type="radio"
                      onMouseUp={handleMouseDown}
                      onChange={handleClick}
                      checked={isChecked}
                      name="my-accordion-1"
                    />
                    {/* collapse-title */}
                    <div className="collapse-title text-xl w-full font-medium overflow-hidden text-ellipsis ">
                      {todo.titleTodos}
                      <div className="flex justify-end w-full">
                        <span className="badge bg-transparent text-black hover:bg-zinc-800">
                          {todo.teg}
                        </span>
                      </div>
                    </div>

                    {/* collapse-content */}
                    <div className="collapse-content ">
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

                        <section className="flex items-center ">
                          <button className="btn btn-circle btn-xs mx-1 ">
                            <HiPencil />
                          </button>
                          <DeleteTaskButton
                            id={id}
                            nameBlock={block[0].nameBlock}
                            titleTodo={todo.titleTodos}
                            onTaskAdded={fetchData}
                            onCheckedFunc={() => {
                              setIsChecked(!isChecked);
                            }}
                          />
                        </section>
                      </nav>
                    </div>
                  </motion.div>
                </li>
              ))}
            </motion.ul>

            {/* Bottom of block */}
            <section className="m-5 mt-3 flex">
              <AddNewTaskComnponent
                id={id}
                nameBlock={block[0].nameBlock}
                onTaskAdded={fetchData}
              />
            </section>
          </div>
          <EditBlockModal id={id} blockName={name} />
          <ModalAddBlock id={id} onTaskAdded={fetchData} />
        </motion.article>
      ))}
    </main>
  );
};
export default TodosContent;
// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 },
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
// };
// const handleClickDelete = (Blockname: string, Todostitle: string) => {
//   deleteTaskInBlick(id, Blockname, Todostitle);
// };
