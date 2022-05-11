import { createContext, useState } from "react";
import { ISecondaryHeaderContext } from "../models/interface/context/secondaryHeaderContext";
import { IThemeContext } from "../models/interface/context/themeContext";
import { ThemeProps } from "../models/types/ThemeProps";

export const SecondaryHeaderContext = createContext<ISecondaryHeaderContext | null>(null)

const SecondaryHeaderProvider = ({children}:ThemeProps) => {
    const [title,setTheme] = useState('Default')

    /**
     * Adicionar um novo titulo para a pagina
     * @param newTitle Titulo da pagina
     */
    const handleChangeTitle = (newTitle:string) => {
            setTheme(newTitle)
    }

    return(
            <SecondaryHeaderContext.Provider value={{
                title,
                handleChangeTitle
            }}>
                {children}
            </SecondaryHeaderContext.Provider>

    );
}
export default SecondaryHeaderProvider