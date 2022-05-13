import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = async () => {
    const { data } = await axios('/api/categorias')


  }

  useEffect(() => {
    obtenerCategorias()

  }, [])

  return (

    <QuioscoContext.Provider
      value={{

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
