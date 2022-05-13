import Image from 'next/image';
import { formatearDinero } from '../helpers';

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow md:p-4 md:mb-3 lg:flex md:flex-1 flex-1 md:gap-6 p-4 mb-6 items-center">
      <div className="md:w-2/3 w-full">
        <Image 
          width={300}
          height={400}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`Imagen Producto ${producto.nombre}`}
        />
      </div>

      <div className="md:w-3/4 w-full">
        <p className="md:text-3xl text-2xl text-center font-bold">{producto.nombre}</p>
        <p className="md:text-xl text-1xl text-center font-bold mt-2">Cantidad:{producto.cantidad}</p>
        <p className="md:text-3xl text-2xl text-center font-bold text-amber-500 mt-2">Precio:{formatearDinero(producto.precio)}</p>
        <p className="md:text-3xl text-green-700 text-2xl text-center font-bold mt-2 mb-4">Subtotal:{formatearDinero(producto.precio * producto.cantidad)}</p>
      </div>
      <div className="flex">
        <button
          type="button"
          className="bg-sky-700 flex md:gap-1 gap-4 md:px-2 md:py-2 px-1 py-1 text-white rounded-md font-bold uppercase shadow-md w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Editar
        </button>

        <button
          type="button"
          className="bg-red-700 flex gap-2 md:px-2 md:py-2 px-1 py-1 text-white rounded-md font-bold uppercase shadow-md w-full mx-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Eliminar
        </button>
      </div>

    </div>
  )
}

export default ResumenPedido;
