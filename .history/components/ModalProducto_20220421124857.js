import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';

const ModalProducto = () => {

  const { producto, handleChangeModal } = useQuiosco();

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3 md:p-1 p-4 mr-0">
        <Image 
          height={400}
          width={300}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`imagen producto ${producto.nombre}`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button
            onClick={handleChangeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <h1 className="text-2xl font-bold mt-2 text-center">{producto.nombre}</h1>

        <p className="mt-2 font-black text-3xl text-amber-500 text-center">{formatearDinero(producto.precio)}</p>

      </div>
      
    </div>
  )
}

export default ModalProducto
