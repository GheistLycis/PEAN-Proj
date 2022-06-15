import 'dotenv/config'
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})

export default AppDataSource.initialize()
    .then(() => console.log(`DATABASE CONNECTED! DB: ${process.env.DB_NAME}; USER: ${process.env.DB_USER}`))
    .catch(err => console.error("Error during Data Source initialization", err))