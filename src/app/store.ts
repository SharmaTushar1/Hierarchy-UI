import { create } from 'zustand';

interface Type {
  employees: employee[];
  setEmployees: (newValue: employee[]) => void;
  positions: string[];
}

export const useStore = create<Type>((set) => ({
  employees: JSON.parse(localStorage.getItem('employees') as string) || [],
  setEmployees: (newValue: employee[]) => set({employees: newValue}),
  positions: ['CEO','Head of Staff','Head of Engineering','Head of Design','Team Leader','Team Member'],
}))
