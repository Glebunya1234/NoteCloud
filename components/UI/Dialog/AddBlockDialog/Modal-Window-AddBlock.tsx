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
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

import { AddNewTaskInBlock } from "@/services/Firebase-Methods/Task-Management-methods";
import { SpaceFunc } from "@/utils/SpaceFunc";
import { useContext, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

import { styleDatePicker } from "@/utils/StyleDatePicker";
import { Timestamp } from "firebase/firestore";

const AddBlockModal = () => {
  //#region hoocks
  //-----------------------UseState----------------------//
  const [blockname, setBlockname] = useState<string>("");
  const [taskname, setTaskname] = useState<string>("");
  const [activeSpace, setActiveSpace] = useState<string>("All");
  const [activeDiv, setActiveDiv] = useState<boolean>(false);
  const [IsCreatednewSpace, setIsCreatednewSpace] = useState<boolean>(false);
  const [newSPName, setNewSPName] = useState<string>("");
  const [targetValue, setTargetValue] = useState<string>("");
  const [deadLine, setDeadLine] = useState<Dayjs | null>(null);
  //-----------------------UseContext----------------------//
  const ContextArraSP = useContext(ArraySpaceNamesContex);
  const dataContext = useContext(NavButSet);
  const updateContext = useContext(UpdateArray);
  const theme = useContext(RemoveOrEdit);

  //#endregion

  //#region Func
  const DefaultState = () => {
    setBlockname("");
    setTaskname("");
    setActiveSpace("All");
    setActiveDiv(false);
    setTargetValue("");
    setNewSPName("");
    setIsCreatednewSpace(false);
    setDeadLine(null);
  };

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

  const AddNewBlockButton = () => {
    if (taskname.trim() !== "" && blockname.trim() !== "") {
      AddNewTaskInBlock(
        theme?.id,
        blockname,
        taskname,
        activeSpace,
        deadLine! ? `${deadLine}` : `${new Date()}`
      ).then(async () => {
        updateContext?.onTaskAdded();
        showSuccessToast("The block has been created!");
        ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
      });
    } else {
      showErrorToast("The block was not created!");
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

  // const CallbackFunc = (value: string) => {
  //   setActiveSpace(value);
  // };

  //#endregion
  return (
    <dialog id="ModalAddBlock1" className="modal ">
      <div
        className={`modal-box backdrop-blur-3xl  ${dataContext.importTheme.textColor} ${dataContext.importTheme.backgroundColor}`}
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

        <span className="label-text ">
          Select space (<kbd className="kbd kbd-xs">Shift</kbd> +{" "}
          <kbd className="kbd kbd-xs">Wheel Up/Down</kbd> = scroll) or create a
          new one
        </span>

        <ul className="settingForNavSpace mt-1 snap-x snap-mandatory w-full  flex flex-row  items-center overflow-scroll overflow-y-hidden ">
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
                className="btn btn-ghost  mr-2 flex justify-center items-center  h-[28px] overflow-hidden truncate text-ellipsis border-[#3a393c] rounded-[8px]"
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
          <div className=" flex flex-col">
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

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <span className="label-text">Please set a deadline</span>
          <DateTimeField
            value={deadLine}
            format="L HH:mm"
            className="rounded-lg w-full  h-12 flex justify-center   hover:bg-bg-mydurkgrey transition-all ease-linear "
            sx={styleDatePicker.datePicker}
            onChange={(newValue) => setDeadLine(newValue)}
          />
        </LocalizationProvider>

        <form method="dialog">
          <button
            className="btn btn-square bg-transparent mt-3 border-[#3a393c] w-full text-center hover:bg-bg-mydurkgrey"
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
