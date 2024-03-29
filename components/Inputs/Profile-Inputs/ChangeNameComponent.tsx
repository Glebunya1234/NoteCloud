import { showErrorToast, showSuccessToast } from "@/components";
import { NavButSet } from "@/components/Context";
import { ChangeNameUser } from "@/services/Firebase-Methods/ReadDataForUser";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";

const ChangeNameComponent = () => {
  const Refresh = useContext(NavButSet);
  const import_User_Name = Refresh.userDisplayName;
  const [userName, setUserName] = useState<string | null | undefined>(
    import_User_Name
  );
  const auth = getAuth();

  //#region Functions
  const handleClickUpload = async () => {
    if (userName!.trim() !== "") {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          updateProfile(user, {
            displayName: userName!.trim(),
          });

          await ChangeNameUser(userName!.trim(), Refresh?.id).then(() => {
            Refresh?.fetchDataName();
            showSuccessToast("The username has been updated!");
          });

          setUserName("");
        } else {
          setUserName("");
        }
      });

      // await ChangeNameUser(userName, Refresh?.id).then(() => {
      //   Refresh?.fetchDataName();
      //   showSuccessToast("The username has been updated!");
      //   setUserName("");
      // });
    } else {
      showErrorToast("The name was not changed!");
    }
  };
  //#endregion

  return (
    <>
      <input
        type="text"
        className="input input-bordered bg-transparent max-w-xs my-2 transition-all ease-linear hover:bg-black hover:bg-opacity-20"
        value={userName!}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <span className="text-xs mb-2">
        Your name may appear on NoteCloud, you can change it at any time, it is
        only visible to you
      </span>

      <button
        className={`${
          userName!.trim() === "" ? "btn-disabled" : ""
        } btn btn-outline  btn-sm w-[180px] mt-auto mb-6 `}
        onClick={handleClickUpload}
      >
        Update username
      </button>
    </>
  );
};
export default ChangeNameComponent;
