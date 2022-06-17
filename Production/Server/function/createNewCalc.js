"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewCalc = void 0;
/**
 * Função para criar contador para executar os calculos em ordem de prioridade
 * @param calcArray Array com o calculo
 * @returns Contador com a quantidade de calculos que serão executados
 */
const createNewCalc = (calcArray) => {
    try {
        let qtdCalc = 0;
        // Procurar caracteres referentes aos calculos para adicionar ao contador
        calcArray.forEach((element) => {
            if (element == '*' || element == '/' || element == '+' || element == '-' || element == '(') {
                qtdCalc = qtdCalc + 1;
            }
        });
        return qtdCalc;
    }
    catch (error) {
        throw new Error(`function (createNewCalc) => ${error.message}`);
    }
};
exports.createNewCalc = createNewCalc;
