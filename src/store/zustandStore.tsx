/* eslint-disable prettier/prettier */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FilterStore = {
  filter: string;
  setFilter: (f: string) => void;
};

export const zustandStore = create<FilterStore>()(
    persist(
        (set) => ({
            filter: "",
            setFilter: (f) => set({ filter: f }),
            
        }),
        {
        name: "filter-storage", 
        }
    ));
