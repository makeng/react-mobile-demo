/*----------------------------------------------------------------------------------
* desc: 模拟接口
* ----------------------------------------------------------------------------------*/
import { clone, set, sleep } from 'radash'
import { InteractionDelay } from '@/utils/ui/ux'

export enum AuthKey {
  CHECK,
  EDIT,
  DELETE,
}

export class AuthItem {
  constructor(public key: AuthKey, public name: string, public value: boolean) {}
}

export const DEFAULT_AUTH_DATA_LIST = [
  new AuthItem(AuthKey.CHECK, '查看', true),
  new AuthItem(AuthKey.EDIT, '编辑', true),
  new AuthItem(AuthKey.DELETE, '删除', true),
]

class AuthData {
  private list = structuredClone(DEFAULT_AUTH_DATA_LIST)
  getList() {
    return clone(this.list)
  }
  setItemValue(key: AuthKey, value: boolean) {
    this.list = this.getList().map((item) =>
      item.key === key ? set(item, 'value', value) : item,
    )
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
