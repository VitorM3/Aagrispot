import { SinalCalc } from "../models/enum/sinalCalc";
import { IMatrixBase } from "../models/interface/matrixBase";
import { calculate } from "../utils/calculate";
import { getNumberMaxOfLineAndColumn } from "../utils/getNumberMaxOfLineAndColumn";
/**
 * Função para calcular a multiplicação de duas matrizes
 * @param matrixOne Matriz 1
 * @param matrixTwo Matriz 2
 * @param numberLine Numero da linha da matriz 1
 * @param numberColumn Numero da coluna da matriz 2
 * @returns Valor da multiplicação
 */
export function calculateMatrixMultiplication(
    matrixOne: IMatrixBase[],
    matrixTwo: IMatrixBase[],
    numberLine: number,
    numberColumn: number):number {
    try {
        const numberMaxMatrix = getNumberMaxOfLineAndColumn(matrixOne, matrixTwo)
        // Atribuir valores da funções separadas
        let numberMaxColumnOne = numberMaxMatrix.numberMaxColumnnMatrixOne
        let numberMaxLineTwo = numberMaxMatrix.numberMaxLineMatrixTwo

        // Verificar numero atual das linhas da 
        let atualNumberColumnOne = 1
        let atualNumberLineTwo = 1

        // Valores para retornar
        let newValueInMatrix: number[] = []
        while (atualNumberColumnOne < numberMaxColumnOne + 1 && atualNumberLineTwo < numberMaxLineTwo! + 1) {
            // Encontrar valores dentro das matrizes
            let valueMatrixOne = matrixOne.find((matrix) => matrix.order == `a${numberLine}${atualNumberColumnOne}`)
            let valueMatrixTwo = matrixTwo.find((matrix) => matrix.order == `a${atualNumberLineTwo}${numberColumn}`)
            // Calcular valores
            let newValueInArray = <number>calculate(SinalCalc.Multipli, parseFloat(valueMatrixOne!.value), parseFloat(valueMatrixTwo!.value))
            // Atribuir valores para o array onde será realizado o calculo futuramente
            newValueInMatrix.push(newValueInArray)
            atualNumberColumnOne++
            atualNumberLineTwo++

        }
        // Somar os elementos do array onde estão guardados os valores das multiplicações
        let newValue = 0
        newValueInMatrix.forEach((value) => {
            newValue = newValue + value
        })
        return newValue
    } catch (error:any) {
        throw new Error(`function(calculateMatrixMultiplication)=> ${error.message}`)
    }
}