import { ReadShemeColor } from "@/services/Local-Storage/ReadFromStorage";
import React, { useState, FC, createContext, ReactNode, useEffect } from "react";

type ThemeObject = {
  backgroundColor: string;
  textColor: string;
  blur: string;
  CardColor: string;
};

interface IContext {
  importTheme2: ThemeObject;
  setImportTheme: React.Dispatch<React.SetStateAction<ThemeObject>>;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IContext>({
  importTheme2: {
    backgroundColor: "bg-bg-mygrey",
    textColor: "text-myGreyForFont",
    blur: "backdrop-blur-0",
    CardColor: "bg-bg-myyellow",
  },
  setImportTheme: () => {},
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [importTheme2, setImportTheme] = useState({
    backgroundColor: "bg-bg-mygrey",
    textColor: "text-myGreyForFont", 
    blur: "backdrop-blur-0",
    CardColor: "bg-bg-myyellow",
  });
  console.log("FropContext", importTheme2);

  const value = {
    importTheme2,
    setImportTheme,
  };

  useEffect(() => {
    const ReadShemeColorUseEffect = () => {
      const theme = ReadShemeColor();
      setImportTheme({
        backgroundColor: theme.backgroundColor,
        textColor: theme.textColor,
        blur: theme.blur,
        CardColor: theme.CardColor,
      });
      console.log("Contextsss",importTheme2);
    };
    ReadShemeColorUseEffect();
  }, []);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
