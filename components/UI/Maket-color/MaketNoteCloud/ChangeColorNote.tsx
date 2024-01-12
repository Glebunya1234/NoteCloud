import { FC } from "react";
import ChangeColor from "./ChangeColor";

const ChangeColorNote: FC<{
  onButtonClick: (
    backgroundColor: string,
    textColor: string,
    blur: string,
    borderColor: string
  ) => void;
}> = ({ onButtonClick }) => {
  return (
    // OnClickNoteScheme
    <aside className="flex md:flex-row mt-3 p-5 bg-bg-mydurkgrey rounded-2xl ">
      <ChangeColor
        backgroundColor="bg-white"
        blur="backdrop-blur-0"
        textColor="text-black"
        borderColor="bg-myLightkgrey"
        onButtonClick={onButtonClick}
      />
      <ChangeColor
        backgroundColor="bg-bg-mygrey"
        textColor="text-base"
        blur="backdrop-blur-0"
        borderColor="bg-mydurkgrey"
        margin="mx-2"
        onButtonClick={onButtonClick}
      />
      <ChangeColor
        backgroundColor="bg-white/20"
        textColor="text-white"
        blur="backdrop-blur-md"
        borderColor="bg-mydurkgrey"
        margin="mr-2"
        onButtonClick={onButtonClick}
      />
      <ChangeColor
        backgroundColor="bg-bg-mygrey/20"
        textColor="text-base"
        borderColor="bg-mydurkgrey"
        blur="backdrop-blur-md"
        onButtonClick={onButtonClick}
      />
    </aside>
  );
};
export default ChangeColorNote;
