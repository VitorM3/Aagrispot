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
exports.createMatrice = void 0;
const calculateArrayString_1 = require("./calculateArrayString");
/**
 * Função para criar uma Matriz com as predefinições passadas pelo usuário
 * @param matriceBase Array que recebera a respectiva matriz
 * @param numberLinesAll Número total de linhas
 * @param numberColumnsAll Número total de colunas
 * @param calcArray Array com o calculo para criar a matriz
 */
const createMatrice = (matriceBase, numberLinesAll, numberColumnsAll, calcArray) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Criar variaveis para contar o numero de linhas que foram executadas
        let numberCalculatedLine = 1;
        let numberCalculatedColumn = 1;
        // Estrutura de repetição para criar Matriz
        while (numberCalculatedLine < numberLinesAll && numberCalculatedColumn < numberColumnsAll) {
            // Função para executar calcular a respectiva matriz
            let valueInMatrice = yield (0, calculateArrayString_1.calculateArrayString)(calcArray, numberCalculatedLine, numberCalculatedColumn);
            matriceBase.push({ order: `a${numberCalculatedLine}${numberCalculatedColumn}`, value: valueInMatrice });
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
        return matriceBase;
    }
    catch (error) {
        throw new Error(`function (createMatrice) => ${error.message}`);
    }
});
exports.createMatrice = createMatrice;
