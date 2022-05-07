/**
 * Função para criar contador para executar os calculos em ordem de prioridade
 * @param calcArray Array com o calculo
 * @returns Contador com a quantidade de calculos que serão executados
 */
export const createNewCalc = (calcArray: string[]):number => {
    
    try {
        let qtdCalc = 0
        // Procurar caracteres referentes aos calculos para adicionar ao contador
        calcArray.forEach((element) => {
            if (element == '*' || element == '/' || element == '+' || element == '-' || element == '(') {
                qtdCalc = qtdCalc + 1
            }
        })
        return qtdCalc
    } catch (error:any) {
        throw new Error(`function (createNewCalc) => ${error.message}`)
    }

}