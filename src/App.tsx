import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import { router } from './router'
import setRootPixel from '@arco-design/mobile-react/tools/flexible'


function App() {
  useEffect(() => {
    setRootPixel(75)
  }, [])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
