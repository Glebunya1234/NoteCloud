"use client"
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

const BottonBack = () => {
  const router = useRouter();
  return (
    <button
      className="btn btn-circle btn-ghost btn-sm ml-3 "
      onClick={()=>{router.push("../")}}
    >
      <FiArrowLeft />
    </button>
  );
};
export default BottonBack;
