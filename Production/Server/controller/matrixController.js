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
exports.MatrixController = void 0;
const log_1 = require("../class/log");
const _service_1 = require("../service/@service");
/**
 * Controller Das rotas de Matrizes
 */
class MatrixController {
    constructor() { }
    /**
     * Rota para criar uma nova matriz
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar erros vindos do frontend
                if (!req.body) {
                    return res.status(404).send({ messageError: 'No value found' });
                }
                if (!req.body.numLines || req.body.numLines == '') {
                    return res.status(404).send({ messageError: 'Number of lines not found' });
                }
                if (!req.body.numColumn || req.body.numColumn == '') {
                    return res.status(404).send({ messageError: 'Number of columns not found' });
                }
                if (!req.body.calc || req.body.numColumn == '') {
                    return res.status(404).send({ messageError: 'Calculation for matrix creation not found' });
                }
                // Criar Objeto com o que foi passado pelo body
                let bodyCreate = req.body;
                // Executar serviço
                let newMatrix;
                newMatrix = yield _service_1.matrixService.create(bodyCreate);
                return res.status(200).send(newMatrix);
            }
            catch (error) {
                log_1.logger.newLoggerErrorCreate(`[${new Date()}] => Route => //create => Controller (create) => ${error.message} `);
            }
        });
    }
    /**
     * Rota para calcular duas matrizes passadas pelo usuário
     */
    calculate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Verificar possiveis erros vindos do frontend
                if (!req.body) {
                    return res.status(404).send({ messageError: 'No value found' });
                }
                if (!req.body.matrixOne) {
                    return res.status(404).send({ messageError: 'Matrix one was not found for the calculation to be performed' });
                }
                if (!req.body.matrixTwo) {
                    return res.status(404).send({ messageError: 'Matrix two was not found for the calculation to be performed' });
                }
                if (!req.body.sinalOperation) {
                    return res.status(404).send({ messageError: 'Math operation not found' });
                }
                // Atribuir valores passados para uma tipagem
                let bodyCalculate = req.body;
                // Executar serviço
                let newMatrixOrError = yield _service_1.matrixService.calculate(bodyCalculate);
                // Verificar se houve algum erro durante a execução
                let errorClient = newMatrixOrError;
                if (errorClient.messageErrorClient != undefined) {
                    return res.status(errorClient.status).send(errorClient.messageErrorClient);
                }
                // Atribuir valor para a tipagem certa
                const newMatrix = newMatrixOrError;
                return res.status(200).send(newMatrix);
            }
            catch (error) {
                log_1.logger.newLoggerErrorCreate(`[${new Date()}] => Route => //calculate => Controller (create) => ${error.message} `);
            }
        });
    }
}
exports.MatrixController = MatrixController;
