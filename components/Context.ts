import { createContext } from "react";

export type HoverContextType = {
    // theme: "hover:shadow-red-500/50" | "hover:shadow-white/50" | "";
    // setTheme: React.Dispatch<React.SetStateAction<"hover:shadow-red-500/50" | "hover:shadow-white/50" | "">>;
    // Mode: true| false ;
    // setMode: React.Dispatch<React.SetStateAction< true|false>>;
    ModeEditOrRemove: "edit" | "remove" | "none" ;
    setModeEditOrRemove: React.Dispatch<React.SetStateAction< "edit" | "remove" | "none" >>;
};


export const ThemeContext = createContext<HoverContextType | undefined>(undefined);

export type ChangeTegButton = {
    // theme: "hover:shadow-red-500/50" | "hover:shadow-white/50" | "";
    // setTheme: React.Dispatch<React.SetStateAction<"hover:shadow-red-500/50" | "hover:shadow-white/50" | "">>;
    // Mode: true| false ;
    // setMode: React.Dispatch<React.SetStateAction< true|false>>;
    tegButName: string;
    setTegButName: React.Dispatch<React.SetStateAction<string>>;
};


export const ChangeTeg = createContext<ChangeTegButton | undefined>(undefined);


export type UpdateArray = {
    onTaskAdded: () => void;
};

export const UpdateArray = createContext<UpdateArray | undefined>(undefined);

 