import { MasterDataId } from '@/pages/test-redux/utils'
import { createObservable } from '@/packages/observer'

const temp: Partial<Record<MasterDataId, any>> = {}
export const tempObservable = createObservable(temp)
