import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";
import { HiOutlinePlus } from "react-icons/hi";

type ButtonAddBlockProps = {
  className: string;
};

// const ButtonAddBlock: React.FC<ButtonAddBlockProps> = ({ className }) => {
const ButtonAddBlock =() => {
  const handleButtonAddBlock = () => {};

  return (
    <button
      className="btn-md flex justify-center btn-circle btn-outline btn-success"
      onClick={() => openAModalWindowbyID("ModalAddBlock")}
    >
      <HiOutlinePlus style={{ fontSize: "20px" }} />
    </button>
  );
};
export default ButtonAddBlock;
