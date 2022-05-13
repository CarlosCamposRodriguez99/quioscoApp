import { PrismaClient } from '@prisma/client';

const prisma=

export default async function handler(req, res) {

  if (req.method === "POST") {
    console.log(req.body);
    res.json({ metodo: "POST!!!" });

  }
} 