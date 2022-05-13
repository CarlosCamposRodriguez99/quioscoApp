import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

export default function handler(req, res) {

  

  res.status(200).json({ name: 'John Doe' })
}
