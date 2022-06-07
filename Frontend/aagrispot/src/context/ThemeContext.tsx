import { createContext, useState } from "react";
import { IThemeContext } from "../models/interface/context/themeContext";
import { ThemeProps } from "../models/types/ThemeProps";

export const ThemeContext = createContext<IThemeContext | null>(null)

const ThemeContextProvider = ({children}:ThemeProps) => {
    const [theme,setTheme] = useState('light')

    const handleChangeTheme = (newTheme:boolean) => {
        if(newTheme == true){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return(
            <ThemeContext.Provider value={{
                theme,
                handleChangeTheme
            }}>
                {children}
            </ThemeContext.Provider>

    );
}
export default ThemeContextProvider