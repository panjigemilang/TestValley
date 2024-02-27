import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

const getBanner = () =>
  instance
    .get("main-banner/all")
    .then((res) => res.data)
    .catch(function (error) {
      if (error.response) return { error: error.response.data }
      else if (error.request)
        return {
          error,
          messages: "There's something wrong with the request.",
        }
      else return { error: true, message: error.message }
    })

const getCollections = () =>
  instance
    .get("collections?prearrangedDiscount")
    .then((res) => res.data)
    .catch(function (error) {
      if (error.response) return error.response.data
      else if (error.request)
        return {
          error,
          messages: "There's something wrong with the request.",
        }
      else return error.message
    })

const getMenus = () =>
  instance
    .get("main-shortcut/all")
    .then((res) => res.data)
    .catch(function (error) {
      if (error.response) return error.response.data
      else if (error.request)
        return {
          error,
          messages: "There's something wrong with the request.",
        }
      else return error.message
    })

export { getBanner, getCollections, getMenus }
