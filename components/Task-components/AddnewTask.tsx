import { AddNewTaskInBlock } from "@/firebase/Methods/ReadDataForUser";
import { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

const AddNewTaskComnponent: React.FC<{ id: string , nameBlock: string, onTaskAdded: () => void  }> = ({ id, nameBlock, onTaskAdded }) => {
  const [taskname, setTaskname] = useState("");

  const handleClickAddButton = () => {
    console.log(taskname);
    setTaskname("");
    console.log(id);
    console.log(nameBlock);
    AddNewTaskInBlock(id, nameBlock, taskname).then(()=>{
        onTaskAdded();
    })
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