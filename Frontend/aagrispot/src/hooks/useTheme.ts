import { useContext } from "react"
import {ThemeContext} from "../context/ThemeContext"
import { IThemeContext } from "../models/interface/context/themeContext"

export const useTheme = () => {
    const value = useContext(ThemeContext)
    return <IThemeContext>value
}