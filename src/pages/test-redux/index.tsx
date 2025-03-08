import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Page } from '@/components'
import { Cell } from '@arco-design/mobile-react'
import { Pages } from '@/router/types'

const PAGE_TITLE = '组件通信测试'
const pageList = [Pages.TEST_REDUX_ZUSTAND, Pages.TEST_REDUX_JOTAI, Pages.TEST_REDUX_PROXY]

const Index: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Page title={PAGE_TITLE}>
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
