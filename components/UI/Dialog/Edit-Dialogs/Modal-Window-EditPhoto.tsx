import { NavButSet } from "@/components/Context";
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
import getCroppedImg from "@/utils/cropImage";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { FiCheck } from "react-icons/fi";

const ModalEditProf = () => {
  const auth = getAuth();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const DataContext = useContext(NavButSet);

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  function readFile(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        () => resolve(reader.result as string),
        false
      );
      reader.readAsDataURL(file);
    });
  }

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };

  const showCroppedImage = async () => {
    try {
      if (imageSrc && croppedAreaPixels) {
        const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);

        setCroppedImage(croppedImage);

        const user = auth.currentUser;

        // const filename = `profile_image_${user?.uid}_${Date.now()}.jpg`;
        const filename = `profile_image_${user?.uid}.jpg`;

        const fileRef = ref(storageRef, filename);

        const blob = await fetch(croppedImage!).then((res) => res.blob());

        await uploadBytes(fileRef, blob).then(async () => {
          const downloadURL = await getDownloadURL(fileRef);

          await addImageData(downloadURL, DataContext.id);
          DataContext?.setSetSrc(`${downloadURL}`);
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <dialog id="ModalEditProf" className="modal">
      <div
        className={`modal-box backdrop-blur-3xl ${DataContext.importTheme.textColor} ${DataContext.importTheme.backgroundColor}`}
      >
        <h3 className="font-bold text-lg mb-2 ">Upload a photo</h3>
        <div className=" relative h-32 sm:h-72 md:h-96 my-5">
          {imageSrc ? (
            <Cropper
              image={imageSrc}
              aspect={1 / 1}
              crop={crop}
              zoom={zoom}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          ) : (
            <></>
          )}
        </div>

        <span className="label-text">Upload a photo...</span>

        <input
          type="file"
          accept="image/*"
          className="file-input w-full bg-transparent max-w-4xl  mb-3  transition-all ease-linear hover:bg-bg-mydurkgrey "
          onChange={onFileChange}
        />

        <form method="dialog" className="flex justify-center">
          <button
            className="btn btn-square bg-transparent border-[#3a393c] w-full hover:bg-bg-mydurkgrey"
            onClick={showCroppedImage}
          >
            Save change
            <FiCheck style={{ fontSize: "20px" }} />
          </button>
        </form>

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
