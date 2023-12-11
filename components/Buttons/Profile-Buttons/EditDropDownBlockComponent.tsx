import { HiDotsVertical, HiOutlinePlus, HiOutlineTrash, HiPencil } from "react-icons/hi";

const DropdownEditBlock = () => {
  return (

    <main className="absolute bottom-0 right-0 h-auto m-5 z-50">
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghostbtn-active">
            <HiDotsVertical style={{ fontSize: "20px" }} />
          </div>
    
          <ul className="dropdown-content p-0 mt-1 w-full menu z-50 shadow bg-black rounded-3xl ">
            <li className="mb-2">
              <button className="btn-md flex justify-center btn-circle btn-outline btn-success">
                <HiOutlinePlus style={{ fontSize: "20px" }} />
              </button>
            </li>
            <li className="mb-2">
              <button className="flex justify-center btn-md btn-circle btn-outline btn-warning">
                <HiPencil style={{ fontSize: "20px" }} />
              </button>
            </li>
            <li>
              <button className="flex justify-center btn-md btn-circle  btn-outline btn-error">
                <HiOutlineTrash style={{ fontSize: "20px" }} />
              </button>
            </li>
          </ul>
        </div>
    </main>
  );
};
export default DropdownEditBlock;
