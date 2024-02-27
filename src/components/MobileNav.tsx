"use client"

import { useWindowWidth } from "@/utils/customHooks/useWindowWidth"
import MobileNavItem from "./MobileNavItem"

export default function MobileNav() {
  const windowWidth = useWindowWidth()
  const navItems = [
    {
      imageUri: "https://placehold.co/21",
      text: "홈",
    },
    {
      imageUri: "https://placehold.co/21",
      text: "검색",
    },
    {
      imageUri: "https://placehold.co/21",
      text: "카테고리",
    },
    {
      imageUri: "https://placehold.co/21",
      text: "좋아요",
    },
    {
      imageUri: "https://placehold.co/21",
      text: "마이페이지",
    },
  ]

  return (
    windowWidth < 1024 && (
      <div className="flex fixed bottom-0 z-10 items-center justify-center bg-white h-16 rounded-tl-2xl rounded-tr-2xl p-3 min-w-[360px] max-w-md w-full">
        {navItems.map((item) => (
          <MobileNavItem key={item.text} item={item} />
        ))}
      </div>
    )
  )
}
