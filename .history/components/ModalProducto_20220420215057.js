import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';

const ModalProducto = () => {

  const { producto } = useQuiosco();

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3 p-4">
        <Image 
          height={400}
          width={300}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`imagen producto ${producto.nombre}`}
        />
      </div>

      <div className="md:w-2/3">
        <div>
          <button></button>
        </div>
        <h1 className="text-3xl font-bold mt-5 text-center">{producto.nombre}</h1>

        <p className="mt-5 font-black text-5xl text-amber-500 text-center">{formatearDinero(producto.precio)}</p>

      </div>
      
    </div>
  )
}

export default ModalProducto
