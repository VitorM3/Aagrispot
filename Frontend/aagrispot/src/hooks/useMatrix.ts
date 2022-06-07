import { useContext } from "react"
import { MatrixContext } from "../context/MatrixContext"
import { IMatrixContext } from "../models/interface/context/matrixContext"


export const useMatrix = () => {
    const value = useContext(MatrixContext)
    return <IMatrixContext>value
}