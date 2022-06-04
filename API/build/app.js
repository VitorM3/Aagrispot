"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// Importações
const express_1 = __importDefault(require("express"));
const env_1 = require("./class/env");
const morgan_1 = __importDefault(require("morgan"));
const _routes_1 = require("./routes/@routes");
// Configurações
/**
 * Variavel central do Express
 */
exports.app = (0, express_1.default)();
// Configuração base para receber dados do frontEnd
express_1.default.urlencoded({ extended: false });
exports.app.use(express_1.default.json());
// Configuração para melhor visualização do console -> Dev
if (env_1.environmentVariables.definition == "dev") {
    exports.app.use((0, morgan_1.default)("dev"));
}
else {
    exports.app.use((0, morgan_1.default)("common"));
}
// Rotas
exports.app.use('/matrix', _routes_1.matrix);
// Iniciar servidor
exports.app.listen(env_1.environmentVariables.port, () => {
    if (env_1.environmentVariables.definition == 'notFound') {
        console.log('Tipo de variaveis de sistema não definido');
    }
    console.log(`Servidor iniciado na porta => ${env_1.environmentVariables.port}`);
});
