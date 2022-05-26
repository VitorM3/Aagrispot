"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentVariables = void 0;
const typeDefinition_1 = require("../models/enum/typeDefinition");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class EnvironmentVariables {
    /**
     * Classe central para definir variaveis de ambiente
     */
    constructor() {
        // Definir um tipo de variaveis de ambiente
        if (process.env.definition == "dev") {
            this.definition = typeDefinition_1.TypeDefinition.Dev;
        }
        else if (process.env.definition == "prod") {
            this.definition = typeDefinition_1.TypeDefinition.Prod;
        }
        else {
            this.definition = typeDefinition_1.TypeDefinition.NotFound;
        }
        // Definir porta que a aplicação ira rodar
        if (process.env.port == '' || process.env.port == undefined) {
            this.port = 5000;
        }
        else {
            this.port = parseInt(process.env.port);
        }
    }
}
/**
 * Variaveis de ambiente do sistema
 */
exports.environmentVariables = new EnvironmentVariables();
