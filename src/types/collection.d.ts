type priceInfoType = {
  price: number
  discountPrice: number
  discountRate: number
}

type discountsType = {
  id: number
  name?: string
  type: string
  calcMethod: string
  value: number
  activeFrom?: string
  activeTo?: string
  qty: number
  remain?: string
}

type mediaType = {
  seq: number
  type: string
  uri: string
  mimeType: string
  deviceType?: string
}

type thumbnailType = {
  createdAt: string
  updatedAt: string
  deletedAt?: string
  uuid: string
  mimeType: string
  uri: string
  fileName: string
  objectKey: string
  deviceType?: string
  collectionId: number
  seq: number
  itemKey?: string
  type: string
}

type tagType = {
  createdAt: string
  updatedAt: string
  deletedAt?: string
  id: number
  code: string
  name: string
  description?: string
  type: string
}

type taggingsType = {
  createdAt: string
  updatedAt: string
  deletedAt?: string
  collectionId: 1923
  tagId: number
  isOpen: true
  tag: tagType
}

type publicationType = {
  id: number
  title: string
  code: string
  productId: number
  prdType: number
  detailEntity: string
  content: string
  offeringType: string
  rating: number
  isExistResidual: boolean
  isAdult: number
  preface: string
  prefaceIconUrl: string
  productName: string
  brandName: string
  media: mediaType[]
  isTrial: boolean
  tagsOnImage: string[]
  tagsOnDesc: string[]
  priceInfo: priceInfoType
  discounts: discountsType[]
  applyCoupon: boolean
}

type itemType = {
  createdAt: string
  updatedAt: string
  deletedAt?: string
  uuid: string
  name: string
  body?: string
  collectionId: number
  key: string
  seq: number
  entityType: string
  entityId: number
  optionKey?: string
  publication: publicationType
  prdType: number
}

type collectionType = {
  id: number
  type: string
  code: string
  title: string
  subtitle: string
  description: string
  trialPeriod?: string
  installmentPrice?: string
  installmentPeriod?: string
  rating: number
  startDate?: string
  endDate?: string
  viewType: string
  createdAt: string
  items: itemType[]
  media: mediaType[]
  thumbnail: thumbnailType
  taggings: taggingsType[]
}

type productsType = {
  items: collectionType[]
  totalCount: number
}
