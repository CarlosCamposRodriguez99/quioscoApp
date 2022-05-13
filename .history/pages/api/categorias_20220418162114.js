import { PrismaClient } from '@prisma'

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
