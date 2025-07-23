'use client'

import { useEffect, useState } from 'react'
import { StoreApi, UseBoundStore } from 'zustand'

type PersistMetadata = {
  persist: {
    setOptions: (options: any) => void
    getOptions: () => any
    hasHydrated: () => boolean
    onHydrate: (fn: () => void) => () => void
    onFinishHydration: (fn: () => void) => () => void
  }
}

export const useHydration = <T extends object>(
  boundStore: UseBoundStore<StoreApi<T>> & PersistMetadata
) => {
  const isClient = typeof window !== 'undefined'
  const [hydrated, setHydrated] = useState(() =>
    isClient ? boundStore.persist?.hasHydrated?.() ?? false : false
  )
  useEffect(() => {
    const unsubHydrate = boundStore.persist.onHydrate(() => setHydrated(false))
    const unsubFinishHydration = boundStore.persist.onFinishHydration(() => setHydrated(true))
    setHydrated(boundStore.persist.hasHydrated())

    return () => {
      unsubHydrate()
      unsubFinishHydration()
    }
  }, [boundStore])

  return hydrated
}
