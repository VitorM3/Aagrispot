"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNewMatrixMultiplication = void 0;
const getNumberMaxOfLineAndColumn_1 = require("../utils/getNumberMaxOfLineAndColumn");
const calculateMatrixMultiplication_1 = require("./calculateMatrixMultiplication");
/**
 * Função para criar uma nova matriz através de uma multiplicação de duas outras
 * @param matrixOne Matriz 1
 * @param matrixTwo Matriz 1
 * @returns Nova Matriz
 */
function calculateNewMatrixMultiplication(matrixOne, matrixTwo) {
    try {
        const numberMaxMatrix = (0, getNumberMaxOfLineAndColumn_1.getNumberMaxOfLineAndColumn)(matrixOne, matrixTwo);
        // Atribuir valores da funções separadas
        let numberMaxLineOne = numberMaxMatrix.numberMaxLineMatrixOne + 1;
        let numberMaxColumnTwo = numberMaxMatrix.numberMaxColumnMatrixTwo + 1;
        // Verificar numero atual das linhas da 
        let atualNumberLineOne = 1;
        let atualNumberColumnTwo = 1;
        // Valores para retornar
        let newMatrix = [];
        while (atualNumberLineOne < numberMaxLineOne && atualNumberColumnTwo < numberMaxColumnTwo) {
            let newValue = (0, calculateMatrixMultiplication_1.calculateMatrixMultiplication)(matrixOne, matrixTwo, atualNumberLineOne, atualNumberColumnTwo);
            newMatrix.push({ order: `a${atualNumberLineOne}${atualNumberColumnTwo}`, value: `${newValue}` });
            // Passar para a proxima linha
            if (atualNumberLineOne != numberMaxLineOne) {
                atualNumberLineOne = atualNumberLineOne + 1;
            }
            // Passar para a proxima coluna
            if (atualNumberLineOne == numberMaxLineOne && atualNumberColumnTwo != numberMaxColumnTwo) {
                atualNumberColumnTwo = atualNumberColumnTwo + 1;
                atualNumberLineOne = 1;
            }
        }
        return newMatrix;
    }
    catch (error) {
        throw new Error(`function(calculateNewMatrixMultiplication)=> ${error.message}`);
    }
}
exports.calculateNewMatrixMultiplication = calculateNewMatrixMultiplication;
