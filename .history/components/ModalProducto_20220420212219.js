import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

const ModalProducto = () => {

  const { producto } = useQuiosco();

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image 
          height={400}
          width={300}
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`imagen producto ${producto.nomb}`}
        />

      </div>

      <div className="md:w-2/3">

      </div>
      
    </div>
  )
}

export default ModalProducto
