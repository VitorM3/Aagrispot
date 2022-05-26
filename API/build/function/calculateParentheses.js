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
exports.calculateParentheses = void 0;
const refineArray_1 = require("../utils/refineArray");
const createNewCalc_1 = require("./createNewCalc");
const organizeCalc_1 = require("./organizeCalc");
function calculateParentheses(qtd, calcArray, indexParentheses, reference, accomplished, numberLine, numberColumn) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Procurar o final do parenteses
            let indexParanthesesEnd = calcArray.findIndex((element) => element == ")");
            if (indexParanthesesEnd == -1) {
                throw new Error('Não foi possivel achar o final da expressão');
            }
            // Criar um array apenas com os objetos da expressão
            let newArrayCalcParentheses = calcArray.map((element, index) => {
                if (index < indexParanthesesEnd && element != "(" && element != ")") {
                    return element;
                }
                else {
                    return ' ';
                }
            });
            // Refinar array e deixar apenas os valores necessários
            newArrayCalcParentheses = yield (0, refineArray_1.refineArray)(' ', newArrayCalcParentheses);
            // NOTA=> Por motivos que desconheço o ultimo elemento com ' ' não é retirado, por isso irei retirar este na mão
            // mas se você achar uma maneira melhor de fazer está ação, por favor resolva está "gambiarra".
            // Retirar ultimo ellemento com ' '
            let indexBug = newArrayCalcParentheses.findIndex((element) => element == ' ');
            if (indexBug != -1) {
                newArrayCalcParentheses.splice(indexBug, 1);
            }
            // Realizar calculo
            let newQtd = (0, createNewCalc_1.createNewCalc)(newArrayCalcParentheses);
            let value = yield (0, organizeCalc_1.organizeCalc)(newQtd, newArrayCalcParentheses, numberLine, numberColumn);
            // Salvar valores na referencia
            reference.push({ index: indexParentheses, value: value });
            reference.push({ index: indexParanthesesEnd, value: value });
            // Salvar objeto que a multiplicação ja foi feita
            accomplished.push(indexParentheses);
            // Retornar valores
            return { accomplished, reference, value, newQtd };
        }
        catch (error) {
            throw new Error(`function (calculateParentheses) => ${error.message}`);
        }
    });
}
exports.calculateParentheses = calculateParentheses;
