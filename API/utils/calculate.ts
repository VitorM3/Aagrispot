import { SinalCalc } from "../models/enum/sinalCalc";

/**
 * Função para realizar um calculo simples entre dois valores
 * @param sinal Sinal do calculo
 * @param value1 Primeiro valor
 * @param value2 Segundo valor
 * @returns Resultado
 */
export function calculate(sinal: SinalCalc, value1: number, value2: number) {
    try {
        switch (sinal) {
            case "+":
                // Realizar calculo
                let sum = value1 + value2
                return sum
                break;
            case "-":
                // Realizar calculo
                let subtraction = value1 - value2
                return subtraction
                break;
            case "/":
                // Realizar calculo
                let division = value1 / value2
                return division
                break;
            case "*":
                // Realizar calculo
                let multiplication = value1 * value2
                return multiplication
                break;
            default:
                break;
        }
    } catch (error:any) {
        throw new Error(`utils (calculate) => ${error.message}`)
    }
}