"use client"

import Image from "next/image"

type itemType = {
  imageUri: string
  text: string
}

export default function MobileNavItem({ item }: { item: itemType }) {
  const imageLoader = ({ src, width }: { src: string; width?: number }) => src

  return (
    <div className="text-center w-1/5 cursor-pointer">
      <Image
        loader={imageLoader}
        src={item.imageUri}
        alt={item.text}
        width={21}
        height={21}
        className="mx-auto text-xs tracking-tighter leading-3"
      />
      <p className="mt-2 text-gray-700 text-[11px] tracking-tighter leading-3">
        {item.text}
      </p>
    </div>
  )
}
