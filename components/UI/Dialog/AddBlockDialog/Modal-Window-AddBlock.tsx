import {
  showMessangeToast,
  showSuccessToast,
  showErrorToast,
} from "@/components";
import {
  ArraySpaceNamesContex,
  NavButSet,
  RemoveOrEdit,
  UpdateArray,
} from "@/components/Context";
import { AddNewTaskInBlock } from "@/services/Firebase-Methods/Task-Management-methods";
import { SpaceFunc } from "@/utils/SpaceFunc";
import { useContext, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";

const AddBlockModal = () => {
  const [blockname, setBlockname] = useState<string>("");
  const [taskname, setTaskname] = useState<string>("");
  const ContextArraSP = useContext(ArraySpaceNamesContex);
  const dataContext = useContext(NavButSet);
  const updateContext = useContext(UpdateArray);
  const theme = useContext(RemoveOrEdit);
  const AddNewBlockButton = () => {
    setBlockname("");
    setTaskname("");

    if (taskname.trim() !== "" && blockname.trim() !== "") {
      AddNewTaskInBlock(theme?.id, blockname, taskname).then(() => {
        updateContext?.onTaskAdded();
        showSuccessToast("The block has been created!");
      });
    } else {
      showErrorToast("The block was not created!");
    }
  };

  useEffect(() => {
    const Func = async () => {
      try {
        ContextArraSP?.setArraySpaceNames(await SpaceFunc());
      } catch (error) {
        console.error(error);
      }
    };

    Func();
  }, []);

  return (
    <dialog id="ModalAddBlock1" className="modal">
      <div
        className={`modal-box backdrop-blur-3xl ${dataContext.importTheme.textColor} ${dataContext.importTheme.backgroundColor}`}
      >
        <h3 className="font-bold text-lg mb-2 ">Add a new block for tasks</h3>

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

        <ul className="snap-x snap-mandatory w-full mb-2 py-2 pb-2 flex flex-row  items-center overflow-scroll overflow-y-hidden ">
          {ContextArraSP?.ArraySpaceCont.map((SpaceNames, index) => (
            <li id={`${index}`} className="max-w-[220px] mr-2 snap-start">
              {SpaceNames.filter(
                (name, idx, self) =>
                  self.findIndex((n) => n.spaceName === name.spaceName) === idx
              ).map((name, inx) => (
                <button
                  className="btn btn-ghost py-2 px-4 flex justify-center items-center w-full h-full border-[#3a393c] rounded-[8px]"
                  onClick={() => {
                    console.log("Name-", name.spaceName);
                  }}
                >
                  <p className="truncate overflow-hidden text-ellipsis">
                    {name.spaceName}
                  </p>
                </button>
              ))}
            </li>
          ))}
        </ul>

        <form method="dialog">
          <button
            className="btn btn-square bg-transparent border-[#3a393c] w-full text-center hover:bg-bg-mydurkgrey"
            onClick={AddNewBlockButton}
          >
            Add new block
            <FiCheck style={{ fontSize: "20px" }} />
          </button>
        </form>

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
