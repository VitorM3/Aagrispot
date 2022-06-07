import { useContext } from "react"
import { PageContext } from "../context/PageContext"
import { IPageContext } from "../models/interface/context/pageContext"


export const usePage = () => {
    const value = useContext(PageContext)
    return <IPageContext>value
}