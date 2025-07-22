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

const useQueryStore = create(
  persist(
    (set) => ({
      RESULTS: [],
      ITEMSRL: [],
      requestId: 0,
      addResultsStore: (data) =>
        set((state) => {
          if (!data) return {}

          return {
            RESULTS: {
              ...state.RESULTS,
              hits: data,
            },
          }
        }),
    }),
    {
      name: 'query-storez',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        RESULTS: state?.RESULTS,
        requestId: state?.requestId,
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

export default useQueryStore