import { useState, useEffect, createContext } from 'react'
import axios from 

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
