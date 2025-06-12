'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

function mergeFn(current, persisted) {
  const result = {}
  const a = { ...current }
  const b = { ...persisted }

  Object.entries(a).forEach((i, n) => {
    if (typeof i[1] === 'function') {
      const x = i[0]
      const y = i[1]

      result[x] = y
    }
  })

  Object.entries(b).forEach((i, n) => {
    if (typeof i[1] !== 'function') {
      const x = i[0]
      const y = i[1]

      result[x] = y
    }
  })

  return result
}

const useQueryStorerRl = create(
  persist(
    (set) => ({
      ITEMSRL: [],
      operator: 'OR',
      name: 'ASC',
      count: 'ASC',
      isRefined: 'ASC',
      setOperator: (value) => set({ operator: value }),
      setName: (value) => set({ name: value }),
      setCount: (value) => set({ count: value }),
      setIsRefined: (value) => set({ isRefined: value }),
      addItemsRl: (data) =>
         set(() => ({
          ITEMSRL: data, 
          })),
    }),
    {
      name: 'query-store-rl',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        ITEMSRL: state?.ITEMSRL,
      }),
      merge: (persistedState, currentState) =>
        mergeFn(currentState, persistedState),
      onRehydrateStorage: (state) => {
        return (state, error) => {
          if (error) {
            console.log('an error happened during hydration', error)
          } 
        }
      },
    }
  )
)

export default useQueryStorerRl