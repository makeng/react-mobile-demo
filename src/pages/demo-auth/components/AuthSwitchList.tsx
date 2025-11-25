import { Cell, Loading, Switch } from '@arco-design/mobile-react'
import { AuthItem, AuthKey, fetchAuthDataList, postAuthDataItem } from '@/pages/demo-auth/service'
import React, { useEffect, useState } from 'react'

interface Props {
  onChange(): void;
}

const Index: React.FC<Props> = (props) => {
  const [loading, setLoading] = useState(false)
  const [authDataList, setAuthDataList] = useState<AuthItem[]>([])

  useEffect(() => {
    setLoading(true)
    fetchAuthDataList().then(setAuthDataList).finally(() => setLoading(false))
  }, [])


  function changeSwitch(key: AuthKey, on: boolean) {
    setLoading(true)
    setAuthDataList(prevList => prevList.map(item => {
      return item.key === key ? { ...item, value: on }
        : item
    }))
    postAuthDataItem(key, on)
      .then(props.onChange)
      .finally(() => setLoading(false))
  }

  return (
    <Cell.Group
      className="mb-4"
      header={<><span className="inline-block mr-2">权限开关</span>{loading && <Loading />}</>}
    >
      {authDataList.map(item =>
        <Cell key={item.key} label={item.name}>
          <Switch
            checked={item.value}
            onChange={(on) => changeSwitch(item.key as AuthKey, on)}
          />
        </Cell>,
      )}
    </Cell.Group>
  )
}

export default Index
