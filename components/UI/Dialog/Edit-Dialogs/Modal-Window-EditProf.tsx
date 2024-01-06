import { showErrorToast, showSuccessToast } from "@/components/Toast/toast";
import {
  mydatabase,
  mystorage,
  storageRef,
} from "@/services/Firebase-Config/firebaseConfig";
import {
  ChangeNameUser,
  addImageData,
} from "@/services/Firebase-Methods/ReadDataForUser";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";

const ModalEditProf: React.FC<{
  id: string;
  oldUserName: string;
  onPhotoChange: () => void;
  onNameChange: () => void;
}> = ({ id, oldUserName, onPhotoChange, onNameChange }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const auth = getAuth();
  const [userName, setUserName] = useState("");

  const handleFileChangeAndName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const fileRef = ref(storageRef, selectedFile.name);
      try {
        // Загрузка файла в Firebase Storage
        await uploadBytes(fileRef, selectedFile);

        // Получение URL загруженного файла
        const downloadURL = await getDownloadURL(fileRef);

        await addImageData(downloadURL, id).then(() => {
          onPhotoChange();
          showSuccessToast("The photo changed succesfully!");
        });
        console.log(
          "Ссылка на изображение сохранена в Firestore с идентификатором:"
        );
      } catch (error) {
        console.error("Ошибка загрузки файла в Firebase Storage", error);
      }
    }

    if (userName.trim() !== "") {
      await ChangeNameUser(userName, id).then(() => {
        onNameChange();
        showSuccessToast("Changes saved!");
      });
    } else {
      showErrorToast("The name was not changed!");
    }

    if (userName.trim() !== "") {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          updateProfile(user, {
            displayName: userName,
          });
          onNameChange();

          ChangeNameUser(userName, id);

          showSuccessToast("The username has been updated!");
          setUserName("");
        } else {
          showErrorToast("The name was not changed!");
          setUserName("");
        }
      });
    } else {
      showErrorToast("The name was not changed!");
    }
  };

  useEffect(() => {
    oldUserName === "null" ? setUserName("") : setUserName(oldUserName);
  }, [oldUserName]);

  return (
    <dialog id="ModalEditProf" className="modal">
      <div className="modal-box bg-bg-mygrey">
        <h3 className="font-bold text-lg mb-2 ">Fast edit your profile</h3>

        {/* Первая пара инпута и кнопки */}
        <span className="label-text">Edit your name</span>

        <input
          type="text"
          className="input input-bordered w-full bg-transparent max-w-4xl  mb-3  transition-all ease-linear hover:bg-bg-mydurkgrey"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />

        <span className="label-text">Upload a photo...</span>
        {/* Вторая пара инпута и кнопки */}

        <input
          type="file"
          className="file-input w-full bg-transparent max-w-4xl  mb-3  transition-all ease-linear hover:bg-bg-mydurkgrey "
          onChange={handleFileChangeAndName}
        />

        <form method="dialog" className="flex justify-center">
          <button
            className="btn btn-square bg-transparent border-[#3a393c] w-full hover:bg-bg-mydurkgrey"
            onClick={handleFileUpload}
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
export default ModalEditProf;
