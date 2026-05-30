import { createStore } from "zustand/vanilla";

type NavigationState = {
    isOpen: boolean;
    activeLink: string;
}

type Actions = {
    setActiveLink: (link: string) => void;
    openDrawer: () => void;
    closeDrawer: () => void;
    toggleDrawer: () => void;
}

export type NavigationStore = NavigationState & Actions;

const defaultNavigationState: NavigationState = {
    isOpen: false,
    activeLink: "/home",
}

export const createNavigationStore = (initialState: NavigationState = defaultNavigationState) => {
    return createStore<NavigationStore>((set) => ({
        ...initialState,
        setActiveLink: (link: string) => set({ activeLink: link }),
        openDrawer: () => set({ isOpen: true }),
        closeDrawer: () => set({ isOpen: false }),
        toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
    }));
}