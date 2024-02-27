import Menus from "@/components/Menus"
import MobileNav from "@/components/MobileNav"
import Navbar from "@/components/Navbar"
import Products from "@/components/Products"
import ProductsContainer from "@/components/ProductsContainer"
import dynamic from "next/dynamic"

const Carousel = dynamic(() => import("@/components/Carousel"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})

export default function Home() {
  return (
    <main className="bg-gray-50">
      <div className="m-auto w-full min-w-[360px] max-w-md lg:max-w-none bg-white">
        <Navbar />
        <div className="mx-auto my-0 w-full min-h-[calc(100vh-55px)]">
          <div className="w-full">
            <Carousel />
            <div className="flex justify-center mt-0 lg:mt-10 px-5">
              <Menus />
            </div>
            <ProductsContainer />
          </div>
          <MobileNav />
        </div>
      </div>
    </main>
  )
}
