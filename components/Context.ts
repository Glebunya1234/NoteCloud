import { createContext } from "react";

export type HoverContextType = {
    // theme: "hover:shadow-red-500/50" | "hover:shadow-white/50" | "";
    // setTheme: React.Dispatch<React.SetStateAction<"hover:shadow-red-500/50" | "hover:shadow-white/50" | "">>;
    Mode: true| false ;
    setMode: React.Dispatch<React.SetStateAction< true|false>>;
    ModeEditOrRemove: "edit" | "remove" | "none" ;
    setModeEditOrRemove: React.Dispatch<React.SetStateAction< "edit" | "remove" | "none" >>;
};

const ThemeContext = createContext<HoverContextType | undefined>(undefined);

export default ThemeContext 