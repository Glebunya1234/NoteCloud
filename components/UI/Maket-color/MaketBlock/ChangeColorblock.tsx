import { FC } from "react";
import ChangeColor from "./ChangeColor";

const ChangeColorblock: FC<{
  onButtonClick: (Color: string) => void;
}> = ({ onButtonClick }) => {
  return (
    <aside className="flex md:flex-row mt-3 p-5 bg-bg-mydurkgrey rounded-2xl ">
      <ChangeColor Color="bg-bg-myyellow" onButtonClick={onButtonClick} />
      <ChangeColor
        Color="bg-bg-myRedPink"
        margin="mx-2"
        onButtonClick={onButtonClick}
      />
      <ChangeColor
        Color="bg-bg-myBlueSky"
        margin="mr-2"
        onButtonClick={onButtonClick}
      />
      <ChangeColor Color="bg-bg-myLightGreen" onButtonClick={onButtonClick} />
    </aside>
  );
};
export default ChangeColorblock;
