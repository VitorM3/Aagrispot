import { useContext } from "react"
import { SecondaryHeaderContext } from "../context/SecondaryHeaderContext"
import { ISecondaryHeaderContext } from "../models/interface/context/secondaryHeaderContext"


export const useSecondaryHeader = () => {
    const value = useContext(SecondaryHeaderContext)
    return <ISecondaryHeaderContext>value
}