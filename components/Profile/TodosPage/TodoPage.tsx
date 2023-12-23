import { ChangeEvent, useContext, useEffect, useState } from "react";

import { TodosData } from "@/types/Сollection-Todoes-interfaces/types";
import { readDocTodo } from "@services/Firebase-Methods/Task-Management-methods";
import { motion, Variants } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";
import {
  AddBlockModal,
  AddNewTaskComnponent,
  DeleteTaskButton,
  EditBlockModal,
  EditTaskButton,
  EditTaskDialog,
  ModalRemoveBlock,
  PriorityDropdown,
} from "@/components";
import { ThemeContext, UpdateArray } from "@/components/Context";
import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";
import { todo } from "node:test";

const TodosContent: React.FC<{ id: string }> = ({ id }) => {
  const [blocks, setBlocks] = useState<TodosData[][]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [nameBlock, setNameBlock] = useState<string>("");
  const [nametitle, setNametitle] = useState<string>("");
  const [priorityTitle, setPriorityTitle] = useState<string>("");
  const theme = useContext(ThemeContext);

  const handleClickOnArticle = (names: string) => {
    if (theme?.ModeEditOrRemove === "edit") {
      setNameBlock(names);
      openAModalWindowbyID("EditBlockModal");
    } else if (theme?.ModeEditOrRemove === "remove") {
      setNameBlock(names);
      openAModalWindowbyID("ModalRemoveBlock");
    } else {
      setNameBlock(names);
    }
  };
  const handleClickChangeTask = (namesBlock: string, titleTodo:string, teg:string) => {
    setNameBlock(namesBlock);
    setNametitle(titleTodo),
      setPriorityTitle(teg),
      openAModalWindowbyID("EditTaskDialog");
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

  return (
    <UpdateArray.Provider value={{ onTaskAdded: fetchData }}>
      <main className={`flex w-full pr-9 pb-9 h-min `}>
        {blocks.map((block, index) => (
          <motion.article
             initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={animationTransition}
            key={index}
          >
            <div
              className={`min-w-[250px] w-[250px] m-5 h-auto flex flex-col justify-between bg-bg-myyellow shadow-xl -z-20 rounded-3xl ${
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
                  theme?.ModeEditOrRemove !== "none"
                    ? "pointer-events-none"
                    : ""
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
                      <input type="checkbox" name="my-accordion-1" />
                      {/* collapse-title */}
                      <div className="collapse-title text-xl w-full font-medium overflow-hidden text-ellipsis ">
                        {todo.titleTodos}
                      </div>

                      {/* collapse-content */}
                      <div className="collapse-content ">
                        <nav className="flex justify-between  px-1">
                          {/* Set priority */}
                          <section className="flex ">
                            <div className="flex items-center w-full">
                              <span className="badge bg-transparent py-3 text-black">
                                {todo.teg}
                              </span>
                            </div>
                          </section>

                          <section className="flex items-center ">
                            <button
                              className="btn btn-circle btn-xs mx-1 "
                              onClick={() => {handleClickChangeTask(block[0].nameBlock, todo.titleTodos, todo.teg)}}
                            >
                              <HiPencil />
                            </button>
                            <DeleteTaskButton
                              id={id}
                              nameBlock={block[0].nameBlock}
                              titleTodo={todo.titleTodos}
                              onCheckedFunc={() => {
                                setIsChecked(!isChecked);
                              }}
                            />
                          </section>
                        </nav>
                      </div>
                    </motion.div>

                    <EditTaskDialog
                      id={id}
                      blockName={nameBlock}
                      oldtaskName={nametitle}
                      priorityTitle={priorityTitle}
                    />
                  </li>
                ))}
              </motion.ul>

              {/* Bottom of block */}
              <section
                className={`m-5 mt-3 flex ${
                  theme?.ModeEditOrRemove !== "none"
                    ? "pointer-events-none"
                    : ""
                }`}
              >
                <AddNewTaskComnponent id={id} nameBlock={block[0].nameBlock} />
              </section>
            </div>
          </motion.article>
        ))}
        <AddBlockModal id={id} />
        <EditBlockModal id={id} blockName={nameBlock} />
        <ModalRemoveBlock id={id} blockName={nameBlock} />
      </main>
    </UpdateArray.Provider>
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
