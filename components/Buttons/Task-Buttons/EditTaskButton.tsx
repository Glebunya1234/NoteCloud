import { useContext, useState } from "react";

import {
  AddNewTaskInBlock,
  deleteTaskInBlick,
} from "@services/Firebase-Methods/Task-Management-methods";

import { HiOutlineTrash, HiPencil } from "react-icons/hi";

import { showErrorToast, showSuccessToast } from "@/components";
import { UpdateArray } from "@/components/Context";
import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";

const EditTaskButton: React.FC<{
  id: string;
  nameBlock: string;
  titleTodo: string;
  onCheckedFunc: () => void;
}> = ({ id, nameBlock, titleTodo, onCheckedFunc }) => {
  const updateContext = useContext(UpdateArray);

  const handleClickEdit = (Blockname: string, Todostitle: string) => {
    // try {
    //   deleteTaskInBlick(id, Blockname, Todostitle).then(() => {
    //     updateContext?.onTaskAdded();
    //     onCheckedFunc();
    //     showSuccessToast("The task has been deleted!");
    //   });
    // } catch (error) {
    //   showErrorToast("The task was not deleted!");
    // }
  openAModalWindowbyID("EditTaskDialog")
  
  };

  return (
    <button
      className="btn btn-circle btn-xs mx-1 "
      onClick={() => handleClickEdit(nameBlock, titleTodo)}
    >
      <HiPencil />
    </button>
  );
};
export default EditTaskButton;
