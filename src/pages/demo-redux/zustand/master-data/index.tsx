import React from 'react'

import { Page } from '@/components'
import { Cell } from '@arco-design/mobile-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getAvatar, getMasterDataList, MasterDataId } from '@/pages/demo-redux/utils'
import { useMasterDataStore } from '@/pages/demo-redux/zustand/master-data/store'

const PAGE_TITLE = '基础资料'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const masterDataId = searchParams.get('category') as unknown as MasterDataId
  const list = getMasterDataList(masterDataId)
  // store
  const mdStore = useMasterDataStore()

  function clickSelectMasterData(item) {
    mdStore.select(masterDataId, item)
    navigate(-1)
  }

  return (
    <Page title={PAGE_TITLE}>
      <Cell.Group>
        {list.map((item) => {
            const { id, name, avatar } = item
            return (
              <Cell key={id} onClick={() => clickSelectMasterData(item)}>
                {getAvatar(avatar)}
                <span>{name}</span>
              </Cell>
            )
          },
        )}
      </Cell.Group>
    </Page>
  )
}

export default Index
