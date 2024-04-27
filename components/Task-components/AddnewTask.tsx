import { useContext, useState } from "react";

import { AddNewTaskInBlock } from "@services/Firebase-Methods/Task-Management-methods";

import { HiOutlinePlusSm } from "react-icons/hi";

import { showErrorToast, showSuccessToast } from "@/components";
import { RemoveOrEdit, UpdateArray } from "../Context";

const AddNewTaskComnponent: React.FC<{
  nameBlock: string;
  spaceName: string;
}> = ({ nameBlock, spaceName }) => {
  const [taskname, setTaskname] = useState("");

  const updateContext = useContext(UpdateArray);
  const theme = useContext(RemoveOrEdit);
  const handleClickAddButton = () => {
    setTaskname("");
    if (taskname.trim() !== "" && nameBlock.trim() !== "") {
      AddNewTaskInBlock(theme?.id, nameBlock, taskname,spaceName).then(() => {
        updateContext?.onTaskAdded();
        showSuccessToast("The task has been created!");
      });
    } else {
      showErrorToast("The task was not created!");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name task"
        className="input input-bordered input-xs w-full bg-bg-mygrey max-w-4xl  py-2 ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
        onChange={(e) => {
          setTaskname(e.target.value);
        }}
        value={taskname}
      />
      <button
        className="btn btn-circle btn-xs mx-1"
        onClick={handleClickAddButton}
      >
        <HiOutlinePlusSm style={{ fontSize: "18px" }} />
      </button>
    </>
  );
};
export default AddNewTaskComnponent;
