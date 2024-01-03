import { showErrorToast, showSuccessToast } from "@/components";
import { NavButSet } from "@/components/Context";
import { ChangeNameUser } from "@/services/Firebase-Methods/ReadDataForUser";
import { useContext, useState } from "react";

const ChangeNameComponent = () => {
  const [userName, setUserName] = useState("");
  const Refresh = useContext(NavButSet);
  const handleFileUpload = async () => {
    if (userName.trim() !== "") {
      await ChangeNameUser(userName, Refresh?.id).then(() => {
        Refresh?.fetchDataName();
        showSuccessToast("The username has been updated!");
        setUserName("");
      });
    } else {
      showErrorToast("The name was not changed!");
    }
  };
  return (
    <>
      <input
        type="text"
        className="input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <span className="text-xs">
        Your name may appear on NoteCloud, you can change it at any time, it is
        only visible to you
      </span>
      
      <button
        className="btn btn-outline btn-sm w-[180px] mt-2"
        onClick={handleFileUpload}
      >
        Update username
      </button>
    </>
  );
};
export default ChangeNameComponent;
