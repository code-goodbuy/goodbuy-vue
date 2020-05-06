import Api from "@/Api"

export default {
  getFeedback(params) {
    const user_id = typeof params.user_id !== "undefined" ? params.user_id : ""
    return Api().get(process.env.VUE_APP_FEEDBACK_API_URL + params.barcode, {
      params: {
        user_id: user_id,
      },
    })
  },
  getFeedbackResult(params) {
    const user_id = typeof params.user_id !== "undefined" ? params.user_id : ""
    return Api().get(process.env.VUE_APP_RESULT_API_URL + params.barcode, {
      params: {
        user_id: user_id,
      },
    })
  },
  getCategories() {
    return Api().get(process.env.VUE_APP_CATEGORIES_API_URL)
  },
  getFridgeKarmaResult(params) {
    const user_id = typeof params.user_id !== "undefined" ? params.user_id : ""
    return Api().get(process.env.VUE_APP_FRIDGE_KARMA_FEEDBACK_API_URL, {
      params: {
        user_id: user_id,
        barcodes: params.barcodes,
      },
    })
  },
  getBlacklist(params) {
    return Api().get(process.env.VUE_APP_BLACKLIST_API_URL + params.user_id,
    {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
      }
    })
  },
  putBlacklist(params) {
    return Api().put(process.env.VUE_APP_BLACKLIST_API_URL + params.user_id + '/',
    {
      'user_id': params.user_id,
      'blacklist': params.blacklist.join()
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
      },
    })
  },
  postBlacklist(params) {
    return Api().post(process.env.VUE_APP_BLACKLIST_API_URL,
    {
      'user_id': params.user_id,
      'blacklist': params.blacklist
    },
    {
      headers:{
        Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
      },
    })
  },
  postValidation(barcode, upvote, downvote) {
    return Api().get(
      process.env.VUE_APP_PRODUCT_API_URL +
        barcode +
        process.env.VUE_APP_PRODUCT_VOTE_API_URL,
      {
        params: {
          barcode: barcode,
          vote: upvote ? "upvote" : downvote ? "downvote" : "",
        }
      },
    )
  },
  updateProduct(name, brand, category, barcode) {
    // TODO add category to product and product input
    return Api().put(
      process.env.VUE_APP_PRODUCT_API_URL + barcode + "/",
      {
        name: name,
        brand: brand,
        // category: category,
        barcode: barcode,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt_token')}`
        },
      }
    )
  },
}
