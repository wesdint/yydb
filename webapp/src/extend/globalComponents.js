import Vue from 'vue'
import BmLoading from '../components/base/BmLoading'
import BmPageMain from '../components/base/BmPageMain'

export default {
  register () {
    Vue.component(BmPageMain.name, BmPageMain)
    Vue.$bmloading = Vue.prototype.$bmloading = BmLoading
  }
}
