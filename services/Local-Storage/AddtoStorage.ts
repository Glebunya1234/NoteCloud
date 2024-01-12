import { ThemeObject } from "@/types/ColorScheme/ColorScheme-types";

// добавление цветовой схемы по умолчанию 
export const AddColorDefault = (): void => {
    const Sheme = {
        backgroundColor: "bg-bg-mygrey ",
        blur: "backdrop-blur-0",
        textColor: "text-base",
        borderColor:"bg-mydurkgrey",
        CardColor: "bg-bg-myyellow",
    };
    localStorage.setItem('defaultSheme', JSON.stringify(Sheme));
};
// добавление цветовой схемы при выборе пользователя
export const AddColorScheme = (backgroundColor: string, textColor: string, blur: string, borderColor:string, CardColor: string): void => {
    const Sheme = {
        backgroundColor: backgroundColor,
        blur: blur,
        textColor: textColor,
        borderColor:borderColor,
        CardColor: CardColor,
    };

    localStorage.setItem('UserSheme', JSON.stringify(Sheme));
};