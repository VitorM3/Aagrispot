// Importações
import { Router } from "express";
import {matrixController as controller} from '../controller/@contoller'

// Rota
/**
 * Variavel base para receber as rotas das matrizes
 */
const route = Router()

route.post('/create',controller.create)
route.post('/calculate',controller.calculate)

// Export
export default route