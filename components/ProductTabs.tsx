"use client";
import React from "react";
import { useProductTab } from "./ProductTabContext";
import { productTabs } from "@/constants/data";

const ProductTabs = () => {
  const { activeTab, setActiveTab } = useProductTab();

  return (
    <div
      className="flex space-x-1 rounded-xl bg-shop_dark_green/10 p-1"
      role="tablist"
    >
      {productTabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`w-full rounded-lg py-2.5 text-xs md:text-sm leading-5 
              font-medium tracking-wide ring-white ring-offset-2
             ring-offset-shop_dark_green focus:outline-none focus:ring-2
              hover:text-shop_dark_green
            ${
              activeTab === tab.key
                ? "bg-white text-shop_dark_green border-b-transparent font-semibold"
                : "text-darkColor"
            }
            focus:outline-none transition-colors`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProductTabs;
