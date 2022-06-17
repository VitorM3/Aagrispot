"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNewMatrixSumOrSubtraction = void 0;
const calculateMatrix_1 = require("./calculateMatrix");
const getNumberMaxOfLineAndColumn_1 = require("../utils/getNumberMaxOfLineAndColumn");
/**
 * Função para criar uma nova matriz com base no calculo de soma ou de subtração
 * @param matrixOne Matriz 1
 * @param matrixTwo Matriz 2
 * @param sinal Sinal da operação
 * @returns Novo valor
 */
function calculateNewMatrixSumOrSubtraction(matrixOne, matrixTwo, sinal) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const numberMaxMatrix = (0, getNumberMaxOfLineAndColumn_1.getNumberMaxOfLineAndColumn)(matrixOne);
            // Atribuir valores da funções separadas
            let numberMaxColumnOne = numberMaxMatrix.numberMaxColumnnMatrixOne;
            let numberMaxLineOne = numberMaxMatrix.numberMaxLineMatrixOne;
            // Somar matrizes
            // Criar variaveis para contar o numero de linhas que foram executadas
            let numberCalculatedLine = 1;
            let numberCalculatedColumn = 1;
            let matrixBase = [];
            let numberLinesAll = numberMaxLineOne + 1;
            let numberColumnsAll = numberMaxColumnOne + 1;
            // Estrutura de repetição para criar Matriz
            while (numberCalculatedLine < numberLinesAll && numberCalculatedColumn < numberColumnsAll) {
                // Função para executar calcular a respectiva matriz
                let newOrder = `a${numberCalculatedLine}${numberCalculatedColumn}`;
                let valueInMatrix = (0, calculateMatrix_1.calculateMatrixSumOrSubtraction)(matrixOne, matrixTwo, sinal, newOrder);
                matrixBase.push({ order: newOrder, value: `${valueInMatrix}` });
                // Passar para a proxima linha
                if (numberCalculatedLine != numberLinesAll) {
                    numberCalculatedLine = numberCalculatedLine + 1;
                }
                // Passar para a proxima coluna
                if (numberCalculatedLine == numberLinesAll && numberCalculatedColumn != numberColumnsAll) {
                    numberCalculatedColumn = numberCalculatedColumn + 1;
                    numberCalculatedLine = 1;
                }
            }
            return matrixBase;
        }
        catch (error) {
            throw new Error(`function (calculateMatrixSum) => ${error.message} `);
        }
    });
}
exports.calculateNewMatrixSumOrSubtraction = calculateNewMatrixSumOrSubtraction;
