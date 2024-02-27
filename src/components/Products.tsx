import { Fragment } from "react"
import dynamic from "next/dynamic"

export default async function Products({
  products,
}: {
  products: collectionType | collectionType[]
}) {
  const RenderProduct = dynamic(() => import("@/components/RenderProduct"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
  })

  const ProductsRender = (product: collectionType) => (
    <Fragment key={product.id}>
      <div className="pr-10 pb-5 w-full lg:w-60 lg:h-80 lg:absolute bg-white">
        <h3 className="text-lg lg:text-2xl font-semibold text-gray-700 break-words text-ellipsis leading-6 lg:leading-8 overflow-hidden">
          {product.title}
        </h3>
        <p className="mt-2 w-full text-xs font-medium text-gray-400 break-words text-ellipsis leading-5 overflow-hidden">
          {product.subtitle}
        </p>
      </div>
      <RenderProduct product={product} />
    </Fragment>
  )

  if (Array.isArray(products))
    return products.map((product) => (
      <div
        key={product.id}
        className="relative flex flex-col lg:flex-row mt-12 lg:mt-14 lg:mx-auto px-5 lg:px-0 lg:max-w-5xl w-full overflow-hidden"
      >
        {ProductsRender(product)}
      </div>
    ))
  else if (products !== null && typeof products === "object")
    return (
      <div className="relative flex flex-col lg:flex-row mt-12 lg:mt-14 lg:mx-auto px-5 lg:px-0 lg:max-w-5xl w-full overflow-hidden">
        {ProductsRender(products)}
      </div>
    )

  return "Product is empty"
}
