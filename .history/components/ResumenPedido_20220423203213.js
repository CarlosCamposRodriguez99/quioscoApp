import Image from 'next/image';
import { formatearDinero } from '../helpers';

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow p-6 mb-4 flex md:gap-10 gap-5 items-center">
      <div className="md:w-1/6">
        <Image 
          width={300}
          height={400}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`Imagen Producto ${producto.nombre}`}
        />
      </div>

      <div className="md:w-4/6">
        <p className="md:text-3xl text-1xl text-center font-bold">{producto.nombre}</p>
        <p className="md:text-xl text-1xl text-center font-bold mt-2">Cantidad:{producto.cantidad}</p>
        <p className="md:text-3xl text-1xl text-center font-bold text-amber-500 mt-2">Precio:{formatearDinero(producto.precio)}</p>
        <p className="md:text-3xl text-green-700 text-1xl text-center font-bold mt-2">Subtotal:{formatearDinero(producto.precio * producto.cantidad)}</p>
      </div>

      <div>
        <button
          type="button"
          className="bg-sky-700 flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto"
        >
          Editar
        </button>
      </div>

    </div>
  )
}

export default ResumenPedido;
