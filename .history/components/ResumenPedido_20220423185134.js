

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      {producto.nombre}
    </div>
  )
}

export default ResumenPedido;
