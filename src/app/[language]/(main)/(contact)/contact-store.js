import { create } from 'zustand'

const useContactStore = create((set, get) => ({
    translate: 0,
    opacity: 0,
    run: (v) => set({ translate: v }),
    runOpacity: () => {
        const op = get().opacity
        const value = op === 0 ? 1 : op === 1 ? 0 : null
        set({ opacity:  value })
        if (value === 0) {
            const el = document.getElementById('successfully-message-el')
            el.classList.add('hidden')
        }
    },
    runValuePercent: null,
    setRunValuePercent: (value) => set({ runValuePercent: value }),
    isActiveSecondState: false,
    setIsActiveSecondState: (v) => set({ isActiveSecondState: v })
}))

export default useContactStore