import { ReferenceValues } from "../models/types/referenceValues"
import { ReturnCalculateParentheses } from "../models/types/returnCalculateParentheses"
import { ReturnFindAndDefineCalc } from "../models/types/returnFindAndDefineCalc"
import { refineArray } from "../utils/refineArray"
import { createNewCalc } from "./createNewCalc"
import { organizeCalc } from "./organizeCalc"

export async function calculateParentheses(qtd: number, calcArray: string[], 
    indexParentheses: number, 
    reference: ReferenceValues[], 
    accomplished: number[],
    numberLine:number,
    numberColumn:number):Promise<ReturnCalculateParentheses>     {
    try {
        // Procurar o final do parenteses
        let indexParanthesesEnd = calcArray.findIndex((element) => element == ")")
       
        if (indexParanthesesEnd == -1) { throw new Error('Não foi possivel achar o final da expressão') }
        
        // Criar um array apenas com os objetos da expressão
        let newArrayCalcParentheses = calcArray.map((element, index) => {
            if (index < indexParanthesesEnd && element != "(" && element != ")") {
                return element
            } else { return ' ' }
        })
        
        
        // Refinar array e deixar apenas os valores necessários
        newArrayCalcParentheses = await refineArray(' ', newArrayCalcParentheses)
        // NOTA=> Por motivos que desconheço o ultimo elemento com ' ' não é retirado, por isso irei retirar este na mão
        // mas se você achar uma maneira melhor de fazer está ação, por favor resolva está "gambiarra".

        // Retirar ultimo ellemento com ' '
        let indexBug = newArrayCalcParentheses.findIndex((element)=>element == ' ')
        if(indexBug != -1){
            newArrayCalcParentheses.splice(indexBug,1)
        }
        // Realizar calculo
        let newQtd = createNewCalc(newArrayCalcParentheses)
        let value = await organizeCalc(newQtd,newArrayCalcParentheses,numberLine,numberColumn)

        // Salvar valores na referencia
        reference.push({ index: indexParentheses, value: value })
        reference.push({ index: indexParanthesesEnd, value: value })
        // Salvar objeto que a multiplicação ja foi feita
        accomplished.push(indexParentheses)

        // Retornar valores
        return{accomplished,reference,value,newQtd}
        
    } catch (error: any) {
        throw new Error(`function (calculateParentheses) => ${error.message}`)
    }
}