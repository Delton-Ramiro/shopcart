import React from "react";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  classname?: string;
}

export const PriceView = ({ price, discount }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <PriceFormatter amount={price} className="text-shop_dark_green" />
      {price && discount && (
        <PriceFormatter
          amount={price + (discount * price) / 100}
          className="text-xs line-through font-normal text-shop_light_text"
        />
      )}
    </div>
  );
};
