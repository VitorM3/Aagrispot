"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateMatrixMultiplication = void 0;
const sinalCalc_1 = require("../models/enum/sinalCalc");
const calculate_1 = require("../utils/calculate");
const getNumberMaxOfLineAndColumn_1 = require("../utils/getNumberMaxOfLineAndColumn");
/**
 * Função para calcular a multiplicação de duas matrizes
 * @param matrixOne Matriz 1
 * @param matrixTwo Matriz 2
 * @param numberLine Numero da linha da matriz 1
 * @param numberColumn Numero da coluna da matriz 2
 * @returns Valor da multiplicação
 */
function calculateMatrixMultiplication(matrixOne, matrixTwo, numberLine, numberColumn) {
    try {
        const numberMaxMatrix = (0, getNumberMaxOfLineAndColumn_1.getNumberMaxOfLineAndColumn)(matrixOne, matrixTwo);
        // Atribuir valores da funções separadas
        let numberMaxColumnOne = numberMaxMatrix.numberMaxColumnnMatrixOne;
        let numberMaxLineTwo = numberMaxMatrix.numberMaxLineMatrixTwo;
        // Verificar numero atual das linhas da 
        let atualNumberColumnOne = 1;
        let atualNumberLineTwo = 1;
        // Valores para retornar
        let newValueInMatrix = [];
        while (atualNumberColumnOne < numberMaxColumnOne + 1 && atualNumberLineTwo < numberMaxLineTwo + 1) {
            // Encontrar valores dentro das matrizes
            let valueMatrixOne = matrixOne.find((matrix) => matrix.order == `a${numberLine}${atualNumberColumnOne}`);
            let valueMatrixTwo = matrixTwo.find((matrix) => matrix.order == `a${atualNumberLineTwo}${numberColumn}`);
            // Calcular valores
            let newValueInArray = (0, calculate_1.calculate)(sinalCalc_1.SinalCalc.Multipli, parseFloat(valueMatrixOne.value), parseFloat(valueMatrixTwo.value));
            // Atribuir valores para o array onde será realizado o calculo futuramente
            newValueInMatrix.push(newValueInArray);
            atualNumberColumnOne++;
            atualNumberLineTwo++;
        }
        // Somar os elementos do array onde estão guardados os valores das multiplicações
        let newValue = 0;
        newValueInMatrix.forEach((value) => {
            newValue = newValue + value;
        });
        return newValue;
    }
    catch (error) {
        throw new Error(`function(calculateMatrixMultiplication)=> ${error.message}`);
    }
}
exports.calculateMatrixMultiplication = calculateMatrixMultiplication;
