import Vue from 'vue'
import loading from '../components/base/loading'
import pageMain from '../components/base/pageMain'
import { Swipe, SwipeItem } from 'mint-ui'

export default {
  register () {
    Vue.component(pageMain.name, pageMain)
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
    Vue.$loading = Vue.prototype.$loading = loading
  }
}
