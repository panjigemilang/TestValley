"use client"

import { useEffect, useState } from "react"
import { SwiperOptions } from "swiper/types"
import { register } from "swiper/element/bundle"
import { getBanner } from "@/services"
import Image from "next/image"
import "swiper/css/bundle"
import { Swiper, SwiperSlide } from "swiper/react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

export default function Carousel() {
  const [banners, setbanners] = useState<bannerType[]>([])

  const getBanners: () => Promise<void> = async () =>
    await getBanner().then((res) => {
      if (!res.error) setbanners(res)
    })

  useEffect(() => {
    getBanners()
    // Register Swiper web component
    register()
  }, [])

  // Object with parameters
  const params: SwiperOptions = {
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      1024: {
        centeredSlides: true,
        navigation: {
          enabled: true,
          nextEl: ".carousel-button-next",
          prevEl: ".carousel-nav-prev",
        },
        spaceBetween: 32,
      },
    },
    loop: true,
    pagination: {
      enabled: true,
      clickable: true,
      type: "bullets",
    },
    slidesPerView: 1,
  }

  return (
    <Swiper
      {...params}
      className="relative flex transition-transform w-full h-48 lg:h-96 z-10"
    >
      <div className="carousel-nav-prev">
        <IoChevronBack />
      </div>
      <div className="carousel-nav-next">
        <IoChevronForward />
      </div>
      {banners.map((banner) => (
        <SwiperSlide key={banner.mainBannerId} className="relative h-full">
          <Image
            src={banner.mobileImageUrl}
            alt="banner_image"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1024) 50vw, 33vw"
            loading="lazy"
            className="object-contain"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
