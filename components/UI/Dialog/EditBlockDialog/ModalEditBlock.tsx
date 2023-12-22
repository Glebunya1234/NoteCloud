import { showErrorToast, showSuccessToast } from "@/components";
import { UpdateArray } from "@/components/Context";
import { UpdateBlockName } from "@/services/Firebase-Methods/Task-Management-methods";
import { useContext, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";

const EditBlockModal: React.FC<{
  id: string;
  blockName: string;
}> = ({ id, blockName }) => {
  const [newblockname, setNewblockname] = useState<string>("");
  const updateContext = useContext(UpdateArray);

  useEffect(() => {
    setNewblockname(blockName);
  }, [blockName]);

  const UpdateBlockNameFunc = () => {
    setNewblockname(blockName);
    if (newblockname.trim() !== "" && blockName.trim() !== "") {
      UpdateBlockName(id, blockName, newblockname).then(() => {
        updateContext?.onTaskAdded();
        showSuccessToast("The block has been updated!");
      });
    } else {
      showErrorToast("The block was not updated!");
    }
  };

  return (
    <dialog id="EditBlockModal" className="modal">
      <div className="modal-box bg-bg-mygrey">
        <h3 className="font-bold text-lg mb-2 ">
          Editing a block "{blockName}"
        </h3>

        {/* Первая пара инпута и кнопки */}
        <span className="label-text">Change block name</span>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="New Name"
            className="input input-ghost w-full bg-transparent max-w-4xl  ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey"
            onChange={(e) => {
              setNewblockname(e.target.value);
            }}
            value={newblockname}
          />
          <form method="dialog" className="">
            <button
              className="btn btn-square bg-transparent border-[#3a393c] ml-2 hover:bg-bg-mydurkgrey"
              onClick={UpdateBlockNameFunc}
            >
              <FiCheck style={{ fontSize: "20px" }} />
            </button>
          </form>
        </div>

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
export default EditBlockModal;
