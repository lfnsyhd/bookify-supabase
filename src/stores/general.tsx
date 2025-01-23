import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';

interface GeneralStore {
  currentBook: any;
  setCurrentBook: (val: any) => void;

  currentIdLending: number | any;
  setCurrentIdLending: (val: number | any) => void;

  isLendingOpen: boolean;
  setIsLendingOpen: (val: boolean) => void;

  modalFormBookAction: string;
  isModalFormBookOpen: boolean;
  setIsModalFormBookOpen: (val: boolean) => void;
  setModalFormBookAction: (val: string) => void;

  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;

  resetGeneralStore: () => void;
}

export const useGeneralStore = create<GeneralStore>()(
  devtools(
    persist(
      (set) => ({
        currentBook: null,
        isLendingOpen: false,
        currentIdLending: null,
        isModalFormBookOpen: false,
        modalFormBookAction: '',
        isMenuOpen: true,
        setIsMenuOpen: (val: boolean) => set({ isMenuOpen: val }),
        setIsLendingOpen: (val: boolean) => set({ isLendingOpen: val }),
        setIsModalFormBookOpen: (val: boolean) => set({ isModalFormBookOpen: val }),
        setModalFormBookAction: (val: string) => set({ modalFormBookAction: val }),
        setCurrentIdLending: (val: number) => set({ currentIdLending: val }),
        setCurrentBook: (val: any) => set({ currentBook: val }),
        resetGeneralStore: () => set({
          currentBook: null,
          isLendingOpen: false,
          currentIdLending: null,
          isModalFormBookOpen: false,
          modalFormBookAction: '',
        })
      }),
      {
        name: 'store',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);