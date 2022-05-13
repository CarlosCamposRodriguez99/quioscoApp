import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [ nombre, setNombre ] = useState('');

  const router = useRouter();

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
    router.push('/')
  }

  const handleSetProducto = producto => {
    setProducto(producto)
  }

  const handleChangeModal = () => {
    setModal(!modal)
  }

  //para eliminar algunas categorias como categoriaId, Imagen en Components de herramienta de react//
  const handleAgregarPedido = ({categoriaId, ...producto}) => {
    if(pedido.some(productoState => productoState.id === producto.id)) {
      // Actualizar la cantidad
      const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
      setPedido(pedidoActualizado);

      toast.success('Guardado Correctamente')
    } else {
      setPedido([...pedido, producto])
      toast.success('Agregado al Pedido')
    }
    setModal(false);
  }

  const handleEditarCantidades = id => {
    const productoActualizar = pedido.filter(producto => producto.id === id)
    setProducto(productoActualizar[0])
    setModal(!modal)
  }
  
  const handleEliminarProducto = id => {
    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado)
  }

  const colocarOrden = async (e) => {
    e.preventDefault();
    console.log(pedido);
  };

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
        handleAgregarPedido,
        pedido,
        handleEditarCantidades,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden

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