import Image from "next/image"

const Producto = ({producto}) => {

  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-3">
      <Image 
        src={`/assets/img/${imagen}.jpg`} alt={`Imagen Platillo ${nombre}`} />
      
    </div>
  )
}

export default Producto
