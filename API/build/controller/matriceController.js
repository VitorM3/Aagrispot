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
exports.MatriceController = void 0;
const log_1 = require("../class/log");
const _service_1 = require("../service/@service");
/**
 * Controller Das rotas de Matrizes
 */
class MatriceController {
    constructor() { }
    /**
     * Rota para criar uma nova matriz
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body) {
                    return res.status(404).send({ messageError: 'Nenhum valor enviado' });
                }
                if (!req.body.numLines) {
                    return res.status(404).send({ messageError: 'Número de linhas não encontrada' });
                }
                if (!req.body.numColumn) {
                    return res.status(404).send({ messageError: 'Número de colunas não encontrada' });
                }
                if (!req.body.calc) {
                    return res.status(404).send({ messageError: 'Calculo para criação da matriz não encontrado' });
                }
                // Criar Objeto com o que foi passado pelo body
                let bodyCreate = req.body;
                // Executar serviço
                let newMatrice;
                try {
                    newMatrice = yield _service_1.matriceSerice.create(bodyCreate);
                }
                catch (error) {
                    throw new Error(error.message);
                }
                return res.status(200).send(newMatrice);
            }
            catch (error) {
                log_1.logger.newLoggerErrorCreate(`/matrice/create => Controller (create) => ${error.message} `);
            }
        });
    }
}
exports.MatriceController = MatriceController;
