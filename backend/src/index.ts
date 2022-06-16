import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import router from './routes/index'
import { initializeDB } from './dataSource'

//SETTING APP
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//SETTING CORS
const options: cors.CorsOptions = { origin: ["http://localhost:3000", "http://localhost:4200"] }

app.use(cors(options))

//REDIRECTING TO ROUTER
app.use("/", router)

//SETTING SERVER
const port: number = parseInt(process.env.port) || 8080
const host: string = process.env.host || 'localhost'

app.listen(port, async() => {
    console.log(`SERVER ON! - ${host}:${port}`)
    
    await initializeDB()
})