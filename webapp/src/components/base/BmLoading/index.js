import Vue from 'vue'
import bmLoading from './BmLoading'

const BmLoading = Vue.extend(bmLoading)
let instance

export default {
  open (flag = true) {
    if (!instance) {
      instance = new BmLoading({
        el: document.createElement('div')
      })
      document.body.appendChild(instance.$el)
    }
    Vue.nextTick(() => {
      instance.isAnimate = flag
      instance.open()
    })
  },
  close () {
    if (!instance) return
    instance.close()
  }
}
