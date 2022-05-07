import { IMatriceBase } from "../models/interface/matriceBase";
import { calculateArrayString } from "./calculateArrayString";

/**
 * Função para criar uma Matriz com as predefinições passadas pelo usuário
 * @param matriceBase Array que recebera a respectiva matriz
 * @param numberLinesAll Número total de linhas
 * @param numberColumnsAll Número total de colunas
 * @param calcArray Array com o calculo para criar a matriz
 */
export const createMatrice = async (matriceBase: IMatriceBase[], numberLinesAll: number, numberColumnsAll: number, calcArray: string[]):Promise<IMatriceBase[]> => {
    
    try {
        // Criar variaveis para contar o numero de linhas que foram executadas
        let numberCalculatedLine = 1
        let numberCalculatedColumn = 1

        // Estrutura de repetição para criar Matriz
        while (numberCalculatedLine < numberLinesAll && numberCalculatedColumn < numberColumnsAll) {
            // Função para executar calcular a respectiva matriz
 
            let valueInMatrice = await calculateArrayString(calcArray,numberCalculatedLine,numberCalculatedColumn)
            matriceBase.push({ order: `a${numberCalculatedLine}${numberCalculatedColumn}`, value: valueInMatrice })
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
        return matriceBase
    } catch (error:any) {
        throw new Error(`function (createMatrice) => ${error.message}`)
    }
}