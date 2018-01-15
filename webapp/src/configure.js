import * as filters from './extend/filters'
import * as directives from './extend/directives'
import moment from 'moment'
import config from './utils/config'
import GlobalComponents from './extend/globalComponents'
import { isWeixin, getQueryString, filterUrl } from './utils'
// import { getOpenId } from './utils/wxSDK'

export default (Vue) => {
  // 设置 localStorage 的前缀
  simpleLocalDb.setPrefix(config.APP_PROP_APP_TYPE)
  // 设置 moment 的语言
  moment.locale('zh-cn')
  // 判断是否已经有 openid
  if (isWeixin()) {
    const openid = getQueryString('openid') || simpleLocalDb.getItem('openid')
    if (openid) {
      simpleLocalDb.setItem('openid', openid)
    } else {
      // getOpenId()
    }
  }
  // 注册埋点方法
  // Vue.prototype.dataTracking = dataTracking
  // 过滤 # 前面的 ?
  const fUrl = filterUrl(window.location.href)
  if (fUrl !== window.location.href) {
    window.location.href = fUrl
  }
  // 注册全局组件
  GlobalComponents.register()
  // 注册过滤器
  Object.keys(filters).forEach(name => {
    Vue.filter(name, filters[name])
  })
  // 注册指令
  Object.keys(directives).forEach(name => {
    Vue.directive(name, directives[name])
  })
}
