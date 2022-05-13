

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow p-5 mb-3 flex">
      {producto.nombre}
    </div>
  )
}

export default ResumenPedido;
