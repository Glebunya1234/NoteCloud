import {
  PriorityDropdown,
  showErrorToast,
  showSuccessToast,
} from "@/components";
import {
  ChangeTeg,
  ChangeTegButton,
  NavButSet,
  RemoveOrEdit,
  UpdateArray,
} from "@/components/Context";
import { UpdateTask } from "@/services/Firebase-Methods/Task-Management-methods";

import { useContext, useEffect, useState } from "react";
import { CgArrowRight } from "react-icons/cg";

import { FiCheck } from "react-icons/fi";

const EditTaskDialog: React.FC<{
  oldtaskName: string;
  blockName: string;
  priorityTitle: string;
}> = ({ oldtaskName, blockName, priorityTitle }) => {
  const dataContext = useContext(NavButSet);
  const [newTaskname, setNewtaskName] = useState<string>("");
  const [blockNamess, setBlockNamess] = useState<string>("");
  const updateContext = useContext(UpdateArray);
  const [tegButName, setTegButName] =
    useState<ChangeTegButton["tegButName"]>("");
  const Refresh = useContext(RemoveOrEdit);
  const value = {
    tegButName,
    setTegButName,
  };

  useEffect(() => {
    setNewtaskName(oldtaskName);
    setTegButName(priorityTitle);
    setBlockNamess(blockName);
  }, [oldtaskName]);

  const handleClickSaveBut = () => {
    if (newTaskname.trim() !== "") {
      UpdateTask(
        Refresh?.id,
        blockName,
        oldtaskName,
        newTaskname,
        tegButName
      ).then(() => {
        updateContext?.onTaskAdded();
        showSuccessToast("The task has been updated!");
      });
    } else {
      showErrorToast("The task was not updated!");
    }
  };

  return (
    <dialog id="EditTaskDialog" className="modal">
      <div
        className={`modal-box backdrop-blur-3xl ${dataContext.importTheme.textColor}  ${dataContext.importTheme.backgroundColor}`}
      >
        <h3 className="font-bold text-lg mb-2 ">
          Editing the task "{oldtaskName}" in the "{blockNamess}" block
        </h3>

        <span className="label-text">Change task name</span>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="New Name"
            className="input input-ghost w-full bg-transparent max-w-4xl  ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey"
            onChange={(e) => {
              setNewtaskName(e.target.value);
            }}
            value={newTaskname}
          />
        </div>

        <span className="label-text">Change priority</span>

        <section>
          <div className="dropdown  dropdown-right mt-2">
            <ChangeTeg.Provider value={value}>
              <div className=" flex items-center">
                <div className="text-xs flex items-center bg-transparent border-none whitespace-nowrap overflow-hidden">
                  {tegButName} <CgArrowRight style={{ marginLeft: "5px" }} />
                </div>

                <PriorityDropdown
                  blockName={blockName}
                  titleTodos={oldtaskName}
                />
              </div>
            </ChangeTeg.Provider>
          </div>
        </section>

        <form method="dialog" className="w-full mt-5">
          <button
            className="btn w-full bg-transparent border-[#3a393c] hover:bg-bg-mydurkgrey"
            onClick={handleClickSaveBut}
          >
            Save change
            <FiCheck style={{ fontSize: "20px" }} />
          </button>
        </form>

        {/* Текст ниже */}
        <p className="mt-5 text-xs text-right">
          Press ESC key or click outside to close
        </p>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
export default EditTaskDialog;
