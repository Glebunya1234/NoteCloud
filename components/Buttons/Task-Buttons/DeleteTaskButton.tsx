import { useState } from "react";

import {
  AddNewTaskInBlock,
  deleteTaskInBlick,
} from "@services/Firebase-Methods/Task-Management-methods";

import { HiOutlineTrash } from "react-icons/hi";

import {
  showErrorToast,
  showSuccessToast,
} from "@/components";

const DeleteTaskButton: React.FC<{
  id: string;
  nameBlock: string;
  titleTodo: string;
  onTaskAdded: () => void;
  onCheckedFunc:()=> void;
}> = ({ id, nameBlock, titleTodo, onTaskAdded, onCheckedFunc }) => {
  const handleClickDelete = (Blockname: string, Todostitle: string) => {
    try {
      deleteTaskInBlick(id, Blockname, Todostitle).then(() => {
        onTaskAdded();
        onCheckedFunc();
        showSuccessToast("The task has been deleted!");
      });
    } catch (error) {
      showErrorToast("The task was not deleted!");
    }
  };

  return (
    <button
      className="btn btn-circle btn-xs mx-1"
      onClick={() => handleClickDelete(nameBlock, titleTodo)}
    >
      <HiOutlineTrash />
    </button>
  );
};
export default DeleteTaskButton;
