"use client"

import Image from "next/image"
import { PiMagnifyingGlassLight } from "react-icons/pi"
import { CiBellOn } from "react-icons/ci"

export default function Navbar() {
  const imageLoader = ({ src }: { src: string; width?: number }) => src

  return (
    <header>
      <div className="w-full bg-white">
        <div className="relative flex justify-between items-center w-full p-1 min-w-[360px] max-w-md lg:max-w-5xl mx-auto my-0 h-14 lg:h-20">
          <Image
            loader={imageLoader}
            src="https://placehold.co/125x47?text=Test+Valley"
            alt="logo"
            width={125.71}
            height={47}
            className="block ml-5 lg:mr-4 lg:w-32 lg:h-6 p-0 cursor-pointer"
          />
          <div className="relative ml-24 w-96 hidden lg:block">
            <PiMagnifyingGlassLight className="cursor-pointer absolute top-2 left-3 w-5" />
            <input
              type="search"
              name="search"
              id="search"
              placeholder="살까말까 고민된다면 검색해보세요!"
              className="bg-white pl-10 pr-10"
            />
          </div>
          <div className="flex items-center w-full justify-end">
            <CiBellOn className="w-12 h-12 p-3 cursor-pointer" />
            <PiMagnifyingGlassLight className="w-12 h-12 p-3 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  )
}
