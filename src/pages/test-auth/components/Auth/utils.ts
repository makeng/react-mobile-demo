/*----------------------------------------------------------------------------------
* desc: 模拟接口
* ----------------------------------------------------------------------------------*/
import { sleep } from 'radash'
import { InteractionDelay } from '@/utils/ui/ux'

export enum AuthKey {
  CHECK,
  EDIT,
  DELETE,
}

class AuthData {
  private list = [
    {
      key: AuthKey.CHECK,
      name: '查看',
      value: true,
    },
    {
      key: AuthKey.EDIT,
      name: '编辑',
      value: true,
    },
    {
      key: AuthKey.DELETE,
      name: '删除',
      value: true,
    },
  ]
  getList() {
    return this.list
  }
  setItemValue(key: AuthKey, value: boolean) {
    const item = this.list.find((item) => item.key === key)
    if (item) {
      item.value = value
    }
    console.log('权限数据异步修改：', this.list)
  }
  getItem(key: AuthKey) {
    return this.list.find((item) => item.key === key)
  }
}

const authData = new AuthData()

export function fetchAuthDataList() {
  return sleep(InteractionDelay.MOCK_REQUEST).then(() => authData.getList())
}

export function postAuthDataItem(key: AuthKey, value: boolean) {
  return sleep(InteractionDelay.MOCK_REQUEST).then(() => {
    authData.setItemValue(key, value)
  })
}
