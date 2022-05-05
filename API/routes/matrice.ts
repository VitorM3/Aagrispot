// Importações
import { Router } from "express";
import {matriceController as controller} from '../controller/@contoller'

// Rota
/**
 * Variavel base para receber as rotas das matrizes
 */
const route = Router()

route.post('/create',controller.create)

// Export
export default route