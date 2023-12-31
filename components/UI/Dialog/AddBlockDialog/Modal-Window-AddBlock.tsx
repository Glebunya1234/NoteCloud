import {
  showMessangeToast,
  showSuccessToast,
  showErrorToast,
} from "@/components";
import { RemoveOrEdit, UpdateArray } from "@/components/Context";
import { AddNewTaskInBlock } from "@/services/Firebase-Methods/Task-Management-methods";
import { useContext, useState } from "react";
import { FiCheck } from "react-icons/fi";

const AddBlockModal= () => {
  const [blockname, setBlockname] = useState<string>("");
  const [taskname, setTaskname] = useState<string>("");

  const updateContext = useContext(UpdateArray);
  const theme = useContext(RemoveOrEdit);
  const AddNewBlockButton = () => {
    console.log(blockname);
    setBlockname("");
    setTaskname("");

    console.log(theme?.id);
    console.log(blockname);
    
    if (taskname.trim() !== "" && blockname.trim() !== "") {
      AddNewTaskInBlock(theme?.id, blockname, taskname).then(() => {
        updateContext?.onTaskAdded();
        showSuccessToast("The block has been created!");
      });
    } else {
      showErrorToast("The block was not created!");
    }
  };

  return (
    <dialog id="ModalAddBlock1" className="modal">
      <div className="modal-box bg-bg-mygrey ">
        <h3 className="font-bold text-lg mb-2 ">Add a new block for tasks</h3>

        {/* Первая пара инпута и кнопки */}
        <div className="my-3">
          <span className="label-text">Enter block Name</span>

          <input
            type="text"
            placeholder="Block name"
            className="input input-ghost w-full bg-transparent max-w-4xl  ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
            onChange={(e) => {
              setBlockname(e.target.value);
            }}
            value={blockname}
          />
        </div>

        <div className="my-3">
          <span className="label-text">Enter the name of the first task</span>
          {/* Вторая пара инпута и кнопки */}

          <input
            type="text"
            placeholder="Task name"
            className="input input-ghost w-full bg-transparent max-w-4xl  ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
            onChange={(e) => {
              setTaskname(e.target.value);
            }}
            value={taskname}
          />
        </div>
        <form method="dialog">
          <button
            className="btn btn-square bg-transparent border-[#3a393c] w-full text-center hover:bg-bg-mydurkgrey"
            onClick={AddNewBlockButton}
          >
             Add new block
            <FiCheck style={{ fontSize: "20px" }} />
          </button>
        </form>

        {/* Текст ниже */}
        <p className="mt-4 text-xs text-right">
          Press ESC key or click outside to close
        </p>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
export default AddBlockModal;
{
  /* Первая пара инпута и кнопки */
}
