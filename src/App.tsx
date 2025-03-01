import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import { router } from './router'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider value={defaultSystem}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </div>
  )
}

export default App
