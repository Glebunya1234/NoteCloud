import {
  showMessangeToast,
  showSuccessToast,
  showErrorToast,
} from "@/components";
import { NavButSet, RemoveOrEdit, UpdateArray } from "@/components/Context";
import { AddNewTaskInBlock } from "@/services/Firebase-Methods/Task-Management-methods";
import { SpaceNamesbyUser } from "@/types/Сollection-Todoes-interfaces/types";
import { SpaceFunc } from "@/utils/SpaceFunc";
import { useContext, useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";

const AddSpaceDialog = () => {
  // const [blockname, setBlockname] = useState<string>("");
  // const [taskname, setTaskname] = useState<string>("");
  const dataContext = useContext(NavButSet);
  const [arraySP, setArraySP] = useState<SpaceNamesbyUser[][]>([]);
  // const updateContext = useContext(UpdateArray);
  // const theme = useContext(RemoveOrEdit);
  // const AddNewBlockButton = () => {
  //   setBlockname("");
  //   setTaskname("");

  //   if (taskname.trim() !== "" && blockname.trim() !== "") {
  //     AddNewTaskInBlock(theme?.id, blockname, taskname).then(() => {
  //       updateContext?.onTaskAdded();
  //       showSuccessToast("The block has been created!");
  //     });
  //   } else {
  //     showErrorToast("The block was not created!");
  //   }
  // };
  useEffect(() => {
    const Func = async () => {
      try {
        setArraySP(await SpaceFunc());
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
          {arraySP.map((SpaceNames, index) => (
            <li id={`${index}`}>
              {SpaceNames.filter(
                (name, idx, self) =>
                  self.findIndex((n) => n.spaceName === name.spaceName) === idx
              ).map((name, inx) => (
                <div className="snap-end bg-transparent border-[1px] border-[#3a393c] rounded-[8px] w-full mb-2 flex justify-between items-center h-12 px-5 py-2 ">
                  <p>{name.spaceName}</p>
                  <nav>
                    {name.spaceName !== "All" ? (
                      <>
                        <button
                          className="btn btn-square btn-ghost btn-sm mx-1 "
                          onClick={() => {
                            console.log("names", name);
                          }}
                        >
                          <HiPencil />
                        </button>
                        <button className="btn btn-square btn-ghost btn-sm mx-1">
                          <HiOutlineTrash />
                        </button>
                      </>
                    ) : (
                      <></>
                    )}
                  </nav>
                </div>
              ))}
            </li>
          ))}
        </ul>

        <div className="mb-3">
          <span className="label-text">Create a new space</span>
          <input
            type="text"
            placeholder="Space name"
            className="input input-ghost w-full bg-transparent max-w-4xl border-[1px] border-[#3a393c] ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
            // onChange={(e) => {
            //   setBlockname(e.target.value);
            // }}
            // value={blockname}
          />
        </div>
        <form method="dialog">
          <button
            className="btn btn-square bg-transparent border-[#3a393c] w-full text-center hover:bg-bg-mydurkgrey"
            //   onClick={AddNewBlockButton}
          >
            Create
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
export default AddSpaceDialog;
{
  /* Первая пара инпута и кнопки */
}
