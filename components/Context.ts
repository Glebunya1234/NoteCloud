import { themetype } from "@/types/ColorScheme/ColorScheme-types";
import { Auth } from "firebase/auth";
import { createContext } from "react";


export type HoverContextType = {
    id: string;
    ModeEditOrRemove: "edit" | "remove" | "none";
    setModeEditOrRemove: React.Dispatch<React.SetStateAction<"edit" | "remove" | "none">>;
};

export const RemoveOrEdit = createContext<HoverContextType>({
    id: "",
    ModeEditOrRemove: "none",
    setModeEditOrRemove: () => { }
});
//-------------------------------------------------------------------------------------//

export type NavButMenuType = {

    activeMain: "Home" | "Todos" | "Settings";
    setActiveMain: React.Dispatch<React.SetStateAction<"Home" | "Todos" | "Settings">>;
};

export const NavButMenu = createContext<NavButMenuType | undefined>(undefined);
//-------------------------------------------------------------------------------------//

export type ThemeObject = {
    backgroundColor: string;
    textColor: string;
    blur: string;
    CardColor: string;
};



export type NavButSetType = {
    id: string;
    auth: Auth | string;
    fetchDataIMG: () => void;
    fetchDataName: () => void;

    userDisplayName: string | null | undefined
    setuserDisplayName: React.Dispatch<React.SetStateAction<string | null | undefined>>;

    setSrc: string | undefined
    setSetSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
    importTheme: ThemeObject;
    setImportTheme: React.Dispatch<React.SetStateAction<ThemeObject>>;

    activeSetName: string;
    setActiveSetName: React.Dispatch<React.SetStateAction<string>>;
};

export const NavButSet = createContext<NavButSetType>({
    id: "",
    auth: "",
    fetchDataIMG: () => { },
    fetchDataName: () => { },
    setSrc: "",
    setSetSrc: () => { },
    userDisplayName: "",
    setuserDisplayName: () => { },
    importTheme: {
        backgroundColor: "",
        textColor: "",
        blur: "",
        CardColor: "",
    },
    setImportTheme: () => { },
    activeSetName: "",
    setActiveSetName: () => { },
});
//-------------------------------------------------------------------------------------//


export type ChangeTegButton = {
    tegButName: string;
    setTegButName: React.Dispatch<React.SetStateAction<string>>;
};

export const ChangeTeg = createContext<ChangeTegButton | undefined>(undefined);
//-------------------------------------------------------------------------------------//

export type UpdateArray = {
    onTaskAdded: () => void;
};

export const UpdateArray = createContext<UpdateArray | undefined>(undefined);
//-------------------------------------------------------------------------------------//

export type ChangeNickNameAndPhotoUrl = {

    nicknameAndphoto: string | undefined | void;
    setNicknameAndphoto: React.Dispatch<React.SetStateAction<string | undefined | void>>;
};
export const ChandeNameAndPhoto = createContext<ChangeNickNameAndPhotoUrl | undefined>(undefined);
//-------------------------------------------------------------------------------------//