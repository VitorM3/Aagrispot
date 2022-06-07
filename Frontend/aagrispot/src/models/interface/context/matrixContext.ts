import { IMatrix } from "../routesApi/apiMatrix/matrix";

export interface IMatrixContext{
    matrixCreated:IMatrix[]
    setMatrixCreated: (matrix:IMatrix[]) => void
}