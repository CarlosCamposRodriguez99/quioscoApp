

const ResumenPedido = ({producto}) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-">
      {producto.nombre}
    </div>
  )
}

export default ResumenPedido;
