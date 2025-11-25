import { create } from 'zustand'
import { MasterDataId } from '@/pages/demo-redux/utils'

interface StoreState {
  temp: {
    [key in MasterDataId]?: any;
  };
  select: (id: MasterDataId, value: any) => void;
  reset(): void;
}

export const useMasterDataStore = create<StoreState>((set) => ({
  temp: {},
  select: (id, value) =>
    set(({ temp }) => {
      const nextTemp = {
        ...temp,
        [id]: value,
      }
      return {
        temp: nextTemp,
      }
    }),
  reset: () => set({ temp: {} }),
}))
