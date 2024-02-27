"use client"

import { useWindowWidth } from "@/utils/customHooks/useWindowWidth"
import Product from "./Product"
import { useEffect } from "react"
import { register } from "swiper/element/bundle"
import { SwiperOptions } from "swiper/types"
import { Swiper, SwiperSlide } from "swiper/react"

export default function RenderProduct({
  product,
}: {
  product: collectionType
}) {
  const windowWidth = useWindowWidth()

  useEffect(() => {
    register()
  }, [])

  // Object with parameters
  const params: SwiperOptions = {
    autoplay: {
      delay: 3000,
    },
    navigation: {
      enabled: true,
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 8,
    slidesPerView: 4,
  }

  return windowWidth > 1024 ? (
    <div className="relative product w-[calc(100%-240px)] mr-0 lg:static ml-auto p-0 z-10 overflow-hidden">
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <Swiper
        {...params}
        className="relative flex transition-transform w-full h-full z-10"
      >
        {product.items.map((item) => (
          <SwiperSlide key={item.uuid} className="relative">
            <Product item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-x-2 gap-y-6 items-start w-full">
      {product.items.map((item) => (
        <Product key={item.uuid} item={item} />
      ))}
    </div>
  )
}
