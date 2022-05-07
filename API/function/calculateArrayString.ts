import { createNewCalc } from "./createNewCalc"
import { organizeCalc } from "./organizeCalc"

/**
 * Função para calcular o array com o respectivo calculo
 * @param calcString Array com o respectivo calculo
 * @param numberLine Número da respectiva linha
 * @param numberColumn Número da respectiva coluna
 * @returns Valor do elemento da matriz
 */
export const calculateArrayString = async (calcString: string[],numberLine:number,numberColumn:number): Promise<number> => {
    
    try {
        // Criar contador do calculo
        let qtd = createNewCalc(calcString)
        // Executar calculo
        let value = organizeCalc(qtd,calcString,numberLine,numberColumn)

        
        return value
    } catch (error:any) {
        throw new Error(`function (calculateArrayString) => ${error.message}`)
    }

}