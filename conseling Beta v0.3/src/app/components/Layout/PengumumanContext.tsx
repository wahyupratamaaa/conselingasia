// PengumumanContext.tsx
"use client"
import React, { createContext, useContext, useState } from "react";

interface Pengumuman {
  no: number;
  judul: string;
  tanggal: string;
  gambar: string;
  id?: string;
}

interface PengumumanContextProps {
  pengumuman: Pengumuman[];
  setPengumuman: React.Dispatch<React.SetStateAction<Pengumuman[]>>;
}

const PengumumanContext = createContext<PengumumanContextProps | undefined>(undefined);

export const PengumumanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);

  return (
    <PengumumanContext.Provider value={{ pengumuman, setPengumuman }}>
      {children}
    </PengumumanContext.Provider>
  );
};

export const usePengumuman = () => {
  const context = useContext(PengumumanContext);
  if (context === undefined) {
    throw new Error("usePengumuman must be used within a PengumumanProvider");
  }
  return context;
};
