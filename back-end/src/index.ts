import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import express from 'express'
const userRoutes = require('./routes/user')
const app = express()
app.use(cors({
  credentials:true, origin:"http://localhost:3000"
}))

app.use(express.json())

app.use('/users', userRoutes)

app.listen(4500, () =>
  console.log('REST API Server Iniciado: http://localhost:4500'),
)