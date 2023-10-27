import Link from "next/link";
import WindowAuth from "./components/WindowAuth";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-cover  bg-[url('https://images.wallpaperscraft.ru/image/single/iabloki_knigi_ochki_215087_3840x2400.jpg')] h-screen">
      <WindowAuth/>
    </div>
  );
}
