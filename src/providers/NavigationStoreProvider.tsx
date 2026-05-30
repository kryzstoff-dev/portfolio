'use client';

import { createNavigationStore, NavigationStore } from "@/stores/navigationStore";
import { createContext, useContext, useState, type ReactNode } from "react";
import { useStore } from "zustand";

export type NavigationStoreApi = ReturnType<typeof createNavigationStore>;

export const NavigationStoreContext = createContext<NavigationStoreApi | undefined>(undefined);

type NavigationStoreProviderProps = {
    children: ReactNode;
}

export const NavigationStoreProvider = ({ children }: NavigationStoreProviderProps) => {
    const [store] = useState(() => createNavigationStore());

    return (
        <NavigationStoreContext.Provider value={store}>
            {children}
        </NavigationStoreContext.Provider>
    );
}

export const useNavigationStore = <T,>(
    selector: (state: NavigationStore) => T,
): T => {
    const navigationStoreContext = useContext(NavigationStoreContext);
    if (!navigationStoreContext) {
        throw new Error("useNavigationStore must be used within a NavigationStoreProvider");
    }
    return useStore(navigationStoreContext, selector);
};
