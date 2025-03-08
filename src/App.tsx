import React, { useEffect, useRef } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.scss'
import { router } from './router'
import setRootPixel from '@arco-design/mobile-react/tools/flexible'
import { last } from 'radash'
import { useMasterDataStore } from '@/pages/test-redux/zustand/master-data/store'
import { useAtom } from 'jotai'
import { tempAtom } from '@/pages/test-redux/jotai/master-data/store'
import { tempObservable } from '@/pages/test-redux/proxy/master-data/store'


function App() {
  const lastPaths = useRef<string[]>([])
  // stores
  const resetZustandTemp = useMasterDataStore((state) => state.reset)
  const [_, setTemp] = useAtom(tempAtom)
  const { clear: clearProxy } = tempObservable

  // Lifecycle
  useEffect(() => {
    setRootPixel(75)

    // Listen to router change, and clear the stores
    router.subscribe(({ location }) => {
      const { pathname } = location
      const paths = pathname.split('/')
      if (lastPaths.current.length > paths.length) {
        const lastPathModuleName = last(lastPaths.current) as string
        const clearFn = {
          zustand: () => resetZustandTemp(),
          jotai: () => setTemp({}),
          proxy: () => clearProxy(),
        }[lastPathModuleName]
        clearFn && console.log('后退清理：', lastPathModuleName)
        clearFn?.()
      }
      lastPaths.current = paths
    })
  }, [])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
