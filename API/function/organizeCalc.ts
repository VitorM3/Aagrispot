import { ReferenceValues } from "../models/types/referenceValues"

/**
 * Função para organizar o respectivo calculo e executar em ordem de prioridade
 * @param qtdCalc Quantidade de vezes que irá realizar o calculo
 * @param calcArray Array com o calculo
 */
export const organizeCalc = (qtdCalc: number, calcArray: string[]) => {
    try {
        // Variaveis a serem utilizadas fora da estrutura de repetição
        let referenceValues: ReferenceValues[] = []
        let accomplished: number[] = []
        let repeat = 0
        let value = 0

        // Estrutura de repetição para executar o calculo
        while (repeat != qtdCalc) {
            // Executar as funções pela ordem de prioridade
            // Multiplicação
            const indexMultiplication = calcArray.findIndex((element) => element == '*')
            const accomplishedMultiplication = accomplished.findIndex((element) => element == indexMultiplication)
            // Verificar se o calculo ja foi executado
            if (indexMultiplication != -1 && accomplishedMultiplication == -1) {
                // Realizar calculo
                const value = 0
                // Salvar valores na referencia
                referenceValues.push({ index: indexMultiplication - 1, value: value })
                referenceValues.push({ index: indexMultiplication + 1, value: value })
                // Salvar objeto que a multiplicação ja foi feita
                accomplished.push(indexMultiplication)
                repeat = repeat + 1
            } else {
                // Divisão
            }
        }
        return value

    } catch (error: any) {
        throw new Error(`function (organizeCalc) => ${error.message}`)
    }
}