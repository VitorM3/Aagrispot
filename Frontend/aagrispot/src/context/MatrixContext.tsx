import { createContext, useState } from "react"
import { IMatrixContext } from "../models/interface/context/matrixContext"
import { IMatrix } from "../models/interface/routesApi/apiMatrix/matrix";
import { ThemeProps } from "../models/types/ThemeProps";

export const MatrixContext = createContext<IMatrixContext | null>(null)

const MatrixContextProvider = ({children}:ThemeProps) => {
    const [matrixCreated,setMatrixCreated] = useState<IMatrix[]>([])

    
    return(
            <MatrixContext.Provider value={{
                matrixCreated,
                setMatrixCreated
            }}>
                {children}
            </MatrixContext.Provider>

    );
}
export default MatrixContextProvider