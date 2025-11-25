import React, { useState } from 'react'
import { Page } from '@/components'
import { Steps } from '@arco-design/mobile-react'
import AuthSwitchList from '@/pages/demo-auth/components/AuthSwitchList'
import BtnsWithProvider from '@/pages/demo-auth/components/BtnsWithProvider'
import AuthProvider from '@/pages/demo-auth/components/AuthProvider'
import BtnsWithListener from '@/pages/demo-auth/components/BtnsWithListener'

const Index: React.FC = () => {
  const [step, setStep] = useState(0)

  const changeBtnAuth = () => setStep(2)

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
        <BtnsWithProvider onChange={changeBtnAuth} />
      </AuthProvider>
      {/* Listener 方式实现 */}
      <BtnsWithListener onChange={changeBtnAuth} />
    </Page>
  )
}

export default Index
