import React, { useEffect, useReducer, useState } from 'react'

import { Page } from '@/components'
import { useNavigate } from 'react-router-dom'
import { Cell, Steps } from '@arco-design/mobile-react'
import { Pages } from '@/router/types'
import { MasterDataId } from '@/pages/test-redux/utils'
import { setRouterParams } from '@/router/utils/tool'
import { sleep } from 'radash'
import { InteractionDelay } from '@/utils/ui/ux'
import { tempObservable } from '@/pages/test-redux/proxy/master-data/store'

const PAGE_TITLE = 'Proxy 例子'
const Step = Steps.Step

const Index: React.FC = () => {
  const navigate = useNavigate()
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  const [currentStep, setCurrentStep] = useState(0)
  const { proxy: tempProxy, onPropertyChange } = tempObservable

  useEffect(() => {
    onPropertyChange(forceUpdate)
  }, [])

  function clickSelectMasterData(masterDataId: MasterDataId) {
    const url = setRouterParams(Pages.TEST_REDUX_PROXY_MD, { category: masterDataId })
    setCurrentStep(1)
    sleep(InteractionDelay.NAV)
      .then(() => navigate(url))
      .then(() => setCurrentStep(2))
  }

  return (
    <Page title={PAGE_TITLE}>
      <Steps current={currentStep} direction="vertical">
        <Step title="创建临时 store" />
        <Step title="点击进入基础资料" />
        <Step title="回填" />
      </Steps>
      <Cell.Group>
        <Cell
          label="选择客户"
          showArrow
          onClick={() => clickSelectMasterData(MasterDataId.CUSTOMER)}
          text={tempProxy[MasterDataId.CUSTOMER]?.name}
        />
        <Cell
          label="选择商品"
          showArrow
          onClick={() => clickSelectMasterData(MasterDataId.PRODUCT)}
          text={tempProxy[MasterDataId.PRODUCT]?.name}
        />
      </Cell.Group>
    </Page>
  )
}

export default Index
