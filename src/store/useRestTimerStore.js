import { create } from 'zustand'

const useRestTimerStore = create((set) => ({
  countdown: 120,
  restTimer: 0,
  resetSignal: 0,

  setShallowState: (partial) =>
    set((state) => ({
      ...state,
      ...partial,
    })),
  setCountdown: (value) => set({ countdown: value }),
  setRestTimer: (value) => set((prev) => ({ restTimer: value, resetSignal: prev.resetSignal + 1 })),
}))

export default useRestTimerStore
