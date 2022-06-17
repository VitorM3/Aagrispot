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
exports.refineArray = void 0;
/**
 * Função para Refinar um array de string e retirar elementos especificos
 * @param caracterRemove elemento especificos
 * @param array Respectivo array
 * @returns Array de String
 */
const refineArray = (caracterRemove, array) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Tranzitar por todos os elementos do array
        array.forEach((element, index) => {
            // Verificar se o caracter separador está presente
            if (element == caracterRemove) {
                array.splice(index, 1);
            }
        });
        return array;
    }
    catch (error) {
        throw new Error(`utils (refineArray) => ${error.message} `);
    }
});
exports.refineArray = refineArray;
