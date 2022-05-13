import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {

  const categorias = await prisma.categoria.findMany();

  res.status(200).json(categorias);
}
