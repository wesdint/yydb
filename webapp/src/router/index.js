import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '../components/HelloWorld'
import index from '../views/index'
import productDetail from '../views/productDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/productDetail/:id',
      name: 'productDetail',
      component: productDetail
    }
  ]
})
