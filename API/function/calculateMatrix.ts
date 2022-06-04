import { SinalCalc } from "../models/enum/sinalCalc";
import { IErrorClient } from "../models/interface/errorClient";
import { IMatrixBase } from "../models/interface/matrixBase";
import { calculate } from "../utils/calculate";
/**
 * Calcular a soma ou a subtração de matrizes
 * @param matrixOne Matrix 1
 * @param matrixTwo Matrix 2
 * @param sinal Sinal da operação
 * @param order Ordem da respectiva matriz
 * @returns Novo valor
 */
export function calculateMatrixSumOrSubtracion(matrixOne: IMatrixBase[], matrixTwo: IMatrixBase[],sinal:SinalCalc,order:string):number{
    try {
        // Procurar objeto com a ordem passada
        let elementOfOrderOne = matrixOne.find((matrix)=>matrix.order == order)
        let elementOfOrderTwo = matrixTwo.find((matrix)=>matrix.order == order)
        // Verificar se a ordem passada é valida
        if(elementOfOrderOne == undefined || elementOfOrderTwo == undefined){
            throw new Error('Matrix is invalid')}

        // Calcular valores
        let newValue = calculate(sinal,parseInt(elementOfOrderOne?.value as string),parseInt(elementOfOrderTwo?.value))
        if(newValue == undefined){throw new Error('Calc is invalid')}

        return newValue
    } catch (error:any) {
        throw new Error(`function(calculateMatrix) => ${error.message}`)
    }
}