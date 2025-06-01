import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";

export const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Grab up to 50% off on <br /> Selected Headphone
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_btn_dark_green/90 text-white px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_btn_dark_green hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner-1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};
