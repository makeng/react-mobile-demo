import imgKing from './imgs/avatar_king.jpeg'
import imgKun from './imgs/avatar_kun.png'
import imgJohn from './imgs/avatar_john.png'

export enum MasterDataId {
  CUSTOMER,
  PRODUCT,
}

function createMasterDataItem(id: string, name: string, avatar: string) {
  return {
    id,
    name,
    avatar,
  }
}

const CUSTOMER_LIST = [
  createMasterDataItem('1', '大力王', imgKing),
  createMasterDataItem('2', '张威客', imgJohn),
  createMasterDataItem('3', '蔡徐坤', imgKun),
]

const PRODUCT_LIST = [
  createMasterDataItem('1', '篮球','🏀'),
  createMasterDataItem('2', '鸡肉','🐔'),
  createMasterDataItem('3', '背带裤','👖'),
]

export function getMasterDataList(masterDataId: MasterDataId) {
  const mapping = {
    [MasterDataId.CUSTOMER]: CUSTOMER_LIST,
    [MasterDataId.PRODUCT]: PRODUCT_LIST,
  }
  return mapping[masterDataId] ?? []
}
