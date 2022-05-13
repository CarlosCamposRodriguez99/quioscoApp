import Image from 'next/image';
import useQuiosco from '../hooks/useQuiosco';

const ModalProducto = () => {

  const { producto } = useQuiosco()
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image 
          height={400}
          width={300}
          src={}
          alt={`imagen producto ${producto.imagen}`}
        />

      </div>

      <div className="md:w-2/3">

      </div>
      
    </div>
  )
}

export default ModalProducto
