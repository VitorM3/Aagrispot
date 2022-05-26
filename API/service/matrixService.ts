import { calculateNewMatrixSumOrSubtracion } from "../function/calculateMatrixSum";
import { calculateNewMatrixMultiplication } from "../function/calculateNewMatrixMultiplication";
import { createMatrix } from "../function/createMatrix";
import { IErrorClient } from "../models/interface/errorClient";
import { IMatrixBase } from "../models/interface/matrixBase";
import { IBodyCalculate } from "../models/interface/routes/matrixs/bodyCalculate";
import { IBodyCreate } from "../models/interface/routes/matrixs/bodyCreate";
import { getNumberMaxOfLineAndColumn } from "../utils/getNumberMaxOfLineAndColumn";
import { refineArray } from "../utils/refineArray";

/**
 * Serviços para manipular e realizar funções das matrizes
 */
export class MatrixSerice {
    /**
     * Serviço para criar uma matriz com as predefinições passadas pelo usuário
     * @param predefinitionsMatrix predefinições passadas pelo usuário
     */
    async create(predefinitionsMatrix: IBodyCreate): Promise<IMatrixBase[]> {
        try {
            // Separar objeto vindo do controller
            let numberLines = predefinitionsMatrix.numLines
            let numberColumns = predefinitionsMatrix.numColumn
            let calcString = predefinitionsMatrix.calc

            // Adicionar mais 1 no número de linhas e de colunas
            numberLines = numberLines + 1
            numberColumns = numberColumns + 1

            // Criar Array com a string do calculo
            const calcArray = calcString.split('')

            let newArrayCalc = await refineArray(' ', calcArray)

            // Criar Objeto da matriz
            let matrice: IMatrixBase[] = []

            matrice = await createMatrix(matrice, numberLines, numberColumns, newArrayCalc)

            return matrice

        } catch (error: any) {
            throw new Error(`Service (create) => ${error.message}`)
        }
    }
    /**
     * Serviço para calcular uma matriz com base nas duas passadas para a operação
     * @param baseToCreateANewMatrix Base do calculo
     */
    async calculate(baseToCreateANewMatrix: IBodyCalculate): Promise<IMatrixBase[] | IErrorClient> {
        try {
            const numberMaxMatrix = getNumberMaxOfLineAndColumn(baseToCreateANewMatrix.matrixOne, baseToCreateANewMatrix.matrixTwo)
            // Atribuir valores da funções separadas
            let numberMaxColumnOne = numberMaxMatrix.numberMaxColumnnMatrixOne
            let numberMaxLineOne = numberMaxMatrix.numberMaxLineMatrixOne
            let numberMaxLineTwo = numberMaxMatrix.numberMaxLineMatrixTwo
            let numberMaxColumnTwo = numberMaxMatrix.numberMaxColumnMatrixTwo

            let newMatrix: IMatrixBase[] = []
            // Verificar sinal passado para executar funções especificas de cada sinal
            switch (baseToCreateANewMatrix.sinalOperation) {
                case "+":
                    if (numberMaxColumnOne != numberMaxColumnTwo && numberMaxLineOne != numberMaxLineTwo) {
                        const errorClient: IErrorClient = { messageErrorClient: 'Arrays must have the same order', status: 406 }; return errorClient
                    }
                    newMatrix = await calculateNewMatrixSumOrSubtracion(baseToCreateANewMatrix.matrixOne, baseToCreateANewMatrix.matrixTwo, baseToCreateANewMatrix.sinalOperation)
                    return newMatrix
                case "-":
                    if (numberMaxColumnOne != numberMaxColumnTwo && numberMaxLineOne != numberMaxLineTwo) {
                        const errorClient: IErrorClient = { messageErrorClient: 'Arrays must have the same order', status: 406 }; return errorClient
                    }
                    newMatrix = await calculateNewMatrixSumOrSubtracion(baseToCreateANewMatrix.matrixOne, baseToCreateANewMatrix.matrixTwo, baseToCreateANewMatrix.sinalOperation)
                    return newMatrix
                case "*":
                    if (numberMaxLineOne != numberMaxColumnTwo) {
                        const errorClient: IErrorClient = { messageErrorClient: 'The number of rows in matrix 1 must be equal to the number of columns in matrix 2', status: 406 }; return errorClient
                    }
                    newMatrix = await calculateNewMatrixMultiplication(baseToCreateANewMatrix.matrixOne, baseToCreateANewMatrix.matrixTwo)
                    return newMatrix
                    break;

                default:
                    const errorClient: IErrorClient = { messageErrorClient: 'Sinal to operation is invalid', status: 406 }; return errorClient
            }

        } catch (error: any) {
            throw new Error(`Service (calculate) => ${error.message}`)
        }

    }
}