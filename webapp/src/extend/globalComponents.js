import Vue from 'vue'
import loading from '../components/base/loading'
import pageMain from '../components/base/pageMain'

export default {
  register () {
    Vue.component(pageMain.name, pageMain)
    Vue.$loading = Vue.prototype.$loading = loading
  }
}
