import Image from 'next/image'

const Categoria = ({categoria}) => {

  const { icono, nombre, id } = categoria; 
  return (
    <div>

      <Image width={80} height={100} src={`/assets/img/icono_${icono}.svg`} alt="imagen icono"/>
      
    </div>
  )
}

export default Categoria
