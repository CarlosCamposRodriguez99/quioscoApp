import Image from 'next/image'

const Categoria = ({categoria}) => {

  const { icono, nombre, id } = categoria; 
  return (
    <div>

      <Image width={100} height={100} src={`/assets/img/icono_$`} alt="imagen icono"/>
      
    </div>
  )
}

export default Categoria
