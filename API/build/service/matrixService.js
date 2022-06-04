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
exports.MatrixService = void 0;
const calculateMatrixSum_1 = require("../function/calculateMatrixSum");
const calculateNewMatrixMultiplication_1 = require("../function/calculateNewMatrixMultiplication");
const createMatrix_1 = require("../function/createMatrix");
const getNumberMaxOfLineAndColumn_1 = require("../utils/getNumberMaxOfLineAndColumn");
const refineArray_1 = require("../utils/refineArray");
/**
 * Serviços para manipular e realizar funções das matrizes
 */
class MatrixService {
    /**
     * Serviço para criar uma matriz com as predefinições passadas pelo usuário
     * @param predefinitionsMatrix predefinições passadas pelo usuário
     */
    create(predefinitionsMatrix) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Separar objeto vindo do controller
                let numberLines = predefinitionsMatrix.numLines;
                let numberColumns = predefinitionsMatrix.numColumn;
                let calcString = predefinitionsMatrix.calc;
                // Adicionar mais 1 no número de linhas e de colunas
                numberLines = numberLines + 1;
                numberColumns = numberColumns + 1;
                // Criar Array com a string do calculo
                const calcArray = calcString.split('');
                let newArrayCalc = yield (0, refineArray_1.refineArray)(' ', calcArray);
                // Criar Objeto da matriz
                let matrice = [];
                matrice = yield (0, createMatrix_1.createMatrix)(matrice, numberLines, numberColumns, newArrayCalc);
                return matrice;
            }
            catch (error) {
                throw new Error(`Service (create) => ${error.message}`);
            }
        });
    }
    /**
     * Serviço para calcular uma matriz com base nas duas passadas para a operação
     * @param baseToCreateANewMatrix Base do calculo
     */
    calculate(baseToCreateANewMatrix) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const numberMaxMatrix = (0, getNumberMaxOfLineAndColumn_1.getNumberMaxOfLineAndColumn)(baseToCreateANewMatrix.matrixOne, baseToCreateANewMatrix.matrixTwo);
                // Atribuir valores da funções separadas
                let numberMaxColumnOne = numberMaxMatrix.numberMaxColumnnMatrixOne;
                let numberMaxLineOne = numberMaxMatrix.numberMaxLineMatrixOne;
                let numberMaxLineTwo = numberMaxMatrix.numberMaxLineMatrixTwo;
                let numberMaxColumnTwo = numberMaxMatrix.numberMaxColumnMatrixTwo;
                let newMatrix = [];
                // Verificar sinal passado para executar funções especificas de cada sinal
                switch (baseToCreateANewMatrix.sinalOperation) {
                    case "+":
                        if (numberMaxColumnOne != numberMaxColumnTwo && numberMaxLineOne != numberMaxLineTwo) {
                            const errorClient = { messageErrorClient: 'Arrays must have the same order', status: 406 };
                            return errorClient;
                        }
                        newMatrix = yield (0, calculateMatrixSum_1.calculateNewMatrixSumOrSubtracion)(baseToCreateANewMatrix.matrixOne, baseToCreateANewMatrix.matrixTwo, baseToCreateANewMatrix.sinalOperation);
                        return newMatrix;
                    case "-":
                        if (numberMaxColumnOne != numberMaxColumnTwo && numberMaxLineOne != numberMaxLineTwo) {
                            const errorClient = { messageErrorClient: 'Arrays must have the same order', status: 406 };
                            return errorClient;
                        }
                        newMatrix = yield (0, calculateMatrixSum_1.calculateNewMatrixSumOrSubtracion)(baseToCreateANewMatrix.matrixOne, baseToCreateANewMatrix.matrixTwo, baseToCreateANewMatrix.sinalOperation);
                        return newMatrix;
                    case "*":
                        if (numberMaxLineOne != numberMaxColumnTwo) {
                            const errorClient = { messageErrorClient: 'The number of rows in matrix 1 must be equal to the number of columns in matrix 2', status: 406 };
                            return errorClient;
                        }
                        newMatrix = yield (0, calculateNewMatrixMultiplication_1.calculateNewMatrixMultiplication)(baseToCreateANewMatrix.matrixOne, baseToCreateANewMatrix.matrixTwo);
                        return newMatrix;
                        break;
                    default:
                        const errorClient = { messageErrorClient: 'Sinal to operation is invalid', status: 406 };
                        return errorClient;
                }
            }
            catch (error) {
                throw new Error(`Service (calculate) => ${error.message}`);
            }
        });
    }
}
exports.MatrixService = MatrixService;
