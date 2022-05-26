"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importações
const express_1 = require("express");
const _contoller_1 = require("../controller/@contoller");
// Rota
/**
 * Variavel base para receber as rotas das matrizes
 */
const route = (0, express_1.Router)();
route.post('/create', _contoller_1.matriceController.create);
// Export
exports.default = route;
