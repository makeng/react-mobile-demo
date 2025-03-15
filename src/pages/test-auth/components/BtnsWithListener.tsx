import { Button, Cell } from '@arco-design/mobile-react'
import { authData, AuthKey, DEFAULT_AUTH_DATA_LIST } from '@/pages/test-auth/service'
import React, { useEffect, useReducer } from 'react'
import { createObservable } from '@/packages/observer'

const { proxy: authDataListProxy, onPropertyChange: onAuthDataListChange } = createObservable(authData)

function checkRight(key: AuthKey) {
  const list = authDataListProxy.getList()
  return (list.find(item => item.key === key)?.value ?? false)
}

const Index: React.FC = () => {
  const [_, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(() => {
    onAuthDataListChange(forceUpdate)
  }, [])

  return (
    <Cell.Group header="权限按钮列表（Listener 方式）">
      <Cell className="flex-row">
        {DEFAULT_AUTH_DATA_LIST.map(item =>
          <Button
            type="ghost" className="mx-1" key={item.key}
            disabled={!checkRight(item.key)}
          >
            {item.name}
          </Button>,
        )}
      </Cell>
    </Cell.Group>
  )
}

export default Index
