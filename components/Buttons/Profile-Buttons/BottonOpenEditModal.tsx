import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";

const ButtonEditProfModal = () => {
  return (
    <button
      className="btn btn-outline btn-xs w-13 rounded-2xl"
      onClick={()=> openAModalWindowbyID("ModalEditProf")}
    >
      <p className="mx-1">Edit</p>
    </button>
  );
};
export default ButtonEditProfModal
