import Image from 'next/image';

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image 
          width={300}
          height={400}
          src={`/assets/img/$`}
          alt={`Imagen Producto ${producto.nombre}`}
        
        />

      </div>
    </div>
  )
}

export default ResumenPedido;
