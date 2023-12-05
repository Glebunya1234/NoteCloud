import { openModal } from "@/components/UI/Dialog/Modal-Window-EditProf-MethodOpen";

const ButtonEditProfModal = () => {
  return (
    <button
      className="btn btn-outline btn-xs w-13 rounded-2xl"
      onClick={openModal}
    >
      <p className="mx-1">Edit</p>
    </button>
  );
};
export default ButtonEditProfModal
