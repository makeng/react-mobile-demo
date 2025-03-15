import { Button, Cell } from '@arco-design/mobile-react'
import { useAuth } from '@/pages/test-auth/components/AuthProvider'
import { DEFAULT_AUTH_DATA_LIST } from '@/pages/test-auth/service'
import React, { useEffect, useState } from 'react'

interface Props {
  onChange(): void;
}

const Index: React.FC<Props> = (props) => {
  const { checkRight } = useAuth()
  const [count, setCount] = useState(0) // 仅用于方便查看步骤效果

  useEffect(() => {
    setCount(count + 1)
    if (count > 2) props.onChange()
  }, [checkRight])

  return (
    <Cell.Group header="权限按钮列表（Provider 方式）">
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
