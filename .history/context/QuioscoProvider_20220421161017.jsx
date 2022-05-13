import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

  const obtenerCategorias = async () => {
    const { data } = await axios('/api/categorias')
    setCategorias(data)

  }

  useEffect(() => {
    obtenerCategorias()
  }, [])

  useEffect(() => {
    setCategoriaActual(categorias[2])

  }, [categorias])

  const handleClickCategoria = id => {
    const categoria = categorias.filter( cat => cat.id === id)
    setCategoriaActual(categoria[0])
  }

  const handleSetProducto = producto => {
    setProducto(producto)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  //para eliminar algunas categorias como categoriaId, Imagen en Components de herramienta de react//
  const handleAgregarPedido = ({categoriaId, imagen, ...producto}) => {
    if(pedido.some(productoStrate => productoState.id === producto.id)) {
      // Actualizar la cantidad
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoStrate)
    } else {
      setPedido([...pedido, producto])
    }
    

  }

  return (

    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        handleSetProducto,
        producto,
        modal,
        handleChangeModal,
        handleAgregarPedido

      }}
    >
      {children}


    </QuioscoContext.Provider>

  )
}

export {
  QuioscoProvider
}

export default QuioscoContext;