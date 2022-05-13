import { PrismaClient } from '@prisma/client'


const prisma = new P

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
