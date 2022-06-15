import { Request, Response } from 'express'

export class Teste {
    get(req: Request, res: Response) {
        res.send("d certo")
    }
}