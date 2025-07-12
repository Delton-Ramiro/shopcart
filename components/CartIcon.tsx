"use client";
import useStore from "@/store";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

export const CartIcon = () => {
  const { items } = useStore();
  return (
    <Link className="group relative" href={"/cart"}>
      <ShoppingBag className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        {items?.length ? items?.length : 0}
      </span>
    </Link>
  );
};
