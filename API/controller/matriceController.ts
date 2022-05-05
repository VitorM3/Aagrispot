// Imports
import { Request,Response } from "express";
import { logger } from "../class/log";
import { IBodyCreate } from "../models/interface/routes/matrices/bodyCreate";
import { matriceSerice } from "../service/@service";

/**
 * Controller Das rotas de Matrizes
 */
export class MatriceController{
    constructor(){}
    /**
     * Rota para criar uma nova matriz
     */
    create(req:Request,res:Response){
        try {
            if(!req.body){return res.status(404).send({messageError:'Nenhum valor enviado'})}
            if(!req.body.numLines){return res.status(404).send({messageError:'Número de linhas não encontrada'})}
            if(!req.body.numColumn){return res.status(404).send({messageError:'Número de colunas não encontrada'})}
            if(!req.body.calc){return res.status(404).send({messageError:'Calculo para criação da matriz não encontrado'})}
            // Criar Objeto com o que foi passado pelo body
            let bodyCreate:IBodyCreate = req.body
            // Executar serviço
            try {
                matriceSerice.create(bodyCreate)
            } catch (error:any) { throw new Error(error.message) }

        } catch (error:any) {
            logger.newLoggerErrorCreate(`/matrice/create => Controller (create) => ${error.message} `)
        }
    }
}