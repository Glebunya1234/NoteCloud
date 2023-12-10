import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";
import { HiOutlinePlus } from "react-icons/hi";

const ButtonAddBlock = () => {

  const handleButtonAddBlock = () =>{

  }





  return (
    <button className="btn btn-circle btn-ghost btn-lg text-black mx-5 z-50 bg-bg-myyellow" onClick={()=> openAModalWindowbyID("ModalAddBlock")}>
      <HiOutlinePlus />
    </button>
  );
};
export default ButtonAddBlock;
