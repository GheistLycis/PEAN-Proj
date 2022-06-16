import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('moments')
export class Moment {
    @PrimaryColumn()
    id: string

    @Column()
    title: string

    @Column()
    description: string

    //@Column()
    //image?: File

    @CreateDateColumn()
    created_At: Date

    constructor() {
        if(!this.id) this.id = uuid()
    }
}