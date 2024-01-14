import { NavButSet } from "@/components/Context";
import { useContext } from "react";
import { openAModalWindowbyID } from "../Dialog/Modal-MethodOpen";
import { getAuth } from "firebase/auth";
import { deleteObject, ref } from "firebase/storage";
import { storageRef } from "@/services/Firebase-Config/firebaseConfig";
import { addImageData } from "@/services/Firebase-Methods/ReadDataForUser";
import { showSuccessToast } from "@/components";

const EditPictureProfile = () => {
  const DataContext = useContext(NavButSet);
  const data =
    "https://i.pinimg.com/564x/43/14/0a/43140a3803e5f1b39c1ffac1a35a3ec7.jpg";
  const auth = getAuth();
  const user = auth.currentUser;

  const handleClick = () => {
    const filename = `profile_image_${user?.uid}.jpg`;
    const desertRef = ref(storageRef, filename);

    deleteObject(desertRef)
      .then(() => {
        addImageData(data, DataContext.id).then(() => {
          showSuccessToast("Photo has been removed!");
          DataContext.setSetSrc(data);
        });
      })
      .catch((error) => {
        console.log(error);
        addImageData(data, DataContext.id);
        DataContext.setSetSrc(data);
      });
  };
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
        <button className="absolute bottom-2 left-2 btn btn-outline btn-sm backdrop-blur-md  w-16 rounded-2xl">
          <p className={`mx-1 ${DataContext.importTheme.textColor} `}>Edit</p>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2  shadow backdrop-blur-sm bg-bg-mydurkgrey/50 rounded-box "
        >
          <li>
            <button
              onClick={() => openAModalWindowbyID("ModalEditProf")}
              className="btn btn-ghost btn-sm justify-start mb-1"
            >
              Upload a photo…
            </button>
          </li>
          <li>
            <button
              className="btn btn-ghost btn-sm justify-start"
              onClick={handleClick}
            >
              Remove photo
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default EditPictureProfile;
