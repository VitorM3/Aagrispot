"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndDefineCalc = void 0;
const realizeCalc_1 = require("./realizeCalc");
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
function findAndDefineCalc(sinal, reference, accomplished, calc, numberLine, numberColumn) {
    try {
        // const index = calc.findIndex((element) => element == sinal)
        // const accomplishedSinal = accomplished.findIndex((element) => element == index)
        let newindex;
        calc.forEach((element, index) => {
            if (element == sinal && !accomplished.includes(index)) {
                newindex = index;
            }
        });
        if (newindex != undefined) {
            // Realizar calculo
            const value = (0, realizeCalc_1.realizeCalc)(sinal, newindex, reference, calc, numberLine, numberColumn);
            // Salvar valores na referencia
            reference.push({ index: newindex - 1, value: value });
            reference.push({ index: newindex + 1, value: value });
            // Salvar objeto que a multiplicação ja foi feita
            accomplished.push(newindex);
            return { reference, accomplished, value };
        }
        else {
            return false;
        }
    }
    catch (error) {
        throw new Error(`function (findAndDefineCalc) => ${error.message} `);
    }
}
exports.findAndDefineCalc = findAndDefineCalc;
