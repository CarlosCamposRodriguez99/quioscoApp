import Image from 'next/image';
import { formatearDinero } from '../helpers';

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow md:p-6 md:mb-4 flex md:gap-10 gap-1 px-1 py-6 w-full mb-4 items-center">
      <div className="md:w-1/6 w-full">
        <Image 
          width={300}
          height={400}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`Imagen Producto ${producto.nombre}`}
        />
      </div>

      <div className="md:w-4/6 w-2/3">
        <p className="md:text-3xl text-1xl text-center font-bold">{producto.nombre}</p>
        <p className="md:text-xl text-1xl text-center font-bold mt-2">Cantidad:{producto.cantidad}</p>
        <p className="md:text-3xl text-1xl text-center font-bold text-amber-500 mt-2">Precio:{formatearDinero(producto.precio)}</p>
        <p className="md:text-3xl text-green-700 text-1xl text-center font-bold mt-2">Subtotal:{formatearDinero(producto.precio * producto.cantidad)}</p>
      </div>

      <div>
        <button
          type="button"
          className="bg-sky-700 flex text-center md:px-2 md:py-2 px-1 py-1 text-white rounded-md font-bold uppercase shadow-md w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Editar
        </button>

        <button
          type="button"
          className="bg-red-700 flex md:px-2 md:py-2 px-1 py-1 text-white rounded-md font-bold uppercase shadow-md w-full mt-4 md:mt-3"
        >
          Eliminar
        </button>
      </div>

    </div>
  )
}

export default ResumenPedido;