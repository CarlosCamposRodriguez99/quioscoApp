import Image from "next/image"

const Producto = ({producto}) => {

  const { nombre, precio, imagen } = producto;

  return (
    <div className="border p-3">
      <Image 
        src={`/assets/img/${imagen}.jpg`}
        width={400}
        height={500} 
        alt={`Imagen Platillo ${nombre}`} 
      />
      <div className="p-5">
        <h3 cl>

      </div>
      
    </div>
  )
}

export default Producto
