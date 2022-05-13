import Image from "next/image"

const Producto = ({producto}) => {

  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-3">
      <Image 
        src={`/assets/img/${imagen}.jpg`}
        width={400}
        height={} 
        alt={`Imagen Platillo ${nombre}`} 
      />
      
    </div>
  )
}

export default Producto
