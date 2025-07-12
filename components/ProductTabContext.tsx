"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type TabContextType = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProductTabContext = createContext<TabContextType | undefined>(undefined);

export const ProductTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <ProductTabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ProductTabContext.Provider>
  );
};

export const useProductTab = () => {
  const context = useContext(ProductTabContext);
  if (!context)
    throw new Error("useProductTab must be used within ProductTabProvider");
  return context;
};
