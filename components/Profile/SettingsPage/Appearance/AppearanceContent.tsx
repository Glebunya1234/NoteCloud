import { NavButSet } from "@/components/Context";

import MaketBlockComponent from "@/components/UI/Maket-color/MaketBlock/MaketBlockComponent";

import MaketNoteCloudComponent from "@/components/UI/Maket-color/MaketNoteCloud/MaketNoteCloudComponent";
import { AddColorScheme } from "@/services/Local-Storage/AddtoStorage";
import { ReadShemeColor } from "@/services/Local-Storage/ReadFromStorage";
import { useContext, useState } from "react";

import ChangeColorblock from "@/components/UI/Maket-color/MaketBlock/ChangeColorblock";
import ChangeColorNote from "@/components/UI/Maket-color/MaketNoteCloud/ChangeColorNote";
import ChangeAvatarBlock from "@/components/UI/Maket-color/MaketAvatar/ChangeAvatarBlock";
import { motion } from "framer-motion";

export default function ApperanceContent() {
  const DataContext = useContext(NavButSet);
  const [AvatarTheme, setAvatarTheme] = useState({
    AvatarShape: DataContext.importTheme.AvatarShape,
  });

  const [blocktheme, setBlocktheme] = useState({
    CardColor: DataContext.importTheme.CardColor,
  });
  const [NoteCloudColor, setNoteCloudColor] = useState({
    backgroundColor: DataContext.importTheme.backgroundColor,
    textColor: DataContext.importTheme.textColor,
    borderColor: DataContext.importTheme.borderColor,
    blur: DataContext.importTheme.blur,
  });

  const ChangeBlockColor = (prop: string) => {
    setBlocktheme({ CardColor: prop });
  };
  const ChangeAvatar = (prop: string) => {
    setAvatarTheme({ AvatarShape: prop });
  };

  const handleClick = (
    backgroundColor: string,
    textColor: string,
    borderColor: string,
    blur: string,
    CardColor: string,
    AvatarShape: string
  ) => {
    AddColorScheme(
      backgroundColor,
      textColor,
      blur,
      borderColor,
      CardColor,
      AvatarShape
    );
    DataContext?.setImportTheme(ReadShemeColor());
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
        <li
          className={`border-b-[1px] border-${DataContext.importTheme.borderColor}  mb-5`}
        >
          <h3 className="font-bold text-lg my-2">Preferred Avatar Shape</h3>
        </li>
        <motion.li
          animate={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          initial={{ opacity: 0, scale: 0.5, x: 2000 }}
        >
          <p className="text-sm">Choose what shape your avatar will be.</p>
          <section
            className={`flex w-full sm:overflow-x-auto  xl:w-min md:flex-row border-[2px] border-${DataContext.importTheme.borderColor} rounded-2xl`}
          >
            <ChangeAvatarBlock
              AvatarScr={DataContext.setSrc}
              onButtonClick={ChangeAvatar}
            />
          </section>
        </motion.li>
        <li
          className={`border-b-[1px] border-${DataContext.importTheme.borderColor}  mt-8 mb-5 `}
        >
          <h3 className="font-bold text-lg my-2">Theme preferences</h3>
        </li>

        <li className="flex flex-wrap w-full">
          <motion.aside
            animate={{
              opacity: 1,
            }}
            initial={{ opacity: 0 }}
            className="lg:mr-5 mb-5 xl:mb-0 transition-all w-full lg:w-min"
          >
            <h3 className="font-bold text-sm ">
              Choose what color the task blocks will be
            </h3>

            <section
              className={`flex flex-col overflow-scroll justify-center items-center mt-3 p-5 border-[2px] border-${DataContext.importTheme.borderColor} rounded-2xl `}
            >
              <MaketBlockComponent CardColor={blocktheme.CardColor} />
              <ChangeColorblock onButtonClick={ChangeBlockColor} />
            </section>
          </motion.aside>

          <motion.aside
            animate={{
              opacity: 1,
            }}
            initial={{ opacity: 0 }}
            className="w-full lg:w-min"
          >
            <h3 className="font-bold text-sm ">
              Choose what NoteCloud will look like
            </h3>

            <section
              className={`flex flex-col justify-center overflow-scroll items-center mt-3 p-5 border-[2px]  border-${DataContext.importTheme.borderColor} rounded-2xl `}
            >
              <MaketNoteCloudComponent
                bgCol={NoteCloudColor.backgroundColor}
                blur={NoteCloudColor.blur}
              />

              <ChangeColorNote onButtonClick={OnClickNoteScheme} />
            </section>
          </motion.aside>
        </li>
        <button
          className="btn btn-outline btn-sm w-[180px] mt-2"
          onClick={() => {
            handleClick(
              NoteCloudColor.backgroundColor,
              NoteCloudColor.textColor,
              NoteCloudColor.borderColor,
              NoteCloudColor.blur,
              blocktheme.CardColor,
              AvatarTheme.AvatarShape
            );
          }}
        >
          Update theme
        </button>
      </ul>
    </main>
  );
}
