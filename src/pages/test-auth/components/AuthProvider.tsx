import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { AuthItem, AuthKey, fetchAuthDataList } from '@/pages/test-auth/service'
import { IntervalPoller } from '@/packages/interval-poller'
import { InteractionDelay } from '@/utils/ui/ux'
import { isEqual } from 'radash'
import { useLatest } from 'ahooks'

interface AuthContextValue {
  checkRight: (key: AuthKey) => boolean;
}

const AuthContext = createContext<AuthContextValue>({ checkRight: () => false })

/**
 * 权限组件。监听到异步数据变化后，自动更新权限。
 * @constructor
 */
const AuthProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [authDataList, setAuthDataList] = useState<AuthItem[]>([])
  const lastAuthDataList = useLatest(authDataList)

  useEffect(() => {
    const poller = new IntervalPoller(InteractionDelay.MOCK_REQUEST)
    poller.start(() => {
      fetchAuthDataList().then(nextList => {
        if (!isEqual(nextList, lastAuthDataList.current)) {
          setAuthDataList(nextList)
          console.log('检测到变化', nextList, lastAuthDataList.current)
        }
      })
    })

    return () => {
      poller.stop()
    }
  }, [])

  function checkRight(key: AuthKey) {
    const targetAuthItem = authDataList.find(item => item.key === key)
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
