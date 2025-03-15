import React, { useEffect, useState } from 'react'
import { Page } from '@/components'
import { Button, Cell, Loading, Steps, Switch } from '@arco-design/mobile-react'
import { AuthKey, fetchAuthDataList, postAuthDataItem } from '@/pages/test-auth/components/Auth/utils'

const Index: React.FC = () => {
  const [step, setStep] = useState(0)
  const [authDataList, setAuthDataList] = useState<Obj[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchAuthDataList().then(setAuthDataList).finally(() => setLoading(false))
  }, [])

  function changeSwitch(key: AuthKey, on: boolean) {
    setStep(1)
    setLoading(true)
    const nextList = authDataList.map(item => {
      if (item.key === key) {
        return {
          ...item,
          value: on,
        }
      }
      return item
    })
    setAuthDataList(nextList)
    postAuthDataItem(AuthKey.CHECK, on)
      .finally(() => setLoading(false))
  }

  return (
    <Page title="权限（异步更新）测试">
      <Steps current={step}>
        <Steps.Step title="修改权限开关" />
        <Steps.Step title="发出请求修改权限数据" />
        <Steps.Step title="按钮监听到变化" />
      </Steps>
      <Cell.Group header={<><span className="inline-block mr-2">权限开关</span>{loading && <Loading />}</>}>
        {authDataList.map(item =>
          <Cell key={item.id} label={item.name}>
            <Switch
              checked={item.value}
              onChange={(on) => changeSwitch(item.key as AuthKey, on)}
            />
          </Cell>,
        )}
      </Cell.Group>
      {/* 按钮列表 */}
      <Cell.Group header="按钮列表" className="mt-4">
        <Cell className="flex-row">
          {authDataList.map(item =>
            <Button type="ghost" className="mx-1">{item.name}</Button>,
          )}
        </Cell>
      </Cell.Group>
    </Page>
  )
}

export default Index
