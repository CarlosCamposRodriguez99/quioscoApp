import Image from "next/image"
import { formatearDinero } from '../helpers'

const Producto = ({producto}) => {

  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-3 border-3p-2">
      <Image 
        src={`/assets/img/${imagen}.jpg`}
        width={400}
        height={500} 
        alt={`Imagen Platillo ${nombre}`} 
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold text-1x1">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>

      </div>
      
    </div>
  )
}

export default Producto
