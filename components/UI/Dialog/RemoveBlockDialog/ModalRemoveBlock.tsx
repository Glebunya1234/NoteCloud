import { showErrorToast, showSuccessToast } from "@/components";
import {
  ArraySpaceNamesContex,
  NavButSet,
  RemoveOrEdit,
  UpdateArray,
} from "@/components/Context";
import { deleteBlockInName } from "@/services/Firebase-Methods/Task-Management-methods";
import { SpaceFunc } from "@/utils/SpaceFunc";
import { useContext } from "react";
import { FiCheck } from "react-icons/fi";

const ModalRemoveBlock: React.FC<{
  blockName: string;
}> = ({ blockName }) => {
  const updateContext = useContext(UpdateArray);
  const dataContext = useContext(NavButSet);
  const Refresh = useContext(RemoveOrEdit);
  const ContextArraSP = useContext(ArraySpaceNamesContex);
  const handleClickDell = () => {
    try {
      deleteBlockInName(Refresh?.id, blockName).then(async () => {
        updateContext?.onTaskAdded();
        ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
        showSuccessToast("The block has been deleted!");
      });
    } catch (error) {
      showErrorToast("The block was not deleted!");
    }
  };

  return (
    <dialog id="ModalRemoveBlock" className="modal">
      <div
        className={`modal-box backdrop-blur-3xl  ${dataContext.importTheme.backgroundColor}`}
      >
        <h3 className="font-bold text-lg mb-2 ">
          Editing a block "{blockName}"
        </h3>

        {/* Первая пара инпута и кнопки */}
        <span className="label-text">Are you sure you want to delete it?</span>
        <div className="flex items-center mb-4">
          <form method="dialog" className="flex mt-2">
            <button
              className="btn btn-outline btn-error"
              onClick={handleClickDell}
            >
              Delete
            </button>
            <button className="btn bg-transparent border-[#3a393c] ml-4  hover:bg-bg-mydurkgrey">
              Cancel
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
export default ModalRemoveBlock;
