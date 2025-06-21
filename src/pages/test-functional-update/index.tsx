import React, { useState } from 'react'
import { Page } from '@/components'
import { Button, Cell, Input } from '@arco-design/mobile-react'
import { sleep } from 'radash'

// 列表的项
class Item {
  id: number
  value = '0'
  constructor() {
    this.id = new Date().getTime()
  }
}

const Index: React.FC = () => {
  const [list, setList] = useState<Item[]>(() => [new Item()])
  function clickAllAdd() {
    const nextList = list.map(item => {
      item.value = (Number(item.value) + 1).toString()
      return item
    })
    setList(nextList)
  }
  function clickPushList() {
    const nextList = [...list, new Item()]
    setList(nextList)
  }
  function clickExecAll() {
    const randomMs = Math.random() * 1000
    clickPushList()
    sleep(randomMs).then(clickAllAdd)
  }
  return (
    <Page title="函数式更新">
      <div className="flex gap-0.5 p-0.5">
        <Button onClick={clickAllAdd}>全部数量 +1</Button>
        <Button onClick={clickPushList}>增加长度</Button>
        <Button onClick={clickExecAll}>都执行</Button>
      </div>
      <Cell.Group>
        {list.map(({ id, value }) => (
          <Cell key={id} label="输入">
            <Input className="w-8" value={value} placeholder="数量"
                   inputStyle={{ textAlign: 'right' }}
            />
          </Cell>
        ))}
      </Cell.Group>
    </Page>
  )
}

export default Index
