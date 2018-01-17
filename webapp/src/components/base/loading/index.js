import Vue from 'vue'
import loading from './loading'

const Loading = Vue.extend(loading)
let instance

export default {
  open (flag = true) {
    if (!instance) {
      instance = new Loading({
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
