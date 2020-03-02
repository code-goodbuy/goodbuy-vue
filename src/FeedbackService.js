import Api from '@/Api'

export default {
  getFeedback (params) {
    return Api().get(process.env.VUE_APP_FEEDBACK_API_URL + params.barcode)
  },
  getFeedbackResult (params) {
    return Api().get(process.env.VUE_APP_RESULT_API_URL + params.barcode)
  },
  getCategories () {
    return Api().get(process.env.VUE_APP_CATEGORIES_API_URL)
  },
  postValidation (barcode, upvote, donwvote) {
    return Api().post(process.env.VUE_APP_PRODUCT_VALIDATION_API_URL, {
      'barcode': barcode,
      'upvote-counter': upvote,
      'downvote-counter': donwvote
    })
  },
  updateProduct(product) {
    console.log( process.env.VUE_APP_UPDATE_PRODUCT_API_URL, product);
    return Api().post( process.env.VUE_APP_UPDATE_PRODUCT_API_URL, product )
  },
}
