import { ChangeEvent, useContext, useEffect, useState } from "react";
import "@components/Profile/TodosPage/style.todopage.css";
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
  EditTaskDialog,
  ModalRemoveBlock,
} from "@/components";
import { RemoveOrEdit, UpdateArray } from "@/components/Context";
import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";

const TodosContent = () => {
  const [blocks, setBlocks] = useState<TodosData[][]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [BlockName, setNameBlock] = useState("");
  const [nametitle, setNametitle] = useState<string>("");
  const [priorityTitle, setPriorityTitle] = useState<string>("");
  const theme = useContext(RemoveOrEdit);

  //#region Functions
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

  const handleClickChangeTask = (
    namesBlock: string,
    titleTodo: string,
    teg: string
  ) => {
    const f = namesBlock;
    setNameBlock(f);
    setNameBlock(f);
    setNametitle(titleTodo),
      setPriorityTitle(teg),
      openAModalWindowbyID("EditTaskDialog");
  };

  const fetchData = async () => {
    try {
      const data = await readDocTodo(theme?.id);

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

  //#endregion

  //#region Object
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
  //#endregion

  useEffect(() => {
    fetchData();
  }, [theme?.id]);

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
            <section
              className={`${
                theme?.ModeEditOrRemove === "remove"
                  ? "card CardRemove"
                  : theme?.ModeEditOrRemove === "edit"
                  ? "card CardEdit"
                  : ""
              }`}
              onClick={() =>
                theme?.ModeEditOrRemove === "none"
                  ? ""
                  : handleClickOnArticle(block[0].nameBlock)
              }
            >
              <div
                className={`min-w-[250px] w-[250px] m-5 h-auto flex flex-col justify-between bg-bg-myyellow shadow-xl rounded-3xl overflow-hidden`}
              >
                {/* Name of block */}

                <section className="z-[2] bg-bg-myyellow">
                  <h2 className="text-black text-lg font-bold m-5 mb-2">
                    {block[0].nameBlock}
                  </h2>
                </section>

                <motion.ul
                  className={`${
                    theme?.ModeEditOrRemove !== "none"
                      ? "pointer-events-none"
                      : ""
                  } z-[2] bg-bg-myyellow`}
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
                                onClick={() => {
                                  handleClickChangeTask(
                                    block[0].nameBlock,
                                    todo.titleTodos,
                                    todo.teg
                                  );
                                }}
                              >
                                <HiPencil />
                              </button>
                              <DeleteTaskButton
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
                        blockName={BlockName}
                        oldtaskName={nametitle}
                        priorityTitle={priorityTitle}
                      />
                    </li>
                  ))}
                </motion.ul>

                {/* Bottom of block */}
                <section
                  className={`p-5 pt-3 flex z-[2] bg-bg-myyellow ${
                    theme?.ModeEditOrRemove !== "none"
                      ? "pointer-events-none"
                      : ""
                  }`}
                >
                  <AddNewTaskComnponent nameBlock={block[0].nameBlock} />
                </section>
              </div>
            </section>
          </motion.article>
        ))}
        <AddBlockModal />
        <EditBlockModal blockName={BlockName} />
        <ModalRemoveBlock blockName={BlockName} />
      </main>
    </UpdateArray.Provider>
  );
};
export default TodosContent;
