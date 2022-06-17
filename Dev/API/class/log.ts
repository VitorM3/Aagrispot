import winston, { Logger } from 'winston'
import { environmentVariables } from './env'
import fs from 'fs'

class LoggerCreation {
    /**
     * Instancia base do logger
     */
    private newLogger: Logger
    constructor() {
        this.newLogger = winston.createLogger({
            level: "error",
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
                new winston.transports.File({ filename: './log/error.log', level: 'error' })
            ]
        })
    }

    /**
     * Criar um novo logger de error
     * @param message Menssagem de erro
     */
    newLoggerErrorCreate(message: string) {
        // Enviar menssagem ou salvar log de acordo com a definição do sistema
        if (environmentVariables.definition == "dev") {
        } else if (environmentVariables.definition == "prod") {
                // Criar um novo log
                this.newLogger.log({
                    level: 'error',
                    message
                })
                this.newLogger.info(message)
            

        } else {
            console.log('Defina um tipo de variaveis de sistema dentro do arquivo .env para ter acesso aos logs')
        }
    }
}
/**
 * Variavel para criar novos loggers
 */
export const logger = new LoggerCreation()