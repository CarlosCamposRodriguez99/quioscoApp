import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Cat

const Sidebar = () => {

  const { categorias } = useQuiosco();

  return (
    <>
        <Image width={300} height={100} src="/assets/img/logo.svg" alt="logotipo" />

        <nav className="mt-10">
          {categorias.map(categoria => (

          ))}

        </nav>
    
    </>
  )
}

export default Sidebar