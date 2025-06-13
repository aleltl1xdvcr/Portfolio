'use client'

import { produce } from 'immer'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { projects } from './data'

const cinema = projects.map(a => ({
  lang: a.language,
  content: a.content.map(b => ({
    [b.title]: false,
    img: b.img,
    url: b.url,
  }))
}))

export const useLanguageStore = create()(
  persist(
    (set, get) => ({
      language: 'es',
      setLanguage: (lang) => set({ language: lang }),
      
      lenis: null,
      setLenis: (lenisInstance) => set({ lenis: lenisInstance }),

      cinema: cinema,
      setCinema: (title) =>
        set(
          produce(draft => {    
            const obj = draft.cinema.find(i => i.lang === get().language).content.find(o => Object.keys(o)[0] === title)
            if (obj) {
              const key = Object.keys(obj)[0]
              obj[key] = !obj[key]
            }
          })
        )
    }),
    {
      name: 'storage', 
      storage: createJSONStorage(() => localStorage), 
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['cinema', 'lenis'].includes(key)),
        ),
    },
  ),
)
