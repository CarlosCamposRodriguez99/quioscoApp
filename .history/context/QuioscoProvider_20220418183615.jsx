import { useState, useEffect, createContext } from 'react'
import 

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

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
