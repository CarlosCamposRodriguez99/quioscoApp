import Image from 'next/image'

const Categoria = ({categoria}) => {

  const { icono, nombre, id } = categoria; 
  return (
    <div>

      <Image width={80} height={80} src={`/assets/img/icono_${icono}.svg`} alt="imagen icono" className="mr-5"/>

      <button
        t
      >

      </button>
      
    </div>
  )
}

export default Categoria
