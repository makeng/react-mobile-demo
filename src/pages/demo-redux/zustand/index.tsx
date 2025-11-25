import React, { useEffect, useState } from 'react'

import { Page } from '@/components'
import { useNavigate } from 'react-router-dom'
import { Cell, Steps } from '@arco-design/mobile-react'
import { Pages } from '@/router/types'
import { MasterDataId } from '@/pages/demo-redux/utils'
import { setRouterParams } from '@/router/utils/tool'
import { isEmpty, sleep } from 'radash'
import { InteractionDelay } from '@/utils/ui/ux'
import { useMasterDataStore } from './master-data/store'

const PAGE_TITLE = 'Zustand 例子'
const Step = Steps.Step

const Index: React.FC = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  // store
  const temp = useMasterDataStore((state) => state.temp)
  
  useEffect(() => {
    if (!isEmpty(temp)) {
      setCurrentStep(2)
    }
  }, [temp])

  function clickSelectMasterData(masterDataId: MasterDataId) {
    const url = setRouterParams(Pages.DEMO_REDUX_ZUSTAND_MD, { category: masterDataId })
    setCurrentStep(1)
    sleep(InteractionDelay.NAV)
      .then(() => navigate(url))
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
          text={temp[MasterDataId.CUSTOMER]?.name}
        />
        <Cell
          label="选择商品"
          showArrow
          onClick={() => clickSelectMasterData(MasterDataId.PRODUCT)}
          text={temp[MasterDataId.PRODUCT]?.name}
        />
      </Cell.Group>
    </Page>
  )
}

export default Index
