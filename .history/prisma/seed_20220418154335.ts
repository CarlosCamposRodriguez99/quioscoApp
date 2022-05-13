import { categorias } from './data/categorias'
import { productos } from './data/productos'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const main = async () => {
  try {
    prisma

  } catch (error) {
      console.log(error)

  }
}
main()