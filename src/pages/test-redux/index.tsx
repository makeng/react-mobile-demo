import React from 'react'

import { Page } from '@/components'
import { Button } from '@arco-design/web-react'

const Index: React.FC = () => {
  return (
    <Page title="组件通信测试" className="justify-center items-center">
      <Button type="primary">Hello Arco</Button>
    </Page>
  )
}

export default Index
