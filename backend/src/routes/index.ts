import { Router } from 'express'

import { Teste } from '../controllers/teste'

const router = Router()

//CONTROLLERS
const testeController = new Teste()

//ROUTES
//TESTE
router.get("/teste", testeController.get)

export default router