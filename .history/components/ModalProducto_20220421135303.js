import { useState } from 'react';
import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';
import { formatearDinero } from '../helpers';

const ModalProducto = () => {

  const { producto, handleChangeModal } = useQuiosco();
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-2/3 w-2/4 md:p-0 p-4">
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <h1 className="text-2xl font-bold mt-2 text-center">{producto.nombre}</h1>

        <p className="mt-2 font-black text-3xl text-amber-500 text-center">{formatearDinero(producto.precio)}</p>

        <div className="flex gap-4 mt-5 justify-center">
          <button
            type="button"
            onClick={() => {
              setCantidad(cantidad - 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>

          <p className="text-3xl text-center">{cantidad}</p>

          <button
            type="button"
            onClick={() => {
              setCantidad(cantidad + 1);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalProducto
