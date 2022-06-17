"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMatrixSumOrSubtraction = void 0;
const calculate_1 = require("../utils/calculate");
/**
 * Calcular a soma ou a subtração de matrizes
 * @param matrixOne Matrix 1
 * @param matrixTwo Matrix 2
 * @param sinal Sinal da operação
 * @param order Ordem da respectiva matriz
 * @returns Novo valor
 */
function calculateMatrixSumOrSubtraction(matrixOne, matrixTwo, sinal, order) {
    try {
        // Procurar objeto com a ordem passada
        let elementOfOrderOne = matrixOne.find((matrix) => matrix.order == order);
        let elementOfOrderTwo = matrixTwo.find((matrix) => matrix.order == order);
        // Verificar se a ordem passada é valida
        if (elementOfOrderOne == undefined || elementOfOrderTwo == undefined) {
            throw new Error('Matrix is invalid');
        }
        // Calcular valores
        let newValue = (0, calculate_1.calculate)(sinal, parseInt(elementOfOrderOne === null || elementOfOrderOne === void 0 ? void 0 : elementOfOrderOne.value), parseInt(elementOfOrderTwo === null || elementOfOrderTwo === void 0 ? void 0 : elementOfOrderTwo.value));
        if (newValue == undefined) {
            throw new Error('Calc is invalid');
        }
        return newValue;
    }
    catch (error) {
        throw new Error(`function(calculateMatrix) => ${error.message}`);
    }
}
exports.calculateMatrixSumOrSubtraction = calculateMatrixSumOrSubtraction;
