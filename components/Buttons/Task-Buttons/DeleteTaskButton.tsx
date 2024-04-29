import { useContext, useState } from "react";

import {
  AddNewTaskInBlock,
  deleteTaskInBlick,
} from "@services/Firebase-Methods/Task-Management-methods";

import { HiOutlineTrash } from "react-icons/hi";

import { showErrorToast, showSuccessToast } from "@/components";
import {
  ArraySpaceNamesContex,
  NavButSet,
  RemoveOrEdit,
  UpdateArray,
} from "@/components/Context";
import { SpaceFunc } from "@/utils/SpaceFunc";

const DeleteTaskButton: React.FC<{
  nameBlock: string;
  titleTodo: string;
  onCheckedFunc: () => void;
}> = ({ nameBlock, titleTodo, onCheckedFunc }) => {

  
  const updateContext = useContext(UpdateArray);
  const Refresh = useContext(RemoveOrEdit);
  const ContextArraSP = useContext(ArraySpaceNamesContex);
  const dataContext = useContext(NavButSet);



  const handleClickDelete = (Blockname: string, Todostitle: string) => {
    try {
      deleteTaskInBlick(Refresh?.id, Blockname, Todostitle).then(async () => {
        updateContext?.onTaskAdded();
        ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
        onCheckedFunc();
        showSuccessToast("The task has been deleted!");
      });
    } catch (error) {
      showErrorToast("The task was not deleted!");
    }
  };

  return (
    <button
      className="btn btn-circle btn-xs"
      onClick={() => handleClickDelete(nameBlock, titleTodo)}
    >
      <HiOutlineTrash />
    </button>
  );
};
export default DeleteTaskButton;
