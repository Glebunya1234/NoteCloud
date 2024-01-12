import { AddColorScheme } from "@/services/Local-Storage/AddtoStorage";
import { ThemeObject } from "@/types/ColorScheme/ColorScheme-types";
import { HiOutlinePlusSm, HiOutlineTrash, HiPencil } from "react-icons/hi";

interface MaketNoteCloudComponentProps {
  bgCol: string;
  blur: string;
}
const MaketNoteCloudComponent: React.FC<MaketNoteCloudComponentProps> = ({
  bgCol,
  blur,
}) => {
  return (
    <div className="flex w-[250px] h-[176px] overflow-hidden justify-center  m-5 rounded-3xl items-center bg-cover bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')]">
      <div
        className={`w-[230px] h-90% flex  ${bgCol}  ${blur} rounded-xl overflow-hidden `}
      >
        <section className="flex border-r-bg-mydurkgrey border-r-[1px]  w-10 h-full  items-center  flex-col ">
          <aside className="w-full h-5 "></aside>

          <aside className="w-full h-9 border-y-[1px] border-bg-mydurkgrey"></aside>
        </section>

        <section className="w-full h-full ">
          <header className="w-full mt-5 border-b-[1px] border-bg-mydurkgrey"></header>
        </section>
      </div>
    </div>
  );
};
export default MaketNoteCloudComponent;
