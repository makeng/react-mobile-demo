import React, { useEffect, useState } from 'react'
import { Page } from '@/components'
import { Steps } from '@arco-design/mobile-react'
import AuthSwitchList from '@/pages/test-auth/components/AuthSwitchList'
import ButtonList from '@/pages/test-auth/components/BtnsWithProvider'
import AuthProvider from '@/pages/test-auth/components/AuthProvider'
import { sleep } from 'radash'
import { InteractionDelay } from '@/utils/ui/ux'

const Index: React.FC = () => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step === 2) sleep(InteractionDelay.ONE_SECOND).then(() => setStep(0)) // 复位
  }, [step])

  return (
    <Page title="权限（异步更新）测试">
      <Steps current={step}>
        <Steps.Step title="修改权限开关" />
        <Steps.Step title="发出请求修改权限数据" />
        <Steps.Step title="按钮监听到变化" />
      </Steps>
      <AuthSwitchList onChange={() => setStep(1)} />
      {/* context 方式实现 */}
      <AuthProvider>
        <ButtonList onChange={() => setStep(2)} />
      </AuthProvider>
    </Page>
  )
}

export default Index
