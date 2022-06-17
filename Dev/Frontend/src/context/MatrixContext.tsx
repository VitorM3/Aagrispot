import { createContext, useEffect, useState } from "react"
import { IMatrixContext } from "../models/interface/context/matrixContext"
import { IMatrix } from "../models/interface/routesApi/apiMatrix/matrix";
import { MatrixToCalculate } from "../models/types/matrixToCalculate";
import { ThemeProps } from "../models/types/ThemeProps";

export const MatrixContext = createContext<IMatrixContext | null>(null)

const MatrixContextProvider = ({children}:ThemeProps) => {
    // Criação das matrizes
    const [matrixCreated,setMatrixCreated] = useState<IMatrix[]>([])
    // Calculo das matrizes
    const [matrixToCalculate,setMatrixToCalculate] = useState<MatrixToCalculate[]>([])
    const [sinalToCalculate,setSinalToCalculate] = useState('')
    const [matrixCalculate,setMatrixCalculate] = useState<IMatrix[]>([])


    /**
     * Adicionar novos valores para o objeto de calculo entre matrizes
     * @param key Chave da respectiva matriz
     * @param matrix Respectiva matriz
     */
    const postMatrixToCalculate = (key:string,matrix:IMatrix[]) => {
        let newMatrixToCalculate = matrixToCalculate
        // Procurar se a respectiva chave já foi inserida
        let indexMatrixToCalculate = newMatrixToCalculate.findIndex((matrixToCalc)=>matrixToCalc.key === key)
        if(indexMatrixToCalculate != -1){
            // Apagar a respectiva chave caso ela exista e adicionar novo valor
            newMatrixToCalculate.splice(indexMatrixToCalculate,1,{key,matrix})
        }else{
            // Adicionar novo valor caso não exista
            newMatrixToCalculate.push({key,matrix})
        }
        setMatrixToCalculate(newMatrixToCalculate)
        console.log(matrixToCalculate)
    }

    
    return(
            <MatrixContext.Provider value={{
                matrixCreated,
                matrixCalculate,
                sinalToCalculate,
                matrixToCalculate,
                setMatrixCreated,
                setMatrixCalculate,
                postMatrixToCalculate,
                setSinalToCalculate
            }}>
                {children}
            </MatrixContext.Provider>

    );
}
export default MatrixContextProvider