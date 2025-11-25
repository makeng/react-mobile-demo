import React, {
  createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useReducer, useRef,
} from 'react'
import { AuthItem, AuthKey, fetchAuthDataList } from '@/pages/demo-auth/service'
import { IntervalPoller } from '@/packages/interval-poller'
import { InteractionDelay } from '@/utils/ui/ux'
import { isEqual } from 'radash'

/**
 * 暴露的方法
 */
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
  const [updateKey, forceUpdate] = useReducer(x => x + 1, 0)

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

  /**
   * 检查权限
   */
  const checkRight = useCallback((key: AuthKey) => {
    const targetAuthItem = authDataList.current.find(item => item.key === key)
    return (targetAuthItem?.value ?? false)
  }, []) // 空依赖数组，永远不重新创建

  // 暴露方法
  const contextValue = useMemo(() => ({
    checkRight,
  }), [checkRight, updateKey]) // 确保 trigger render 时生成新 value，通知订阅者
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) as AuthContextValue

export default AuthProvider
