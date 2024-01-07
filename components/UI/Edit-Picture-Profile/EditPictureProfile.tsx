import { NavButSet } from "@/components/Context";
import { useContext } from "react";
import { openAModalWindowbyID } from "../Dialog/Modal-MethodOpen";

const EditPictureProfile = () => {
  const DataContext = useContext(NavButSet);

  return (
    <aside className="mb-6 mt-2 flex flex-col relative">
      <img
        className="mask mask-circle"
        src={DataContext.setSrc}
        style={{
          minWidth: "200px",
          minHeight: "200px",
          width: "200px",
          height: "200px",
          objectFit: "cover",
        }}
        alt="  "
      />

      <div className="dropdown">
        <button className="absolute bottom-2 left-2 btn btn-outline btn-sm backdrop-blur-sm  w-16 rounded-2xl">
          <p className="mx-1">Edit</p>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2  shadow backdrop-blur-sm bg-bg-mydurkgrey/50 rounded-box "
        >
          <li>
            <button  onClick={()=> openAModalWindowbyID("ModalEditProf")} className="btn btn-ghost btn-sm justify-start mb-1">Upload a photo…</button>
          </li>
          <li>
          <button className="btn btn-ghost btn-sm justify-start">Remove photo</button>
            
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default EditPictureProfile;
