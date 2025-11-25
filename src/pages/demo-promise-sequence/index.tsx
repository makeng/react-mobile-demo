import React, { useState } from 'react'
import { Page } from '@/components'
import { Button, Input, Steps } from '@arco-design/mobile-react'
import { mockCalcByServer } from '@/pages/demo-promise-sequence/utils'

const Index: React.FC = () => {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)
  const [result, setResult] = useState('')

  function clickBtn() {
    setStep(1)

    const nextCount = count + 1
    setCount(nextCount)
    mockCalcByServer(nextCount).then(res => {
      setStep(2)
      setResult(res)
      setCount(res / 10)
    })
  }

  return (
    <Page title="连续的异步计算并渲染">
      <Steps current={step}>
        <Steps.Step title="点击时发出请求" />
        <Steps.Step title="请求返回" />
        <Steps.Step title="按照发出的顺序渲染" />
      </Steps>
      <Button type="primary" onClick={clickBtn}>点击后 count + 1</Button>
      <Input value={result} disabled placeholder="期待是 count 的 10 倍数" />
    </Page>
  )
}

export default Index
