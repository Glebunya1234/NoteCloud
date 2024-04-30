"use client";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import "@components/Profile/TodosPage/style.todopage.css";
import { TodosData } from "@/types/Сollection-Todoes-interfaces/types";

import { motion, Variants } from "framer-motion";

import { HiPencil } from "react-icons/hi";
import { BsArrowsMove } from "react-icons/bs";
import {
  AddBlockModal,
  AddNewTaskComnponent,
  DeleteTaskButton,
  EditBlockModal,
  EditTaskDialog,
  ModalRemoveBlock,
} from "@/components";
import {
  NavButSet,
  NavSpaceNames,
  RemoveOrEdit,
  UpdateArray,
} from "@/components/Context";
import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";
import AddSpaceDialog from "@/components/UI/Dialog/AddSpaceDialog/AddSpaceDialog";
import Draggable from "react-draggable";
import PriorityBadge from "@/components/UI/Badge/Priority-badge";
import { ArrayUpdater } from "@/utils/ArrayUpdater";
import {
  DataFormaterToDayjs,
  DataFormaterToString,
} from "@/utils/DataTime-Formater";
import { SetColorIndicator } from "@/utils/SetColorIndicator";
import { Timestamp } from "firebase/firestore";
import dayjs, { Dayjs } from "dayjs";

