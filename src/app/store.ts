import { create } from 'zustand';

interface Type {
  employees: employee[];
  setEmployees: (newValue: employee[]) => void;
  positions: position[];
  setPositions: (newValue: position[]) => void;
}

export const useStore = create<Type>((set) => ({
  employees: JSON.parse(localStorage.getItem('employees') as string) || [],
  setEmployees: (newValue: employee[]) => set({employees: newValue}),
  positions: [{id:1, name:'CEO'},{id:2, name:'Head of Staff'},{id:3, name:'Head of Engineering'},{id:4, name:'Head of Design'},{id:5, name:'Team Leader'},{id:6, name:'Team Member'},],
  setPositions: (newValue: position[]) => set({positions: newValue}),
}))
