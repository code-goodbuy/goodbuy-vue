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
  getFridgeKarmaResult () {
    return Api().get(process.env.VUE_APP_FRIDGE_KARMA_FEEDBACK_API_URL)
  },
  postValidation (barcode, upvote, donwvote) {
    return Api().post(process.env.VUE_APP_PRODUCT_VALIDATION_API_URL, {
      'barcode': barcode,
      'upvote-counter': upvote,
      'downvote-counter': donwvote
    })
  },
  updateProduct(inputName, inputBrand, inputCategory, inputCode) {
    return Api().post( process.env.VUE_APP_UPDATE_PRODUCT_API_URL, {
      name: inputName,
      brand: inputBrand,
      category: inputCategory,
      code: inputCode,
    } )
  },
}
