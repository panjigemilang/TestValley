"use client"

import { useWindowWidth } from "@/utils/customHooks/useWindowWidth"
import Image from "next/image"

export default function Menu({ src, text }: { src: string; text: string }) {
  const windowWidth = useWindowWidth()

  return (
    <div className="flex flex-col items-center p-0 lg:w-16 lg:my-0 lg:mx-4 w-full cursor-pointer">
      {windowWidth > 1024 ? (
        <Image src={src} width={62} height={62} alt="menu" />
      ) : (
        <Image src={src} width={48} height={48} alt="menu" />
      )}
      <p className="w-full mt-2 text-[11px] tracking-tight text-center break-words leading-4">
        {text}
      </p>
    </div>
  )
}
