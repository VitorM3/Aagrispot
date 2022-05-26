import { IMatrixBase } from "../models/interface/matrixBase";
import { calculateArrayString } from "./calculateArrayString";

/**
 * Função para criar uma Matriz com as predefinições passadas pelo usuário
 * @param matrixBase Array que recebera a respectiva matriz
 * @param numberLinesAll Número total de linhas
 * @param numberColumnsAll Número total de colunas
 * @param calcArray Array com o calculo para criar a matriz
 */
export const createMatrix = async (matrixBase: IMatrixBase[], numberLinesAll: number, numberColumnsAll: number, calcArray: string[]):Promise<IMatrixBase[]> => {
    
    try {
        // Criar variaveis para contar o numero de linhas que foram executadas
        let numberCalculatedLine = 1
        let numberCalculatedColumn = 1

        // Estrutura de repetição para criar Matriz
        while (numberCalculatedLine < numberLinesAll && numberCalculatedColumn < numberColumnsAll) {
            // Função para executar calcular a respectiva matriz
 
            let valueInMatrix = await calculateArrayString(calcArray,numberCalculatedLine,numberCalculatedColumn)
            matrixBase.push({ order: `a${numberCalculatedLine}${numberCalculatedColumn}`, value: `${valueInMatrix}` })
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
    } catch (error:any) {
        throw new Error(`function (createMatrix) => ${error.message}`)
    }
}