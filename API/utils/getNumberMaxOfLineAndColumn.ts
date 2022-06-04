
import { IMatrixBase } from "../models/interface/matrixBase";
import { ReturnGetNumberMaxOfLineAndColumn } from "../models/types/returnGetNumberMaxOfLineAndColumn";
/**
 * Função para pegar o numero maximo de linhas e colunas de uma ou duas matrizes
 * @param matrixOne Matriz um
 * @param matrixTwo Matriz dois (Opcional)
 * @returns Retorna um objeto com os valores
 */
export function getNumberMaxOfLineAndColumn(matrixOne: IMatrixBase[], matrixTwo?: IMatrixBase[]):ReturnGetNumberMaxOfLineAndColumn {
    try {
        // Transformar o ultimo elemento da matriz 1 para verificar o numero maximo de colunas
        let numberMaxLineOne = matrixOne[matrixOne.length - 1].order.split('')[1]
        let numberMaxColumnOne = matrixOne[matrixOne.length - 1].order.split('')[2]

        // Transformar o ultimo elemento da matriz 2 para verificar o numero maximo de colunas
        let numberMaxColumnTwo = ''
        let numberMaxLineTwo = ''
        if (matrixTwo != undefined) {
            numberMaxColumnTwo = matrixTwo[matrixTwo.length - 1].order.split('')[2]
            numberMaxLineTwo = matrixTwo[matrixTwo.length - 1].order.split('')[1]
        }
        // Retornar valores calculados
        if(matrixTwo != undefined){
            return {
                numberMaxLineMatrixOne:parseInt(numberMaxLineOne),
                numberMaxColumnnMatrixOne:parseInt(numberMaxColumnOne),
                numberMaxColumnMatrixTwo:parseInt(numberMaxColumnTwo),
                numberMaxLineMatrixTwo:parseInt(numberMaxLineTwo)
            }
        }else{
            return {
                numberMaxLineMatrixOne:parseInt(numberMaxLineOne),
                numberMaxColumnnMatrixOne:parseInt(numberMaxColumnOne)
            }
        }
    } catch (error:any) {
        throw new  Error(`function (getNumberMaxOfLineAndColumn) => ${error.message}`)
    }
}