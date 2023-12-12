import { create } from "zustand";

interface UseQuickActionsProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useQuickActions = create<UseQuickActionsProps>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
