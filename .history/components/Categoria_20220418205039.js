import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {

  const { categoriaActual, } = useQuiosco();

  const { icono, nombre, id } = categoria; 
  return (
    <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400">

      <Image width={80} height={80} src={`/assets/img/icono_${icono}.svg`} alt="imagen icono"/>

      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
      >
        {nombre}

      </button>
      
    </div>
  )
}

export default Categoria
