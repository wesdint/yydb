/**
 * 是否是微信浏览器
 */
export const isWeixin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  let result = ua.match(/MicroMessenger/i)
  return result && result.length > 0 && result[0] === 'micromessenger'
}

/**
 * 获取 url 上的参数
 */
export const getQueryString = (name) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const qs = window.location.href.split('?')
  if (qs.length < 2) {
    return null
  }
  let r = qs[1].match(reg)
  // 过滤分享时在路由前加入的参数
  if (qs.length > 2) {
    r = qs[qs.length - 1].match(reg)
  }
  if (r != null) return decodeURIComponent(r[2])
  return null
}

/**
 * 将参数加到 url 中
 */
export const buildUrl = (url, data) => {
  let targetUrl = url
  let paramStr = ''
  const rquery = (/\?/)

  if (data) {
    if (typeof data === 'object') {
      paramStr = Object.keys(data)
          .map(name => name + '=' + encodeURIComponent(data[name]))
          .join('&')
    } else if (typeof data === 'string') {
      paramStr = data
    }
    targetUrl += (rquery.test(url) ? '&' : '?') + paramStr
  }
  return targetUrl
}

/**
 * 过滤 # 前面的 ?
 */
export const filterUrl = (url) => {
  var startIndex = url.indexOf('?')
  var endIndex = url.indexOf('#')
  if (startIndex > 0 && endIndex > 0 && startIndex < endIndex) {
    var startStr = url.substring(0, startIndex)
    var endStr = url.substring(endIndex, url.length)
    return startStr + endStr
  }
  return url
}

/**
 * 判断用户是否已登录
 */
export const isLogin = () => {
  // 将 undefined 转为 Boolean 类型
  return !!simpleLocalDb.getItem('token')
}

/**
 * 银联支付
 */
export const unionpay = (result) => {
  let formHtml = `<form id="unionpay-form" style="display:none" action="${result.requestFrontUrl}" target="_self" method="post">
                     <input type="text" name="txnType" value="${result.txnType}">
                     <input type="text" name="frontUrl" value="${result.frontUrl}">
                     <input type="text" name="currencyCode" value="${result.currencyCode}">
                     <input type="text" name="channelType" value="${result.channelType}">
                     <input type="text" name="merId" value="${result.merId}">
                     <input type="text" name="txnSubType" value="${result.txnSubType}">
                     <input type="text" name="version" value="${result.version}">
                     <input type="text" name="txnAmt" value="${result.txnAmt}">
                     <input type="text" name="signMethod" value="${result.signMethod}">
                     <input type="text" name="backUrl" value="${result.backUrl}">
                     <input type="text" name="encoding" value="${result.encoding}">
                     <input type="text" name="bizType" value="${result.bizType}">
                     <input type="text" name="orderId" value="${result.orderId}">
                     <input type="text" name="txnTime" value="${result.txnTime}">
                     <input type="text" name="accessType" value="${result.accessType}">
                     <input type="text" name="certId" value="${result.certId}">
                     <input type="text" name="signature" value="${result.signature}">
                   </form>`
  document.body.innerHTML = formHtml
  let formEle = document.getElementById('unionpay-form')
  formEle.submit()
  return false
}
