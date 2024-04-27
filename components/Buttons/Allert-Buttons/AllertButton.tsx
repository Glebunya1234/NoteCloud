import { RemoveOrEdit } from "@/components/Context";
import { useContext, useEffect } from "react";
import { FaPowerOff } from "react-icons/fa";

const AllertButton = () => {
  const Mode = useContext(RemoveOrEdit);
  const hendClickButton = () => {
    Mode?.setModeEditOrRemove("none");
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key == 'Escape') {
      hendClickButton();
    }
  };
  useEffect(() => {
    // Добавляет обработчик события клавиатуры при монтировании компонента
    document.addEventListener('keydown', handleKeyDown);

    // Удаляет обработчик события клавиатуры при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <button
        className="btn btn-sm btn-circle whitespace-nowrap overflow-hidden"
        onClick={hendClickButton}
      >
        <FaPowerOff />
      </button>
    </div>
  );
};
export default AllertButton;
