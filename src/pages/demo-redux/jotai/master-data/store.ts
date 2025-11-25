import { atom } from 'jotai'
import { MasterDataId } from '@/pages/demo-redux/utils'

export const tempAtom = atom<Record<MasterDataId, Obj>>({})
