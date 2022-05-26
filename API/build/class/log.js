"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const env_1 = require("./env");
class LoggerCreation {
    constructor() {
        this.newLogger = winston_1.default.createLogger({
            level: "error",
            format: winston_1.default.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
                new winston_1.default.transports.File({ filename: './log/error.log', level: 'error' })
            ]
        });
    }
    /**
     * Criar um novo logger de error
     * @param message Menssagem de erro
     */
    newLoggerErrorCreate(message) {
        // Enviar menssagem ou salvar log de acordo com a definição do sistema
        if (env_1.environmentVariables.definition == "dev") {
            console.log(message);
        }
        else if (env_1.environmentVariables.definition == "prod") {
            // Criar um novo log
            this.newLogger.log({
                level: 'error',
                message
            });
            this.newLogger.info(message);
        }
        else {
            console.log('Defina um tipo de variaveis de sistema dentro do arquivo .env para ter acesso aos logs');
        }
    }
}
/**
 * Variavel para criar novos loggers
 */
exports.logger = new LoggerCreation();
