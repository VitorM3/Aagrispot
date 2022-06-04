// Imports
import { Request, Response } from "express";
import { logger } from "../class/log";
import { IMatrixBase } from "../models/interface/matrixBase";
import { IBodyCreate } from "../models/interface/routes/matrixs/bodyCreate";
import { IBodyCalculate } from "../models/interface/routes/matrixs/bodyCalculate";
import { matrixService as matrixService } from "../service/@service";
import { SinalCalc } from "../models/enum/sinalCalc";
import { IErrorClient } from "../models/interface/errorClient";

/**
 * Controller Das rotas de Matrizes
 */
export class MatrixController {
    constructor() { }
    /**
     * Rota para criar uma nova matriz
     */
    async create(req: Request, res: Response) {
        try {
            // Verificar erros vindos do frontend
            if (!req.body) { return res.status(404).send({ messageError: 'No value found' }) }
            if (!req.body.numLines || req.body.numLines == '') { return res.status(404).send({ messageError: 'Number of lines not found' }) }
            if (!req.body.numColumn || req.body.numColumn == '') { return res.status(404).send({ messageError: 'Number of columns not found' }) }
            if (!req.body.calc || req.body.numColumn == '') { return res.status(404).send({ messageError: 'Calculation for matrix creation not found' }) }
            // Criar Objeto com o que foi passado pelo body
            let bodyCreate: IBodyCreate = req.body
            // Executar serviço
            let newMatrix: IMatrixBase[]
            newMatrix = await matrixService.create(bodyCreate)

            return res.status(200).send(newMatrix)

        } catch (error: any) {
            logger.newLoggerErrorCreate(`[${new Date()}] => Route => //create => Controller (create) => ${error.message} `)
        }
    }
    /**
     * Rota para calcular duas matrizes passadas pelo usuário
     */
    async calculate(req: Request, res: Response) {
        try {
            // Verificar possiveis erros vindos do frontend
            if (!req.body) { return res.status(404).send({ messageError: 'No value found' }) }
            if (!req.body.matrixOne) { return res.status(404).send({ messageError: 'Matrix one was not found for the calculation to be performed' }) }
            if (!req.body.matrixTwo) { return res.status(404).send({ messageError: 'Matrix two was not found for the calculation to be performed' }) }
            if (!req.body.sinalOperation) { return res.status(404).send({ messageError: 'Math operation not found' }) }
            // Atribuir valores passados para uma tipagem
            let bodyCalculate: IBodyCalculate = req.body
            // Executar serviço
            let newMatrixOrError = <IErrorClient | IMatrixBase[]>await matrixService.calculate(bodyCalculate)
            // Verificar se houve algum erro durante a execução
            let errorClient:IErrorClient = <IErrorClient>newMatrixOrError
            if(errorClient.messageErrorClient != undefined){
                return res.status(errorClient.status).send(errorClient.messageErrorClient)
            }
            // Atribuir valor para a tipagem certa
            const newMatrix:IMatrixBase[] = <IMatrixBase[]>newMatrixOrError
            return res.status(200).send(newMatrix)
        } catch (error: any) {
            logger.newLoggerErrorCreate(`[${new Date()}] => Route => //calculate => Controller (create) => ${error.message} `)
        }
    }
}