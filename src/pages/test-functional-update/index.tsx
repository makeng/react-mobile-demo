import React, { useState } from 'react'
import { Page } from '@/components'
import { Button, Cell, Input, NoticeBar } from '@arco-design/mobile-react'
import { shuffle } from 'radash'

// 列表的项
class Item {
  id: number
  value = '0'
  constructor() {
    this.id = new Date().getTime()
  }
}

const Index: React.FC = () => {
  const [list1, setList1] = useState<Item[]>(() => [new Item()])
  const [list2, setList2] = useState<Item[]>(() => [new Item()])
  function clickAllAdd() {
    // 普通更新
    const nextList1 = list1.map(item => {
      item.value = (Number(item.value) + 1).toString()
      return item
    })
    setList1(nextList1)
    // 函数式更新
    setList2(prev => prev.map(item => {
      item.value = (Number(item.value) + 1).toString()
      return item
    }))
  }
  function clickPushList() {
    // 普通更新
    const nextList1 = [...list1, new Item()]
    setList1(nextList1)
    // 函数式更新
    setList2(prev => [...prev, new Item()])
  }
  function clickExecAll() {
    const randomizedEvents = shuffle([clickAllAdd, clickPushList])
    randomizedEvents.forEach(fn => fn())
    // new PromiseQueue(randomizedEvents) // 即使是 Promise 也救不了普通更新的混乱
  }
  return (
    <Page title="普通更新 vs 函数式更新">
      <div className="flex gap-0.5 p-0.5">
        <Button onClick={clickAllAdd}>全部数量 +1</Button>
        <Button onClick={clickPushList}>增加长度</Button>
        <Button onClick={clickExecAll}>都执行</Button>
      </div>
      <div className="flex">
        <Cell.Group className="w-1/2">
          <NoticeBar>普通更新无法应对多个事件同时发生</NoticeBar>
          {list1.map(({ id, value }) => (
            <Cell key={id} label="输入">
              <Input className="w-6" value={value} placeholder="数量"
                     inputStyle={{ textAlign: 'right' }}
              />
            </Cell>
          ))}
        </Cell.Group>
        <Cell.Group className="w-1/2">
          <NoticeBar>函数式更新可以应对！</NoticeBar>
          {list2.map(({ id, value }) => (
            <Cell key={id} label="输入">
              <Input className="w-6" value={value} placeholder="数量"
                     inputStyle={{ textAlign: 'right' }}
              />
            </Cell>
          ))}
        </Cell.Group>
      </div>
    </Page>
  )
}

export default Index
