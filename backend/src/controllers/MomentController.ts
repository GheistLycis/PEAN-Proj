import { Request, Response } from 'express'
import { MomentService } from '../services/MomentService'

export class MomentController {
    private momentService: MomentService
    
    public post(req: Request, res: Response) {
        this.momentService.post(req.body)
    }
}