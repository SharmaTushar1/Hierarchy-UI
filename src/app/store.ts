import { create } from 'zustand';

interface Type {
  employees: employee[]
}

export const useStore = create<Type>((set) => ({
  employees: [],
  setEmployees: (newValue: employee[]) => set({employees: newValue})
}))
