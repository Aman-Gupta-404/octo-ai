import { create } from "zustand";

interface useProModalStroe {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const usePorModal = create<useProModalStroe>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
