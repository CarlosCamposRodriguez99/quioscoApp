import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria'

const Sidebar = () => {

  const { categorias } = useQuiosco();

  return (
    <>
        <Image width={10} height={10} layout="responsive" src="/assets/img/logo-pizza.png" alt="logotipo" href="/"/>

        <nav className="mt-10">
          {categorias.map(categoria => (
            <Categoria 
              key={categoria.id}
              categoria={categoria}
            />

          ))}

        </nav>
    
    </>
  )
}

export default Sidebar