"use client";
import React from "react";
import { useProductTab } from "./ProductTabContext";
import { Product } from "@/sanity.types";

const ProductTabContent = ({
  product,
}: {
  product: Product | null | undefined;
}) => {
  const { activeTab } = useProductTab();

  return (
    <div className="mt-10">
      <div className="rounded-xl bg-white py-3 space-y-4">
        {activeTab === "description" && (
          <div>
            <p className="mt-1 text-sm text-gray-600 whitespace-pre-line">
              {product?.description}
            </p>
          </div>
        )}
        {activeTab === "additional" && (
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Weight
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product?.weight && `${product?.weight} (kg)`}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Dimensions
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product?.dimensions && `${product?.dimensions} (cm)`}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
            <p>No reviews yet. Be the first to write a review.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabContent;
