import { getCollections } from "@/services"
import Products from "./Products"

export default async function ProductsContainer() {
  const products: productsType = await getCollections()
  // Destructure the first element from the array
  const [firstProduct, ...restProduct] = products.items.filter(
    (product) => product.type === "SINGLE" && product.viewType === "TILE"
  )

  return (
    <>
      <Products products={firstProduct} />
      <Products products={restProduct} />
    </>
  )
}
