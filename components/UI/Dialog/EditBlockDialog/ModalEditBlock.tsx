import { FiCheck } from "react-icons/fi";

const EditBlockModal: React.FC<{
  id: string;
  blockName: string;
}> = ({ id, blockName }) => {
  
  console.log("ввввв",blockName)
  return (
    <dialog id="EditBlockModal" className="modal">
      <div className="modal-box bg-bg-mygrey">
        <h3 className="font-bold text-lg mb-2 ">Editing a block "{blockName}"</h3>

        {/* Первая пара инпута и кнопки */}
        <span className="label-text">Change block name</span>
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="New Name"
            className="input input-ghost w-full bg-transparent max-w-4xl  ml-auto transition-all ease-linear hover:bg-bg-mydurkgrey "
          />
          <button className="btn btn-square bg-transparent border-[#3a393c] ml-2 hover:bg-bg-mydurkgrey">
            <FiCheck style={{ fontSize: "20px" }} />
          </button>
        </div>

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
export default EditBlockModal;
