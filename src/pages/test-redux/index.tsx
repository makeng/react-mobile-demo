import React from 'react'

import { Page } from '@/components'
import { Cell } from '@arco-design/mobile-react'
import { Pages } from '@/router/types'
import { useNavigate } from 'react-router-dom'

const PAGE_TITLE = '组件通信测试'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const list = [Pages.TEST_REDUX_ZUSTAND]

  return (
    <Page title={PAGE_TITLE}>
      <Cell.Group>
        {list.map(path =>
          <Cell
            key={path} label={path} showArrow
            onClick={() => navigate(path)}
          />,
        )}
      </Cell.Group>
    </Page>
  )
}

export default Index
