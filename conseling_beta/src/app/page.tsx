// src/app/components/Layout/AppLayout.tsx
import { ReactNode } from "react";
import { PengumumanProvider } from "../app/components/Layout/PengumumanContext";
import Landing from "../app/Landing/page" ;

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <PengumumanProvider>
      {children}
      <Landing />
    </PengumumanProvider>
  );
};

export default AppLayout;
