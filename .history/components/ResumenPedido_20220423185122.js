

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items">
      {producto.nombre}
    </div>
  )
}

export default ResumenPedido;
