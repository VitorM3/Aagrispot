import { SinalCalc } from "../models/enum/sinalCalc"
import { ReferenceValues } from "../models/types/referenceValues"
import { ReturnFindAndDefineCalc } from "../models/types/returnFindAndDefineCalc"
import { calculateParentheses } from "./calculateParentheses"
import { findAndDefineCalc } from "./findAndDefineCalc"

/**
 * Função para organizar o respectivo calculo e executar em ordem de prioridade
 * @param qtdCalc Quantidade de vezes que irá realizar o calculo
 * @param calcArray Array com o calculo
 */
export const organizeCalc = async (qtdCalc: number, calcArray: string[], numberLine: number, numberColumn: number): Promise<number> => {
    try {
        // Variaveis a serem utilizadas fora da estrutura de repetição
        let referenceValues: ReferenceValues[] = []
        let accomplished: number[] = []
        let repeat = 0
        let value = 0

        // Estrutura de repetição para executar o calculo
        while (repeat != qtdCalc) {
            // Executar as funções pela ordem de prioridade
            // Parenteses
            const indexParenthesesBegin = calcArray.findIndex((element) => element == '(')
            const indexParenthesesAccomplished = accomplished.findIndex((indexArray) => indexArray == indexParenthesesBegin)
            if (indexParenthesesBegin != -1 && indexParenthesesAccomplished == -1) {
                const objCalc = await calculateParentheses(qtdCalc, calcArray, indexParenthesesBegin, referenceValues, accomplished, numberLine, numberColumn)
                referenceValues = objCalc.reference
                accomplished = objCalc.accomplished
                value = objCalc.value
                qtdCalc = qtdCalc - objCalc.newQtd
                repeat = repeat + 1
            } else {
                // Multiplicação
                const objCalc: ReturnFindAndDefineCalc | boolean = findAndDefineCalc(SinalCalc.Multipli,
                    referenceValues,
                    accomplished,
                    calcArray,
                    numberLine,
                    numberColumn)
                if (typeof objCalc != "boolean") {
                    // Atribuir valores
                    
                    referenceValues = objCalc.reference
                    accomplished = objCalc.accomplished
                    value = objCalc.value
                    
                    repeat = repeat + 1
                }
                else {
                    // Divisão
                    const objCalc: ReturnFindAndDefineCalc | boolean = findAndDefineCalc(SinalCalc.Division,
                        referenceValues,
                        accomplished,
                        calcArray,
                        numberLine,
                        numberColumn)

                    if (typeof objCalc != "boolean") {
                        // Atribuir valores
                        referenceValues = objCalc.reference
                        accomplished = objCalc.accomplished
                        value = objCalc.value
                        repeat = repeat + 1
                    } else {
                        // Soma
                        const objCalc: ReturnFindAndDefineCalc | boolean = findAndDefineCalc(SinalCalc.Sum,
                            referenceValues,
                            accomplished,
                            calcArray,
                            numberLine,
                            numberColumn)

                        if (typeof objCalc != "boolean") {
                            // Atribuir valores
                            referenceValues = objCalc.reference
                            accomplished = objCalc.accomplished
                            value = objCalc.value
                            repeat = repeat + 1
                        } else {
                            // Subtração
                            const objCalc: ReturnFindAndDefineCalc | boolean = findAndDefineCalc(SinalCalc.Subtracion,
                                referenceValues,
                                accomplished,
                                calcArray,
                                numberLine,
                                numberColumn)

                            if (typeof objCalc != "boolean") {
                                // Atribuir valores
                                referenceValues = objCalc.reference
                                accomplished = objCalc.accomplished
                                value = objCalc.value
                                repeat = repeat + 1
                            } else { repeat = repeat + 1 }
                        }
                    }

                }
            }




        }
        
        return value

    } catch (error: any) {
        throw new Error(`function (organizeCalc) => ${error.message}`)
    }
}