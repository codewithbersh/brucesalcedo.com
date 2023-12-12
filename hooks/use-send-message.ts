import { create } from "zustand";

interface UseSendMessageProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSendMessage = create<UseSendMessageProps>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
