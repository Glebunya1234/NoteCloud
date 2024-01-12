
import { ThemeObject } from "@/types/ColorScheme/ColorScheme-types";

// Чтение цветовой схемы 
export const ReadShemeColor = (): ThemeObject => {
    const UserTheme = localStorage.getItem('UserSheme')
    const userThemeObject = UserTheme ? JSON.parse(UserTheme) : null;
    return userThemeObject || null
};