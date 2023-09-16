import { create } from 'zustand';

interface Type {
  employees: Employees;
  setEmployees: (newValue: Employees) => void;
  positions: string[];
}

export const useStore = create<Type>((set) => ({
  employees: JSON.parse(localStorage.getItem('employees') as string) || {},
  setEmployees: (newValue: Employees) => set({employees: newValue}),
  positions: ['CEO','Head of Staff','Head of Engineering','Head of Design','Team Leader','Team Member'],
}))
