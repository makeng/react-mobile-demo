import React from 'react'
import { Button, HStack } from '@chakra-ui/react'

import { Page } from '@/components'

const Index: React.FC = () => {
  return (
    <Page title="组件通信测试" className="justify-center items-center">
      <HStack>
        <Button className="mb-120">Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </Page>
  )
}

export default Index
