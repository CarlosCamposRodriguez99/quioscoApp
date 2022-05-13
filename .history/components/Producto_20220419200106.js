import Image from "next/image"
import { formatearDinero } from '../helpers'

const Producto = ({producto}) => {

  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-auto">
      <Image 
        src={`/assets/img/${imagen}.jpg`}
        width={400}
        height={500} 
        alt={`Imagen Platillo ${nombre}`} 
      />
      <div className="p-auto">
        <h3 className="text-2xl text-center font-bold text-1x1">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-center text-amber-500">
          {formatearDinero(precio)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-2 uppercase font-bold"
        
        >Agregar</button>

      </div>
      
    </div>
  )
}

export default Producto
