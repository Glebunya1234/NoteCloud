import { HiOutlinePlusSm, HiOutlineTrash, HiPencil } from "react-icons/hi";

export type themetype = {
  theme:
    | "bg-bg-myyellow"
    | "bg-bg-myRedPink"
    | "bg-bg-myBlueSky"
    | "bg-bg-myLightGreen"
    | string;
};
const MaketBlockComponent: React.FC<themetype> = ({ theme }) => {
  return (
    <div
      className={` min-w-[250px] w-[250px] m-5 h-auto flex flex-col justify-between ${theme} shadow-xl rounded-3xl overflow-hidden`}
    >
      <section className="z-[2] ">
        <h2 className="text-black text-lg font-bold m-5 mb-2">Name block</h2>
        <li>
          <div className="collapse my-1 collapse-arrow overflow-visible text-black">
            <input type="checkbox" name="my-accordion-1" />
            {/* collapse-title */}
            <div className="collapse-title text-xl w-full font-medium overflow-hidden text-ellipsis ">
              Todo title
            </div>

            {/* collapse-content */}
            <div className="collapse-content ">
              <nav className="flex justify-between  px-1">
                {/* Set priority */}
                <section className="flex ">
                  <div className="flex items-center w-full">
                    <span className="badge bg-transparent py-3 text-black">
                      Title teg
                    </span>
                  </div>
                </section>

                <section className="flex items-center ">
                  <button className="btn btn-circle btn-xs mx-1 ">
                    <HiPencil />
                  </button>
                  <button className="btn btn-circle btn-xs mx-1">
                    <HiOutlineTrash />
                  </button>
                </section>
              </nav>
            </div>
          </div>
        </li>
      </section>
      <section className="p-5 pt-3 flex z-[2]">
        <input
          type="text"
          placeholder="Name task"
          className="input input-bordered input-xs w-full bg-bg-mygrey max-w-4xl  py-2 ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
        />
        <button className="btn btn-circle btn-xs mx-1">
          <HiOutlinePlusSm style={{ fontSize: "18px" }} />
        </button>
      </section>
    </div>
  );
};
export default MaketBlockComponent;
