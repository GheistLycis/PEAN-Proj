import { Router } from 'express'

import { MomentController } from '../controllers/MomentController'

const router = Router()

//CONTROLLERS
const momentController = new MomentController()

//ROUTES
//MOMENTS
router.post("/api/moment", momentController.post)

export default router