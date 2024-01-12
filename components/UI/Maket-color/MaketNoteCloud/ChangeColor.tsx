import { FC } from "react";

const ChangeColor: FC<{
  backgroundColor: string;
  textColor: string;
  blur: string;
  borderColor:string
  margin?: string;
  onButtonClick: (
    backgroundColor: string,
    textColor: string,
    blur: string,
    borderColor:string
  ) => void;
}> = ({ onButtonClick, backgroundColor, textColor, blur, borderColor, margin }) => {
  return (
    <div
      className={`w-14 h-14 rounded-lg hover:scale-110 transition-all ${margin} ${backgroundColor} ${blur}`}
      onClick={() => onButtonClick(backgroundColor, textColor, borderColor, blur)}
    ></div>
  );
};
export default ChangeColor;
