import React, { createContext, PropsWithChildren, useContext, useEffect, useReducer, useRef } from 'react'
import { AuthItem, AuthKey, fetchAuthDataList } from '@/pages/test-auth/service'
import { IntervalPoller } from '@/packages/interval-poller'
import { InteractionDelay } from '@/utils/ui/ux'
import { isEqual } from 'radash'

interface AuthContextValue {
  checkRight: (key: AuthKey) => boolean;
}

const AuthContext = createContext<AuthContextValue>({ checkRight: () => false })

/**
 * 权限组件。监听到异步数据变化后，自动更新权限。
 * @constructor
 */
const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const authDataList = useRef<AuthItem[]>([]) // 为了性能，不应把大型数组放在 state 中
  const [_, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    // 轮询器来模拟 websocket 长连接
    const poller = new IntervalPoller(InteractionDelay.MOCK_REQUEST)
    poller.start(() => {
      fetchAuthDataList().then(nextList => {
        if (!isEqual(nextList, authDataList.current)) {
          authDataList.current = nextList
          forceUpdate()
          console.table(nextList)
        }
      })
    })

    return () => {
      poller.stop()
    }
  }, [])

  function checkRight(key: AuthKey) {
    const targetAuthItem = authDataList.current.find(item => item.key === key)
    return (targetAuthItem?.value ?? false)
  }

  return (
    <AuthContext.Provider value={{ checkRight }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) as AuthContextValue

export default AuthProvider
