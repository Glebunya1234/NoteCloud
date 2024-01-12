import { FC } from "react";

const ChangeColor: FC<{
  Color: string;
  margin?:string;
  onButtonClick: (Color: string ) => void;
}> = ({ onButtonClick, Color,margin }) => {
  return (
    <div
      className={`w-14 h-14 rounded-lg hover:scale-110 transition-all ${Color} ${margin}`}
      onClick={() => onButtonClick(Color)}
    ></div>
  );
};
export default ChangeColor;
