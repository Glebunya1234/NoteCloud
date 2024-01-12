import { NavButSet } from "@/components/Context";

import MaketBlockComponent from "@/components/UI/Maket-color/MaketBlock/MaketBlockComponent";

import MaketNoteCloudComponent from "@/components/UI/Maket-color/MaketNoteCloud/MaketNoteCloudComponent";
import {
  AddColorDefault,
  AddColorScheme,
} from "@/services/Local-Storage/AddtoStorage";
import { ReadShemeColor } from "@/services/Local-Storage/ReadFromStorage";
import { useContext, useState } from "react";
import { HiOutlinePlusSm, HiOutlineTrash, HiPencil } from "react-icons/hi";

import Colorblock from "@/components/UI/Maket-color/MaketBlock/ChangeColorblock";
import ChangeColorblock from "@/components/UI/Maket-color/MaketBlock/ChangeColorblock";
import ChangeColorNote from "@/components/UI/Maket-color/MaketNoteCloud/ChangeColorNote";

export default function ApperanceContent() {
  const DataContext = useContext(NavButSet);
  const [blocktheme, setBlocktheme] = useState({ CardColor:  DataContext.importTheme.CardColor });
  const [NoteCloudColor, setNoteCloudColor] = useState({
    backgroundColor: DataContext.importTheme.backgroundColor,
    textColor:  DataContext.importTheme.textColor,
    borderColor:  DataContext.importTheme.borderColor,
    blur:  DataContext.importTheme.blur,
  });

  const ChangeBlockColor = (prop: string) => {
    setBlocktheme({ CardColor: prop });
  };

  const handleClick = (
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    blur: string,
    CardColor: string
  ) => {
    AddColorDefault();
    AddColorScheme(backgroundColor, textColor, blur, borderColor, CardColor);
    DataContext?.setImportTheme(ReadShemeColor());
    console.log(ReadShemeColor());
  };
  const OnClickNoteScheme = (
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    blur: string
  ) => {
    const noteCloutTheme = {
      backgroundColor: backgroundColor,
      textColor: textColor,
      borderColor: borderColor,
      blur: blur,
    };
    setNoteCloudColor(noteCloutTheme);
  };
  return (
    <main className="w-full h-full flex flex-col p-3">
      <ul>
        <li className={`border-b-[1px] border-${DataContext.importTheme.borderColor}  mb-5`}>
          <h3 className="font-bold text-lg my-2">Preferred Avatar Shape</h3>
        </li>
        <li>
          <p className="text-sm">Choose what shape your avatar will be.</p>
          <section
            className={`flex w-full  lg:w-min flex-wrap md:flex-nowrap justify-center items-center md:flex-row mt-3 p-5 border-[2px] border-${DataContext.importTheme.borderColor} rounded-2xl`}
          >
            <div className="avatar p-2 hover:scale-110 rounded-3xl  transition-all">
              <div className="w-24 rounded-xl">
                <img src={DataContext.setSrc} />
              </div>
            </div>
            <div className="avatar p-2 lg:mx-5  hover:scale-110 rounded-3xl  transition-all">
              <div className="w-24 rounded-full">
                <img src={DataContext.setSrc} />
              </div>
            </div>
            <div className="avatar p-2  hover:scale-110 rounded-3xl  transition-all">
              <div className="w-24 mask mask-squircle">
                <img src={DataContext.setSrc} />
              </div>
            </div>
            <div className="avatar lg:ml-5 p-2  hover:scale-110 rounded-3xl  transition-all">
              <div className="w-24 mask mask-hexagon">
                <img src={DataContext.setSrc} />
              </div>
            </div>
          </section>
        </li>
        <button className="btn btn-outline btn-sm w-[180px] mt-2">
          Update avatar
        </button>
        <li className={`border-b-[1px] border-${DataContext.importTheme.borderColor}  mt-8 mb-5 `}>
          <h3 className="font-bold text-lg my-2">Theme preferences</h3>
        </li>

        <li className="flex flex-wrap w-full">
          <aside className="lg:mr-5 mb-5 xl:mb-0 transition-all w-full lg:w-min">
            <h3 className="font-bold text-sm ">
              Choose what color the task blocks will be
            </h3>

            <section
              className={`flex flex-col justify-center items-center mt-3 p-5 border-[2px] border-${DataContext.importTheme.borderColor} rounded-2xl `}
            >
              <MaketBlockComponent CardColor={blocktheme.CardColor} />
              <aside className="flex md:flex-row mt-3 p-5 bg-bg-mydurkgrey rounded-2xl ">
                <ChangeColorblock
                  Color="bg-bg-myyellow"
                  onButtonClick={ChangeBlockColor}
                />
                <ChangeColorblock
                  Color="bg-bg-myRedPink"
                  margin="mx-2"
                  onButtonClick={ChangeBlockColor}
                />
                <ChangeColorblock
                  Color="bg-bg-myBlueSky"
                  margin="mr-2"
                  onButtonClick={ChangeBlockColor}
                />
                <ChangeColorblock
                  Color="bg-bg-myLightGreen"
                  onButtonClick={ChangeBlockColor}
                />
              </aside>
            </section>
          </aside>

          <aside className="w-full lg:w-min">
            <h3 className="font-bold text-sm ">
              Choose what NoteCloud will look like
            </h3>

            <section
              className={`flex flex-col justify-center items-center mt-3 p-5 border-[2px]  border-${DataContext.importTheme.borderColor} rounded-2xl `}
            >
              <MaketNoteCloudComponent
                bgCol={NoteCloudColor.backgroundColor}
                blur={NoteCloudColor.blur}
              />
              <aside className="flex md:flex-row mt-3 p-5 bg-bg-mydurkgrey rounded-2xl ">
                <ChangeColorNote
                  backgroundColor="bg-white"
                  blur="backdrop-blur-0"
                  textColor="text-black"
                  borderColor="bg-myLightkgrey"
                  onButtonClick={OnClickNoteScheme}
                />
                <ChangeColorNote
                  backgroundColor="bg-bg-mygrey"
                  textColor="text-base"
                  blur="backdrop-blur-0"
                  borderColor="bg-mydurkgrey"
                  margin="mx-2"
                  onButtonClick={OnClickNoteScheme}
                />
                <ChangeColorNote
                  backgroundColor="bg-white/20"
                  textColor="text-white"
                  blur="backdrop-blur-md"
                  borderColor="bg-mydurkgrey"
                  margin="mr-2"
                  onButtonClick={OnClickNoteScheme}
                />
                <ChangeColorNote
                  backgroundColor="bg-bg-mygrey/20"
                  textColor="text-base"
                  borderColor="bg-mydurkgrey"
                  blur="backdrop-blur-md"
                  onButtonClick={OnClickNoteScheme}
                />
              </aside>
            </section>
          </aside>
        </li>
        <button
          className="btn btn-outline btn-sm w-[180px] mt-2"
          onClick={() => {
            handleClick(
              NoteCloudColor.backgroundColor,
              NoteCloudColor.textColor,
              NoteCloudColor.borderColor,
              NoteCloudColor.blur,
              blocktheme.CardColor
            );
          }}
        >
          Update theme
        </button>
      </ul>
    </main>
  );
}
