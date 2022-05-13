import Image from 'next/image';

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image 
          width={300}
          height={400}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`Imagen Producto ${producto.nombre}`}
        />
      </div>

      <div className="md:w-5/6">
        <p className="md:text-3xl  font-bold">{producto.nombre}</p>

      </div>
    </div>
  )
}

export default ResumenPedido;
