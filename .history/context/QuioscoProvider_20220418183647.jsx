import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

  const [categorias, setCategorias]

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
