import Head from 'next/head'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

export default function Home({categorias}) {

  console.log(categorias);

  return <h1>next.js</h1>;
}

