import { isLogin, getQueryString } from './utils'

export const bootstrap = ({ state, commit, dispatch }, Router) => {
  return () => {
    let isApp = getQueryString('fromAPP') === 'true'
    if (isApp || !isLogin()) return
    console.log('hooks')
    // // 查询购物车数量
    // dispatch('cart/fetchCartNum')
    // // 查询地址列表
    // dispatch('address/fetchAddressList')
    // // 查询搜索的商品列表
    // dispatch('goods/fetchSearchGoodsList')
    // // 查询用户基本信息
    // dispatch('user/getBaseInfo')
  }
}
