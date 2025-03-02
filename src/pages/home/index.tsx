import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Page } from '@/components'
import { Cell } from '@arco-design/mobile-react'
import { Pages } from '@/router/types'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const list = [Pages.TEST_REDUX]

  return (
    <Page title="首页">
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
