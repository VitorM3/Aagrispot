import { SinalCalc } from "../models/enum/sinalCalc";
import { IMatrixBase } from "../models/interface/matrixBase";
import { calculate } from "../utils/calculate";
import { getNumberMaxOfLineAndColumn } from "../utils/getNumberMaxOfLineAndColumn";
import { calculateMatrixMultiplication } from "./calculateMatrixMultiplication";
/**
 * Função para criar uma nova matriz através de uma multiplicação de duas outras
 * @param matrixOne Matriz 1
 * @param matrixTwo Matriz 1
 * @returns Nova Matriz
 */
export function calculateNewMatrixMultiplication(
    matrixOne: IMatrixBase[],
    matrixTwo: IMatrixBase[]) {
    try {
        const numberMaxMatrix = getNumberMaxOfLineAndColumn(matrixOne, matrixTwo)
        // Atribuir valores da funções separadas
        let numberMaxLineOne = numberMaxMatrix.numberMaxLineMatrixOne + 1
        let numberMaxColumnTwo = numberMaxMatrix.numberMaxColumnMatrixTwo! + 1

        // Verificar numero atual das linhas da 
        let atualNumberLineOne = 1
        let atualNumberColumnTwo = 1

        // Valores para retornar
        let newMatrix: IMatrixBase[] = []
        while (atualNumberLineOne < numberMaxLineOne && atualNumberColumnTwo < numberMaxColumnTwo!) {
            let newValue = calculateMatrixMultiplication(matrixOne,matrixTwo,atualNumberLineOne,atualNumberColumnTwo)
            newMatrix.push({order:`a${atualNumberLineOne}${atualNumberColumnTwo}`,value:`${newValue}`})

           // Passar para a proxima linha
           if (atualNumberLineOne != numberMaxLineOne) {
            atualNumberLineOne = atualNumberLineOne + 1
        }
        // Passar para a proxima coluna
        if (atualNumberLineOne == numberMaxLineOne && atualNumberColumnTwo != numberMaxColumnTwo) {
            atualNumberColumnTwo = atualNumberColumnTwo + 1
            atualNumberLineOne = 1
        }

        }
        

        return newMatrix
    } catch (error:any) {
        throw new Error(`function(calculateNewMatrixMultiplication)=> ${error.message}`)
    }
}