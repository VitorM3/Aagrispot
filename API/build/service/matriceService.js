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
exports.MatriceSerice = void 0;
const createMatrice_1 = require("../function/createMatrice");
const refineArray_1 = require("../utils/refineArray");
/**
 * Serviços para manipular e realizar funções das matrizes
 */
class MatriceSerice {
    /**
     * Serviço para criar uma matriz com as predefinições passadas pelo usuário
     * @param predefinitionsMatrice predefinições passadas pelo usuário
     */
    create(predefinitionsMatrice) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Separar objeto vindo do controller
                let numberLines = predefinitionsMatrice.numLines;
                let numberColumns = predefinitionsMatrice.numColumn;
                let calcString = predefinitionsMatrice.calc;
                // Adicionar mais 1 no número de linhas e de colunas
                numberLines = numberLines + 1;
                numberColumns = numberColumns + 1;
                // Criar Array com a string do calculo
                const calcArray = calcString.split('');
                let newArrayCalc = yield (0, refineArray_1.refineArray)(' ', calcArray);
                // Criar Objeto da matriz
                let matrice = [];
                matrice = yield (0, createMatrice_1.createMatrice)(matrice, numberLines, numberColumns, newArrayCalc);
                return matrice;
            }
            catch (error) {
                throw new Error(`Service (create) => ${error.message}`);
            }
        });
    }
}
exports.MatriceSerice = MatriceSerice;
