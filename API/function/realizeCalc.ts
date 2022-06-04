import { SinalCalc } from "../models/enum/sinalCalc"
import { ReferenceValues } from "../models/types/referenceValues"
import { calculate } from "../utils/calculate"
/**
 * Função para realizar o calculo de uma matriz
 * @param sinal Sinal do calculo
 * @param index Index do elemento
 * @param reference Array de referencia para guardar os valores
 * @param calcArray Array com o calculo da matriz
 * @param numberLine Número da linha
 * @param numberColumn Número da coluna
 * @returns Valor do calculo
 */
export function realizeCalc(sinal: SinalCalc, index: number,
    reference: ReferenceValues[], calcArray: string[], numberLine: number, numberColumn: number): number {
    try {
        let elementOne = 999999
        let elementTwo = 999999
        // Atribuir valores corretamente
        // Verificar o elemento anterior a soma
        if (calcArray[index - 1] === 'i') {
            elementOne = numberLine
        } else if (calcArray[index - 1] === 'j') {
            elementOne = numberColumn
        } else {
            elementOne = parseInt(calcArray[index - 1])
        }
        // Verificar o proximo elemento depois da soma
        if (calcArray[index + 1] === 'i') {
            elementTwo = numberLine
        }
        else if (calcArray[index + 1] === 'j') {
            elementTwo = numberColumn
        } else {
            elementTwo = parseInt(calcArray[index + 1])
        }
        // Verificar se algum desses elementos é um número
        // Verificar se o elemento 1 foi calculado
        let indexElementOne = reference.findIndex((values) => values.index == index - 1)
        // Verificar qual foi o resultado
        if (indexElementOne != -1) {
            elementOne = reference[indexElementOne].value
        }
        // Verificar se o elemento 2 foi calculado
        let indexElementTwo = reference.findIndex((values) => values.index == index + 1)
        // Verificar o resultado
        if (indexElementTwo != -1) {
            elementTwo = reference[indexElementTwo].value
        }
        // Realizar calculo
        let value = calculate(sinal, elementOne, elementTwo)

        if(value == undefined){throw new Error(`Valor vindo do calculo está undefined`)}
        return value
    } catch (error:any) {
        throw new Error(`function (realizeCalc) => ${error.message} `)
    }

}