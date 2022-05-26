import { SinalCalc } from "../models/enum/sinalCalc";
import { IMatrixBase } from "../models/interface/matrixBase";
import { calculateMatrixSumOrSubtracion } from "./calculateMatrix";
import { IErrorClient } from '../models/interface/errorClient'
import { getNumberMaxOfLineAndColumn } from "../utils/getNumberMaxOfLineAndColumn";
/**
 * Função para criar uma nova matriz com base no calculo de soma ou de subtração
 * @param matrixOne Matriz 1
 * @param matrixTwo Matriz 2
 * @param sinal Sinal da operação
 * @returns Novo valor
 */
export async function calculateNewMatrixSumOrSubtracion(matrixOne: IMatrixBase[], matrixTwo: IMatrixBase[], sinal: SinalCalc): Promise<IMatrixBase[]> {
    try {

        const numberMaxMatrix = getNumberMaxOfLineAndColumn(matrixOne)
        // Atribuir valores da funções separadas
        let numberMaxColumnOne = numberMaxMatrix.numberMaxColumnnMatrixOne
        let numberMaxLineOne = numberMaxMatrix.numberMaxLineMatrixOne

        // Somar matrizes
        // Criar variaveis para contar o numero de linhas que foram executadas
        let numberCalculatedLine = 1
        let numberCalculatedColumn = 1
        let matrixBase: IMatrixBase[] = []
        let numberLinesAll = numberMaxLineOne + 1
        let numberColumnsAll = numberMaxColumnOne + 1

        // Estrutura de repetição para criar Matriz
        while (numberCalculatedLine < numberLinesAll && numberCalculatedColumn < numberColumnsAll) {

            // Função para executar calcular a respectiva matriz
            let newOrder = `a${numberCalculatedLine}${numberCalculatedColumn}`
            let valueInMatrix = calculateMatrixSumOrSubtracion(matrixOne, matrixTwo, sinal, newOrder)
            console.log(valueInMatrix)
            matrixBase.push({ order: newOrder, value: `${valueInMatrix}` })
            // Passar para a proxima linha
            if (numberCalculatedLine != numberLinesAll) {
                numberCalculatedLine = numberCalculatedLine + 1
            }
            // Passar para a proxima coluna
            if (numberCalculatedLine == numberLinesAll && numberCalculatedColumn != numberColumnsAll) {
                numberCalculatedColumn = numberCalculatedColumn + 1
                numberCalculatedLine = 1
            }
        }
        return matrixBase
    } catch (error: any) {

        throw new Error(`function (calculateMatrixSum) => ${error.message} `)
    }

}