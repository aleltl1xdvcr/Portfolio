
'use client'

// import { create } from 'zustand';
// import { createJSONStorage, persist } from 'zustand/middleware';


// const useLanguageStore = create(persist(
//   (set) => ({
//     language: null,
//     setLanguage: (lang) => set({ language: lang }),

//   }),
//   {
//     name: 'language-storage',
//     storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
//     partialize: (state) => ({ foo: state.foo }),
//     merge: (c, p) => {console.log('PERSISTED:', p, 'CURRENT:', c)},
//     onRehydrateStorage: (state) => {
//       console.log('hydration starts', state)

//       // optional
//       return (state, error) => {
//         if (error) {
//           console.log('an error happened during hydration', error)
//         } else {
//           console.log('hydration finished')
//         }
//       }}
//   }
// ));

// export default useLanguageStore

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useLanguageStore = create()(
  persist(
    (set, get) => ({
      language: 'es',
      setLanguage: (lang) => set({ language: lang }),
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
