import { showErrorToast, showSuccessToast } from "@/components";
import {
  ArraySpaceNamesContex,
  NavButSet,
  RemoveOrEdit,
  UpdateArray,
} from "@/components/Context";
import { UpdateBlockName } from "@/services/Firebase-Methods/Task-Management-methods";
import { SpaceFunc } from "@/utils/SpaceFunc";
import { useContext, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

const EditBlockModal: React.FC<{
  blockName: string;
}> = ({ blockName }) => {
  //#region UseState
  const [newblockname, setNewblockname] = useState<string>("");
  const [activeSpace, setActiveSpace] = useState<string>("All");
  const [activeDiv, setActiveDiv] = useState<boolean>(false);
  const [IsCreatednewSpace, setIsCreatednewSpace] = useState<boolean>(false);
  const [newSPName, setNewSPName] = useState<string>("");
  const [targetValue, setTargetValue] = useState<string>("");

  //#endregion

  //#region UseCont
  const dataContext = useContext(NavButSet);
  const updateContext = useContext(UpdateArray);
  const ContextArraSP = useContext(ArraySpaceNamesContex);
  const theme = useContext(RemoveOrEdit);
  //#endregion

  //#region func

  const ClickSpaceFunc = (newSPName: string) => {
    targetValue.trim() === ""
      ? (setIsCreatednewSpace(false),
        setActiveSpace("All"),
        setActiveDiv(false))
      : (setTargetValue(""),
        setNewSPName(newSPName.trim()),
        setIsCreatednewSpace(true),
        setActiveDiv(false));
  };

  const DefaultState = () => {
    setActiveSpace("All");
    setTargetValue("");
    setNewSPName("");
    setActiveDiv(false);
    setIsCreatednewSpace(false);
  };

  const UpdateBlockNameFunc = () => {
    setNewblockname(blockName);
    if (newblockname.trim() !== "" && blockName.trim() !== "") {
      UpdateBlockName(theme?.id, blockName, newblockname, activeSpace).then(
        async () => {
          updateContext?.onTaskAdded();
          ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
          showSuccessToast("The block has been updated!");
        }
      );
    } else {
      showErrorToast("The block was not updated!");
    }
    DefaultState();
  };
  //#endregion

  //#region UseEffect
  useEffect(() => {
    const Func = async () => {
      try {
        ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
      } catch (error) {
        console.error(error);
      }
    };

    Func();
  }, []);

  useEffect(() => {
    setNewblockname(blockName);
  }, [blockName]);

  //#endregion

  return (
    <dialog id="EditBlockModal" className="modal">
      <div
        className={`modal-box backdrop-blur-3xl ${dataContext.importTheme.textColor}  ${dataContext.importTheme.backgroundColor}`}
      >
        <h3 className="font-bold text-lg mb-2 ">
          Editing a block "{blockName}"
        </h3>

        {/* Первая пара инпута и кнопки */}
        <span className="label-text">Change block name</span>

        <input
          type="text"
          placeholder="New Name"
          className="input input-ghost w-full bg-transparent max-w-4xl mb-2 ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey"
          onChange={(e) => {
            setNewblockname(e.target.value);
          }}
          value={newblockname}
        />

        <span className="label-text ">
          Select space (shift + wheel up/down = scroll) or create a new one
        </span>

        <ul className="settingForNavSpace snap-x snap-mandatory w-full  pb-2 flex flex-row  items-center overflow-scroll overflow-y-hidden ">
          <li id={`${0}`} className="mr-2 snap-start">
            <button
              className="btn btn-ghost py-2 px-4 flex justify-center items-center h-full border-[#3a393c] rounded-[8px]"
              onClick={() => {
                setActiveSpace("All");
              }}
            >
              <p className="truncate overflow-hidden text-ellipsis">All</p>
            </button>
          </li>

          {ContextArraSP?.ArraySpaceCont.map((SpaceNames, index) =>
            SpaceNames.filter(
              (name, idx, self) =>
                self.findIndex(
                  (n) => n.spaceName === name.spaceName && n.spaceName !== "All"
                ) === idx
            ).map((name) => (
              <li id={`${index + 1}`} className="max-w-[220px] mr-2 snap-start">
                <button
                  className="btn btn-ghost py-2 px-4 flex justify-center items-center w-full h-full border-[#3a393c] rounded-[8px]"
                  onClick={() => {
                    setActiveSpace(name.spaceName);
                  }}
                >
                  <p className="truncate overflow-hidden text-ellipsis">
                    {name.spaceName}
                  </p>
                </button>
              </li>
            ))
          )}

          {IsCreatednewSpace ? (
            <li>
              <button
                className="btn btn-ghost mr-2 flex justify-center items-center  h-[28px] overflow-hidden truncate text-ellipsis border-[#3a393c] rounded-[8px]"
                onClick={() => {
                  setActiveSpace(newSPName);
                }}
              >
                {newSPName}
              </button>
            </li>
          ) : (
            <></>
          )}
          <li>
            <button
              className="btn btn-ghost  mr-2 flex justify-center items-center  h-full border-[#3a393c] rounded-[8px]"
              onClick={() => {
                setActiveDiv(true);
              }}
            >
              <HiOutlinePlus style={{ fontSize: "20px" }} />
            </button>
          </li>
        </ul>
        <p className="text-xs truncate overflow-hidden text-ellipsis flex justify-end">
          Space selected: "
          <p className="truncate overflow-hidden text-ellipsis">
            {activeSpace}
          </p>
          "
        </p>

        {activeDiv ? (
          <div className="mb-3 flex flex-col">
            <span className="label-text">Please enter a new name</span>
            <div className="w-full flex flex-row justify-around items-center">
              <input
                type="text"
                placeholder="New Name"
                className="input input-ghost w-full  bg-transparent max-w-4xl transition-all ease-linear hover:bg-bg-mydurkgrey"
                onChange={(e) => {
                  setTargetValue(e.target.value);
                }}
                value={targetValue}
              />
              <button
                className="btn btn-square bg-transparent  border-[#3a393c] ml-[8px] w-44 hover:bg-bg-mydurkgrey"
                onClick={() => {
                  ClickSpaceFunc(targetValue);
                }}
              >
                Create
                <HiOutlinePlus style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}

        <form method="dialog" className="mt-4 w-full">
          <button
            className="btn btn-square bg-transparent border-[#3a393c] w-full hover:bg-bg-mydurkgrey"
            onClick={UpdateBlockNameFunc}
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
export default EditBlockModal;
