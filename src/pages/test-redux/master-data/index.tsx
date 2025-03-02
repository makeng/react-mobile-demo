import React from 'react'

import { Page } from '@/components'
import { Avatar, Cell, Tag } from '@arco-design/mobile-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getMasterDataList, MasterDataId } from '@/pages/test-redux/master-data/utils'
import { useMasterDataStore } from '@/pages/test-redux/master-data/store'

const PAGE_TITLE = '基础资料'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const masterDataId = searchParams.get('category') as unknown as MasterDataId
  const list = getMasterDataList(masterDataId)
  // store
  const select = useMasterDataStore((state) => state.select)

  function clickSelectMasterData(item) {
    select(masterDataId, item)
    navigate(-1)
  }

  function getAvatar(avatar: string) {
    const isFile = avatar.includes('.')
    const commonProps = {
      className: 'mr-1',
    }
    return isFile
      ? <Avatar src={avatar} {...commonProps} />
      : <Tag {...commonProps}>{avatar}</Tag>
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
