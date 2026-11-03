"use client";

import React, { createContext, useContext } from "react";

interface InstallContextType {
  isInstallable: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  promptInstall: () => Promise<void>;
  isIOSModalOpen: boolean;
  setIsIOSModalOpen: (open: boolean) => void;
  dismissBanner: () => void;
  showBanner: boolean;
}

const defaultContext: InstallContextType = {
  isInstallable: false,
  isInstalled: false,
  isIOS: false,
  promptInstall: async () => {},
  isIOSModalOpen: false,
  setIsIOSModalOpen: () => {},
  dismissBanner: () => {},
  showBanner: false,
};

const InstallContext = createContext<InstallContextType>(defaultContext);

export function InstallProvider({ children }: { children: React.ReactNode }) {
  return (
    <InstallContext.Provider value={defaultContext}>
      {children}
    </InstallContext.Provider>
  );
}

// Always safely return defaultContext without throwing any error
export function useInstall(): InstallContextType {
  const context = useContext(InstallContext);
  return context || defaultContext;
}

