import { createMatrice } from "../function/createMatrice";
import { IMatriceBase } from "../models/interface/matriceBase";
import { IBodyCreate } from "../models/interface/routes/matrices/bodyCreate";
import { refineArray } from "../utils/refineArray";

/**
 * Serviços para manipular e realizar funções das matrizes
 */
export class MatriceSerice{
    /**
     * Serviço para criar uma matriz com as predefinições passadas pelo usuário
     * @param predefinitionsMatrice predefinições passadas pelo usuário
     */
    async create(predefinitionsMatrice:IBodyCreate){
        try {
            // Separar objeto vindo do controller
            let numberLines = predefinitionsMatrice.numLines
            let numberColumns = predefinitionsMatrice.numColumn
            let calcString = predefinitionsMatrice.calc

            // Adicionar mais 1 no número de linhas e de colunas
            numberLines = numberLines + 1
            numberColumns = numberColumns + 1

            // Criar Array com a string do calculo
            const calcArray = calcString.split('')

            let newArrayCalc = await refineArray(' ',calcArray)
            
            // Criar Objeto da matriz
            let matrice:IMatriceBase[] = []

            matrice = await createMatrice(matrice,numberLines,numberColumns,newArrayCalc)
            
        } catch (error:any) {
            throw new Error(`Service (create) => ${error.message}`)
        }
    }
}