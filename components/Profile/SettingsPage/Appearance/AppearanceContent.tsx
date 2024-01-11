import { NavButSet } from "@/components/Context";
import MaketBlockComponent from "@/components/UI/Maket-color/MaketBlockComponent";
import MaketNoteCloudComponent from "@/components/UI/Maket-color/MaketNoteCloudComponent";
import {
  AddColorDefault,
  AddColorScheme,
} from "@/services/Local-Storage/AddtoStorage";
import { ReadShemeColor } from "@/services/Local-Storage/ReadFromStorage";
import { useContext, useState } from "react";
import { HiOutlinePlusSm, HiOutlineTrash, HiPencil } from "react-icons/hi";

export default function ApperanceContent() {
  const DataContext = useContext(NavButSet);
  const [blocktheme, setBlocktheme] = useState({ CardColor: "bg-bg-myyellow" });
  const [NoteCloudColor, setNoteCloudColor] = useState({
    backgroundColor: "bg-bg-mygrey",
    textColor: "text-base",
    blur: "backdrop-blur-0",
  });

  const ChangeBlockColor = (prop: string) => {
    setBlocktheme({ CardColor: prop });
  };

  const handleClick = (
    backgroundColor: string,
    textColor: string,
    blur: string,
    CardColor: string
  ) => {
    AddColorDefault();
    AddColorScheme(backgroundColor, textColor, blur, CardColor);
    DataContext?.setImportTheme(ReadShemeColor());
    console.log(ReadShemeColor());
  };
  const OnClickNoteScheme = (
    backgroundColor: string,
    textColor: string,
    blur: string
  ) => {
    const noteCloutTheme = {
      backgroundColor: backgroundColor,
      textColor: textColor,
      blur: blur,
    };
    setNoteCloudColor(noteCloutTheme);
  };
  return (
    <main className="w-full h-full flex flex-col p-3">
      <ul>
        <li className="border-b-[1px] border-bg-mydurkgrey mb-5">
          <h3 className="font-bold text-lg my-2">Preferred Avatar Shape</h3>
        </li>
        <li>
          <p className="text-sm">Choose what shape your avatar will be.</p>
          <section className="flex w-full  lg:w-min flex-wrap md:flex-nowrap justify-center items-center md:flex-row mt-3 p-5 border-[2px] border-bg-mydurkgrey rounded-2xl">
            <div className="avatar p-2 hover:bg-bg-mydurkgrey hover:scale-105 rounded-3xl  transition-all">
              <div className="w-24 rounded-xl">
                <img src={DataContext.setSrc} />
              </div>
            </div>
            <div className="avatar p-2 lg:mx-5  hover:bg-bg-mydurkgrey hover:scale-105 rounded-3xl  transition-all">
              <div className="w-24 rounded-full">
                <img src={DataContext.setSrc} />
              </div>
            </div>
            <div className="avatar p-2  hover:bg-bg-mydurkgrey hover:scale-105 rounded-3xl  transition-all">
              <div className="w-24 mask mask-squircle">
                <img src={DataContext.setSrc} />
              </div>
            </div>
            <div className="avatar lg:ml-5 p-2  hover:bg-bg-mydurkgrey hover:scale-105 rounded-3xl  transition-all">
              <div className="w-24 mask mask-hexagon">
                <img src={DataContext.setSrc} />
              </div>
            </div>
          </section>
        </li>
        <button className="btn btn-outline btn-sm w-[180px] mt-2">
          Update username
        </button>
        <li className="border-b-[1px] border-bg-mydurkgrey mt-8 mb-5 ">
          <h3 className="font-bold text-lg my-2">Theme preferences</h3>
        </li>

        <li className="flex flex-wrap w-full">
          <aside className="lg:mr-5 mb-5 xl:mb-0 transition-all w-full lg:w-min">
            <h3 className="font-bold text-sm ">
              Choose what color the task blocks will be
            </h3>

            <section className="flex flex-col justify-center items-center mt-3 p-5 border-[2px] border-bg-mydurkgrey rounded-2xl ">
              <MaketBlockComponent CardColor={blocktheme.CardColor} />
              <aside className="flex md:flex-row mt-3 p-5 bg-bg-mydurkgrey rounded-2xl ">
                <div
                  className="w-14 h-14 rounded-lg hover:scale-105 transition-all bg-bg-myyellow"
                  onMouseEnter={() => ChangeBlockColor("bg-bg-myyellow")}
                ></div>
                <div
                  className="w-14 h-14 rounded-lg mx-5 hover:scale-105 transition-all bg-bg-myRedPink"
                  onMouseEnter={() => ChangeBlockColor("bg-bg-myRedPink")}
                ></div>
                <div
                  className="w-14 h-14 rounded-lg hover:scale-105 transition-all bg-bg-myBlueSky"
                  onMouseEnter={() => ChangeBlockColor("bg-bg-myBlueSky")}
                ></div>
                <div
                  className="w-14 h-14 rounded-lg ml-5 hover:scale-105 transition-all bg-bg-myLightGreen"
                  onMouseEnter={() => ChangeBlockColor("bg-bg-myLightGreen")}
                ></div>
              </aside>
            </section>
          </aside>

          <aside className="w-full lg:w-min">
            <h3 className="font-bold text-sm ">
              Choose what NoteCloud will look like
            </h3>

            <section className="flex flex-col justify-center items-center mt-3 p-5 border-[2px] border-bg-mydurkgrey rounded-2xl ">
              <MaketNoteCloudComponent
                bgCol={NoteCloudColor.backgroundColor}
                blur={NoteCloudColor.blur}
              />
              <aside className="flex md:flex-row mt-3 p-5 bg-bg-mydurkgrey rounded-2xl ">
                <div
                  className="w-14 h-14 rounded-lg hover:scale-105 transition-all backdrop-blur-none bg-white"
                  onClick={() =>
                    OnClickNoteScheme(
                      "bg-white",
                      "text-black",
                      "backdrop-blur-0"
                    )
                  }
                ></div>
                <div
                  className="w-14 h-14 rounded-lg mx-5 hover:scale-105 transition-all  bg-bg-mygrey"
                  onClick={() =>
                    OnClickNoteScheme(
                      "bg-bg-mygrey",
                      "text-base",
                      "backdrop-blur-0"
                    )
                  }
                ></div>
                <div
                  className="w-14 h-14 rounded-lg hover:scale-105 transition-all bg-white/20"
                  onClick={() =>
                    OnClickNoteScheme(
                      "bg-white/20",
                      "text-white",
                      "backdrop-blur-3xl"
                    )
                  }
                ></div>
                <div
                  className="w-14 h-14 rounded-lg ml-5 hover:scale-105 transition-all bg-bg-mygrey/20"
                  onClick={() =>
                    OnClickNoteScheme(
                      "bg-bg-mygrey/20",
                      "text-base",
                      "backdrop-blur-3xl"
                    )
                  }
                ></div>
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
              NoteCloudColor.blur,
              blocktheme.CardColor
            );
          }}
        >
          Update username
        </button>
      </ul>
    </main>
  );
}
