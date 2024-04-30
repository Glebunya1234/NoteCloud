import {
  showMessangeToast,
  showSuccessToast,
  showErrorToast,
} from "@/components";
import {
  ArraySpaceNamesContex,
  NavButSet,
  NavSpaceNames,
  RemoveOrEdit,
  UpdateArray,
} from "@/components/Context";
import {
  AddNewTaskInBlock,
  RemoveSpace,
  СhangeNewNameSpace,
} from "@/services/Firebase-Methods/Task-Management-methods";
import { SpaceNamesbyUser } from "@/types/Сollection-Todoes-interfaces/types";
import { SpaceFunc } from "@/utils/SpaceFunc";
import { useContext, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";

const AddSpaceDialog = () => {
  const [newSPName, setNewSPName] = useState<string>("");
  const [oldSPName, setOldSPName] = useState<string>("");
  const [activeDiv, setActiveDiv] = useState<boolean>(false);

  const dataContext = useContext(NavButSet);
  const SpaceNameContext = useContext(NavSpaceNames);
  const updateContext = useContext(UpdateArray);
  const ContextArraSP = useContext(ArraySpaceNamesContex);

  const RemoveSpaceFunc = async (spaceName: string) => {
    RemoveSpace(dataContext.id, spaceName);
    ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
    SpaceNameContext?.setActiveSpace("All");
  };

  const RenameSpaceFunc = async (spaceName: string) => {
    СhangeNewNameSpace(dataContext.id, spaceName, newSPName).then(async () => {
      ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
      updateContext?.onTaskAdded();
      SpaceNameContext?.setActiveSpace("All");
      setActiveDiv(false);
    });
  };

  const Click = async (spaceName: string) => {
    setActiveDiv(true);
    setOldSPName(spaceName);
    setNewSPName(spaceName);
  };

  useEffect(() => {
    const Func = async () => {
      try {
        ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
        // console.log(ContextArraSP?.ArraySpaceCont);
      } catch (error) {
        console.error(error);
      }
    };

    Func();
  }, []);

  return (
    <dialog id="AddSpaceDialog" className="modal">
      <div
        className={`modal-box backdrop-blur-3xl ${dataContext.importTheme.textColor} ${dataContext.importTheme.backgroundColor}`}
      >
        <h3 className="font-bold text-lg mb-2 ">Space</h3>

        <span className="label-text">Your spaces</span>
        <ul className="snap-y snap-mandatory max-h-[175px] overflow-y-auto ">
          <li id={`${0}`} className="mr-2 snap-start">
            <div className="snap-end  bg-transparent border-[1px] border-[#3a393c] rounded-[8px] w-full mb-2 flex justify-between items-center h-12 px-5 py-2 ">
              <p className=" truncate overflow-hidden text-ellipsis">All</p>
              <nav className="flex flex-row"></nav>
            </div>
          </li>
          {ContextArraSP?.ArraySpaceCont.map((SpaceNames, index) =>
            SpaceNames.filter(
              (name, idx, self) =>
                self.findIndex(
                  (n) => n.spaceName === name.spaceName && n.spaceName !== "All"
                ) === idx
            ).map((name, inx) => (
              <li id={`${index + 1}`}>
                <div className="snap-end  bg-transparent border-[1px] border-[#3a393c] rounded-[8px] w-full mb-2 flex justify-between items-center h-12 px-5 py-2 ">
                  <p className=" truncate overflow-hidden text-ellipsis">
                    {name.spaceName}
                  </p>
                  <nav className="flex flex-row">
                    <button
                      className="btn btn-square btn-ghost btn-sm mx-1 "
                      onClick={() => Click(name.spaceName)}
                    >
                      <HiPencil />
                    </button>

                    <button
                      className="btn btn-square btn-ghost btn-sm mx-1"
                      onClick={() => RemoveSpaceFunc(name.spaceName)}
                    >
                      <HiOutlineTrash />
                    </button>
                  </nav>
                </div>
              </li>
            ))
          )}
        </ul>
        {activeDiv ? (
          <div className="my-3 flex flex-col">
            <span className="label-text">Please enter a new name</span>
            <div className="w-full flex flex-row justify-around items-center">
              <input
                type="text"
                placeholder="New Name"
                className="input input-ghost w-full  bg-transparent max-w-4xl transition-all ease-linear hover:bg-bg-mydurkgrey"
                onChange={(e) => {
                  setNewSPName(e.target.value);
                }}
                value={newSPName}
              />
              <button
                className="btn btn-square bg-transparent  border-[#3a393c] ml-[8px] w-44 hover:bg-bg-mydurkgrey"
                onClick={() => {
                  RenameSpaceFunc(oldSPName);
                }}
              >
                Save change
                <FiCheck style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="my-3">
          <span className="label-text">
            Press button or click outside to close
          </span>
        </div>
        <form method="dialog">
          <button
            className="btn btn-square bg-transparent border-[#3a393c] w-full text-center hover:bg-bg-mydurkgrey"
            //   onClick={AddNewBlockButton}
          >
            Close
          </button>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
};
export default AddSpaceDialog;
{
  /* Первая пара инпута и кнопки */
}
