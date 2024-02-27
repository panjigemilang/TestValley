import Image from "next/image"

export default function Product({ item }: { item: itemType }) {
  return (
    <div className="flex w-full cursor-pointer">
      <div className="w-full h-full mr-0">
        <div className="relative w-full rounded-lg mb-2">
          <div className="absolute bottom-0 pl-1 pb-1 z-10 w-full">
            <div className="inline-block p-1 bg-teal-600 rounded-sm text-white text-xs font-medium leading-[-0.3px]">
              {item.publication.tagsOnImage[0]}
            </div>
            <div className="mt-1 -ml-1 -mb-1 p-0"></div>
          </div>
          <div className="relative h-0 pb-[100%] rounded w-full overflow-hidden">
            <Image
              src={
                item.publication.media.filter(
                  (media) => media.type === "THUMBNAIL"
                )[0]?.uri
              }
              fill={true}
              sizes="(max-width: 768px) 50vw, 33vw"
              alt="product"
              className="absolute top-0 left-0 w-full h-full object-cover rounded"
            />
          </div>
        </div>
        <p className="mt-1 h-11 text-sm break-all leading-5">
          {item.publication.productName.length > 34
            ? `${item.publication.productName.substring(0, 34)} ...`
            : item.publication.productName}
        </p>
        <div className="mt-2 text-[15px] lg:text-lg font-semibold dark:text-light-400 text-gray-700 after:content-['원'] after:font-medium after:text-[10px]">
          {item.publication.priceInfo.discountPrice && (
            <span className="text-red-500">
              {item.publication.priceInfo.discountRate}%
            </span>
          )}
          {item.publication.priceInfo.discountPrice
            ? item.publication.priceInfo.price
            : item.publication.priceInfo.discountPrice}
        </div>
        <div>
          <div className="mt-2">
            {item.publication.tagsOnDesc.length > 0 && (
              <div className="inline-block m-0 p-1 text-gray-700 bg-slate-100 font-semibold text-[10px] leading-3 text-center rounded-sm tracking-tighter">
                {item.publication.tagsOnDesc[0]}
              </div>
            )}
          </div>
          <div className="mt-2 flex text-xs font-medium text-gray-500">
            <span className="">⭐</span>
            {item.publication.rating}
          </div>
        </div>
        {item.publication.preface && (
          <div className="mt-2 text-xs px-2 py-1 inline-flex items-center border border-slate-200 rounded-sm">
            {item.publication.preface}
          </div>
        )}
      </div>
    </div>
  )
}
