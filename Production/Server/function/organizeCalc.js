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
exports.organizeCalc = void 0;
const sinalCalc_1 = require("../models/enum/sinalCalc");
const calculateParentheses_1 = require("./calculateParentheses");
const findAndDefineCalc_1 = require("./findAndDefineCalc");
/**
 * Função para organizar o respectivo calculo e executar em ordem de prioridade
 * @param qtdCalc Quantidade de vezes que irá realizar o calculo
 * @param calcArray Array com o calculo
 */
const organizeCalc = (qtdCalc, calcArray, numberLine, numberColumn) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Variaveis a serem utilizadas fora da estrutura de repetição
        let referenceValues = [];
        let accomplished = [];
        let repeat = 0;
        let value = 0;
        // Estrutura de repetição para executar o calculo
        while (repeat != qtdCalc) {
            // Executar as funções pela ordem de prioridade
            // Parenteses
            const indexParenthesesBegin = calcArray.findIndex((element) => element == '(');
            const indexParenthesesAccomplished = accomplished.findIndex((indexArray) => indexArray == indexParenthesesBegin);
            if (indexParenthesesBegin != -1 && indexParenthesesAccomplished == -1) {
                const objCalc = yield (0, calculateParentheses_1.calculateParentheses)(qtdCalc, calcArray, indexParenthesesBegin, referenceValues, accomplished, numberLine, numberColumn);
                referenceValues = objCalc.reference;
                accomplished = objCalc.accomplished;
                value = objCalc.value;
                qtdCalc = qtdCalc - objCalc.newQtd;
                repeat = repeat + 1;
            }
            else {
                // Multiplicação
                const objCalc = (0, findAndDefineCalc_1.findAndDefineCalc)(sinalCalc_1.SinalCalc.Multipli, referenceValues, accomplished, calcArray, numberLine, numberColumn);
                if (typeof objCalc != "boolean") {
                    // Atribuir valores
                    referenceValues = objCalc.reference;
                    accomplished = objCalc.accomplished;
                    value = objCalc.value;
                    repeat = repeat + 1;
                }
                else {
                    // Divisão
                    const objCalc = (0, findAndDefineCalc_1.findAndDefineCalc)(sinalCalc_1.SinalCalc.Division, referenceValues, accomplished, calcArray, numberLine, numberColumn);
                    if (typeof objCalc != "boolean") {
                        // Atribuir valores
                        referenceValues = objCalc.reference;
                        accomplished = objCalc.accomplished;
                        value = objCalc.value;
                        repeat = repeat + 1;
                    }
                    else {
                        // Soma
                        const objCalc = (0, findAndDefineCalc_1.findAndDefineCalc)(sinalCalc_1.SinalCalc.Sum, referenceValues, accomplished, calcArray, numberLine, numberColumn);
                        if (typeof objCalc != "boolean") {
                            // Atribuir valores
                            referenceValues = objCalc.reference;
                            accomplished = objCalc.accomplished;
                            value = objCalc.value;
                            repeat = repeat + 1;
                        }
                        else {
                            // Subtração
                            const objCalc = (0, findAndDefineCalc_1.findAndDefineCalc)(sinalCalc_1.SinalCalc.Subtracion, referenceValues, accomplished, calcArray, numberLine, numberColumn);
                            if (typeof objCalc != "boolean") {
                                // Atribuir valores
                                referenceValues = objCalc.reference;
                                accomplished = objCalc.accomplished;
                                value = objCalc.value;
                                repeat = repeat + 1;
                            }
                            else {
                                repeat = repeat + 1;
                            }
                        }
                    }
                }
            }
        }
        return value;
    }
    catch (error) {
        throw new Error(`function (organizeCalc) => ${error.message}`);
    }
});
exports.organizeCalc = organizeCalc;
