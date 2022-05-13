import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'

export default function Home() {

  const { categoriaActual } = useQuiosco();

  return (
    <Layout pagina={`Menú ${categoriaActual}`}>
      <h1>Inicio</h1>


    </Layout>

  );
}

