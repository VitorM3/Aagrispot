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
exports.calculateArrayString = void 0;
const createNewCalc_1 = require("./createNewCalc");
const organizeCalc_1 = require("./organizeCalc");
/**
 * Função para calcular o array com o respectivo calculo
 * @param calcString Array com o respectivo calculo
 * @param numberLine Número da respectiva linha
 * @param numberColumn Número da respectiva coluna
 * @returns Valor do elemento da matriz
 */
const calculateArrayString = (calcString, numberLine, numberColumn) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Criar contador do calculo
        let qtd = (0, createNewCalc_1.createNewCalc)(calcString);
        // Executar calculo
        let value = (0, organizeCalc_1.organizeCalc)(qtd, calcString, numberLine, numberColumn);
        return value;
    }
    catch (error) {
        throw new Error(`function (calculateArrayString) => ${error.message}`);
    }
});
exports.calculateArrayString = calculateArrayString;
