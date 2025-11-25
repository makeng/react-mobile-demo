import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Page } from '@/components'
import { Cell } from '@arco-design/mobile-react'
import { Pages } from '@/router/types'

const pageList = [Pages.DEMO_REDUX_ZUSTAND, Pages.DEMO_REDUX_JOTAI, Pages.DEMO_REDUX_PROXY]

const Index: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Page title="组件通信测试">
      <Cell.Group>
        {pageList.map(path =>
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
