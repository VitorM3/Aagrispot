import { SinalCalc } from "../models/enum/sinalCalc";
import { ReferenceValues } from "../models/types/referenceValues";
import { ReturnFindAndDefineCalc } from "../models/types/returnFindAndDefineCalc";
import { realizeCalc } from "./realizeCalc";

/**
 * Função para encontrar e definir as referencias do calculo e executar o respectivo calculo
 * @param sinal Sinal do calculo
 * @param reference Array de referencia dos valores
 * @param accomplished Array com os valores que já foram calculados
 * @param indexCalc Index de onde está o respectivo calculo
 * @param numberLine Número da linha para realizar o calculo
 * @param numberColumn Número da coluna para realizar o calculo
 * @returns Objeto com o array de referencia dos valores, array com os valores que já foram calculados e o valor do calculo
 */
export function findAndDefineCalc(sinal: SinalCalc, reference: ReferenceValues[], 
    accomplished: number[], calc: string[],numberLine:number,numberColumn:number): ReturnFindAndDefineCalc | boolean {
    try {
        // Multiplicação
        const index = calc.findIndex((element) => element == sinal)
        const accomplishedSinal = accomplished.findIndex((element) => element == index)
        if (index != -1 && accomplishedSinal == -1) {
            // Realizar calculo
            const value = realizeCalc(sinal,index,reference,calc,numberLine,numberColumn)
            // Salvar valores na referencia
            reference.push({ index: index - 1, value: value })
            reference.push({ index: index + 1, value: value })
            // Salvar objeto que a multiplicação ja foi feita
            accomplished.push(index)

            return { reference, accomplished, value }
        }else{ return false}
    } catch (error: any) {
        throw new Error(`function (findAndDefineCalc) => ${error.message} `)
    }
}