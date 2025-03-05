import { atom } from 'jotai'
import { MasterDataId } from '@/pages/test-redux/utils'

export const tempAtom = atom<Record<MasterDataId, Obj>>({})