const TodosContent = () => {
  const [blocks, setBlocks] = useState<TodosData[][]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [BlockName, setNameBlock] = useState("");
  const [nametitle, setNametitle] = useState<string>("");
  const [deadLineEdit, setDeadLineEdit] = useState<Dayjs>(dayjs(""));
  const [priorityTitle, setPriorityTitle] = useState<string>("");
  const [positions, setPositions] = useState<{
    [key: number]: { x: number; y: number };
  }>({});

  const DataContext = useContext(NavButSet);
  const SpaceContext = useContext(NavSpaceNames);
  const theme = useContext(RemoveOrEdit);

  //#region Functions

  const handleClickOnArticle = (names: string) => {
    if (theme?.ModeEditOrRemove === "edit") {
      setNameBlock(names);
      openAModalWindowbyID("EditBlockModal");
    } else if (theme?.ModeEditOrRemove === "remove") {
      setNameBlock(names);
      openAModalWindowbyID("ModalRemoveBlock");
    } else if (theme?.ModeEditOrRemove === "move") {
      setNameBlock(names);
    } else {
      setNameBlock(names);
    }
  };

  const handleStop = (index: number, data: { x: number; y: number }) => {
    const newPosition = { x: data.x, y: data.y };
    setPositions((prevPositions) => ({
      ...prevPositions,
      [index]: newPosition,
    }));
    localStorage.setItem(
      "positions",
      JSON.stringify({ ...positions, [index]: newPosition })
    );
  };

  const handleClickChangeTask = (
    namesBlock: string,
    titleTodo: string,
    deadLine: Timestamp,
    teg: string
  ) => {
    const f = namesBlock;
    setNameBlock(f);
    setNameBlock(f);
    setNametitle(titleTodo),
      setDeadLineEdit(DataFormaterToDayjs(deadLine)),
      setPriorityTitle(teg),
      openAModalWindowbyID("EditTaskDialog");
  };

  const fetchData = async () => {
    try {
      setBlocks(await ArrayUpdater(theme?.id));
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

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,

      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  //#endregion

  //#region UseEffect

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const savedPositions = localStorage.getItem("positions");
    if (savedPositions) {
      setPositions(JSON.parse(savedPositions));
    }
  }, []);

  //#endregion

  return (
    <UpdateArray.Provider value={{ onTaskAdded: fetchData }}>
      <motion.main
        variants={container}
        initial="hidden"
        animate="visible"
        className={`container flex w-full pr-9 pb-9 h-min `}
      >
        {blocks
          .filter((block) => {
            return (
              SpaceContext?.activeSpace === "All" ||
              block[0].spaceName === SpaceContext?.activeSpace
            );
          })

          .map((block, index) => (
            <Draggable
              handle=".handle"
              grid={[5, 5]}
              key={index}
              defaultPosition={positions[index] || { x: 0, y: 0 }}
              onStop={(event, data) => handleStop(index, data)}
            >
              <div className="draggable-item">
                <motion.aside
                  className="item snap-center"
                  variants={item}
                  key={index}
                >
                  <section
                    className={`${
                      theme?.ModeEditOrRemove === "remove"
                        ? "card CardRemove"
                        : theme?.ModeEditOrRemove === "edit"
                        ? "card CardEdit"
                        : theme?.ModeEditOrRemove === "move"
                        ? "card CardMove handle cursor-move"
                        : ""
                    }`}
                    onClick={() =>
                      theme?.ModeEditOrRemove === "none"
                        ? ""
                        : handleClickOnArticle(block[0].nameBlock)
                    }
                  >
                    <div
                      className={`min-w-[250px] w-[250px] m-5 h-auto flex flex-col justify-between ${DataContext?.importTheme.CardColor} shadow-xl rounded-3xl overflow-hidden`}
                    >
                      {/* Name of block */}
                      <section
                        className={`z-[2] flex flex-col items-center ${DataContext?.importTheme.CardColor}`}
                      >
                        <div className="w-full px-4 pt-4 pb-2">
                          <h2 className="text-black overflow-hidden text-ellipsis text-lg font-bold">
                            {block[0].nameBlock}
                          </h2>
                        </div>
                      </section>

                      <motion.ul
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className={`container ${
                          theme?.ModeEditOrRemove !== "none"
                            ? "pointer-events-none"
                            : ""
                        } z-[2] ${DataContext?.importTheme.CardColor}`}
                      >
                        {block.map((todo, todoIndex) => (
                          <motion.li
                            className="item flex flex-row-reverse"
                            variants={item}
                            key={todoIndex}
                          >
                            {todo.created ? (
                              <div
                                className={`w-1 flex flex-col h-auto mt-3 mb-1 rounded-l-full bg-${SetColorIndicator(
                                  todo.deadLine,
                                  new Date()
                                )} `}
                              />
                            ) : (
                              <></>
                            )}
                            <motion.div
                              whileHover={animationVariants.hover}
                              transition={animationTransition}
                              className="collapse py-1 collapse-arrow overflow-visible text-black"
                            >
                              <input type="checkbox" name="my-accordion-1" />
                              {/* collapse-title */}
                              <div className=" collapse-title border-t-[1px] border-[rgba(26,26,26,0.1)] text-xl w-full flex items-center justify-between font-medium overflow-hidden text-ellipsis ">
                                <p className="font-medium overflow-hidden text-ellipsis">
                                  {todo.titleTodos}
                                </p>
                                <PriorityBadge Priority={`${todo.teg}`} />
                              </div>

                              {/* collapse-content */}
                              <nav className="collapse-content ">
                                <div className="flex flex-col items-center">
                                  {/* Set priority */}

                                  <section className="flex justify-between mt-2 w-full">
                                    <aside className="flex items-center w-full">
                                      <span className="badge bg-transparent py-3 text-black">
                                        {todo.teg}
                                      </span>
                                    </aside>

                                    <aside className="flex items-center ">
                                      <button
                                        className="btn btn-circle btn-xs mx-2 "
                                        onClick={() => {
                                          handleClickChangeTask(
                                            block[0].nameBlock,
                                            todo.titleTodos,
                                            todo.deadLine,
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
                                    </aside>
                                  </section>

                                  {todo.created ? (
                                    <section className="flex flex-col mt-4 w-full border-opacity-50">
                                      <span className="badge badge-md w-[140px] badge-outline py-2 rounded-b-none rounded-t-xl border-b-0  flex flex-row ">
                                        Created
                                      </span>

                                      <aside className="badge badge-outline rounded-b-none rounded-tr-xl rounded-l-none py-3  w-full  flex flex-row ">
                                        {DataFormaterToString(todo.created)}
                                      </aside>

                                      <div className="divider divider-neutral my-0" />

                                      <aside className="badge badge-outline rounded-t-none rounded-bl-xl rounded-r-none py-3   w-full  flex flex-row ">
                                        {DataFormaterToString(todo.deadLine)}
                                      </aside>
                                      <span className="badge badge-md ml-auto w-[140px] badge-outline py-2 rounded-t-none rounded-b-xl border-t-0  flex flex-row ">
                                        Deadline
                                      </span>
                                    </section>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </nav>
                              {/* исправляет какой то баг с цветами  */}
                              <div className="w-full h-0 bg-green-indicator" />
                              <div className="w-full h-0 bg-orange-indicator" />
                              <div className="w-full h-0 bg-red-indicator" />
                            </motion.div>
                            <EditTaskDialog
                              blockName={BlockName}
                              oldtaskName={nametitle}
                              deadLineProp={deadLineEdit}
                              priorityTitle={priorityTitle}
                            />
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* Bottom of block */}
                      <section
                        className={`p-5 pt-3  flex z-[2] border-t-[1px] border-[rgba(26,26,26,0.1)] ${
                          DataContext?.importTheme.CardColor
                        } ${
                          theme?.ModeEditOrRemove !== "none"
                            ? "pointer-events-none"
                            : ""
                        }`}
                      >
                        <AddNewTaskComnponent
                          nameBlock={block[0].nameBlock}
                          spaceName={block[0].spaceName}
                        />
                      </section>
                    </div>
                  </section>
                </motion.aside>
              </div>
            </Draggable>
          ))}

        <AddBlockModal />
        <AddSpaceDialog />
        <EditBlockModal blockName={BlockName} />
        <ModalRemoveBlock blockName={BlockName} />
      </motion.main>
    </UpdateArray.Provider>
  );
};
export default TodosContent;
