import { Service } from "typedi"
import { AppDataSource } from "../dataSource"
import { Moment } from "../entities/Moment"

@Service()
export class MomentService {
    private repo = AppDataSource.getRepository(Moment)
 
    public async post({ title, description }): Promise<Moment | Error> {
        if(await this.repo.findOneBy({ title })) return new Error("Este momento já foi cadastrado.")
    
        const moment = this.repo.create({ title, description })
    
        await this.repo.save(moment)
        return moment
    }
}