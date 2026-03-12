import { create } from "zustand";

const useStore = create<any>((set) => ({
  modal1: false,
  setModal1: (value: boolean) => set({ modal1: value }), 
  toggleModal1: () => set((state: { modal1: boolean; }) => ({ modal1: !state.modal1 })), 
}));

export default useStore;