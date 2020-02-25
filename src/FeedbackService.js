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
  postValidation (params) {
    return Api().post(process.env.VUE_APP_PRODUCT_VALIDATION_API_URL + params)
  },
}
