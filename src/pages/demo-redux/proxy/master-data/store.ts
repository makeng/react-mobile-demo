import { MasterDataId } from '@/pages/demo-redux/utils'
import { createObservable } from '@/packages/observer'

const temp: Partial<Record<MasterDataId, any>> = {}
export const tempObservable = createObservable(temp)
