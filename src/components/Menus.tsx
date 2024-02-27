import { getMenus } from "@/services"
import Menu from "./Menu"

export default async function Menus() {
  const menus: menuType[] = await getMenus()

  return (
    <div className="grid grid-cols-5 gap-x-3 gap-y-6 lg:flex lg:gap-x-0 lg:gap-y-0 py-4 w-full justify-between lg:justify-center lg:items-start overflow-hidden">
      {menus.map((menu) => (
        <Menu key={menu.mainShortcutId} src={menu.imageUrl} text={menu.title} />
      ))}
    </div>
  )
}
