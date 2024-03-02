import { ThemeObject } from "@/types/ColorScheme/ColorScheme-types";
import { TypeSetState } from "@/types/TypeSetSstateForUseState/type";
import { Auth } from "firebase/auth";
import { createContext } from "react";


export type HoverContextType = {
    id: string;
    ModeEditOrRemove: "edit" | "remove" | "move" | "none";
    setModeEditOrRemove: TypeSetState<"edit" | "remove" |  "move" | "none">;
};

export const RemoveOrEdit = createContext<HoverContextType>({
    id: "",
    ModeEditOrRemove: "none",
    setModeEditOrRemove: () => { }
});
//-------------------------------------------------------------------------------------//

export type NavButMenuType = {

    activeMain: "Home" | "Todos" | "Settings";
    setActiveMain: TypeSetState<"Home" | "Todos" | "Settings">;
};

export const NavButMenu = createContext<NavButMenuType | undefined>(undefined);
//-------------------------------------------------------------------------------------//



export type NavButSetType = {
    id: string;
    auth: Auth | string;
    fetchDataIMG: () => void;
    fetchDataName: () => void;

    userDisplayName: string | null | undefined
    setuserDisplayName: TypeSetState<string | null | undefined>;

    setSrc: string | undefined
    setSetSrc: TypeSetState<string | undefined>;
    importTheme: ThemeObject;
    setImportTheme: TypeSetState<ThemeObject>;

    activeSetName: string;
    setActiveSetName: TypeSetState<string>;
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
        borderColor: "",
        CardColor: "",
        AvatarShape:"",
    },
    setImportTheme: () => { },
    activeSetName: "",
    setActiveSetName: () => { },
});
//-------------------------------------------------------------------------------------//


export type ChangeTegButton = {
    tegButName: string;
    setTegButName: TypeSetState<string>;
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
    setNicknameAndphoto: TypeSetState<string | undefined | void>;
};
export const ChandeNameAndPhoto = createContext<ChangeNickNameAndPhotoUrl | undefined>(undefined);
//-------------------------------------------------------------------------------------//