import { MatrixToCalculate } from "../../types/matrixToCalculate";
import { IMatrix } from "../routesApi/apiMatrix/matrix";

export interface IMatrixContext{
    matrixCreated:IMatrix[]
    matrixCalculate:IMatrix[]
    matrixToCalculate:MatrixToCalculate[]
    sinalToCalculate:string
    setMatrixCreated: (matrix:IMatrix[]) => void
    setSinalToCalculate: (sinal:string) => void
    setMatrixCalculate: (matrix:IMatrix[]) => void
    postMatrixToCalculate: (key:string,matrix:IMatrix[]) => void
}