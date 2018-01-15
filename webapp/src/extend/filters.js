import moment from 'moment'

/**
 * 普通日期格式化函数
 * data: yyyy-MM-dd
 * time: hh:mm:ss
 * yyyy-MM-dd hh:mm:ss 默认
 * 或者传入需要的格式
 */
export const datetime = (time, pattern) => {
  let value = moment(time)
  let tempPattern = 'YYYY-MM-DD HH:mm:ss'

  if (!pattern) {
    return value.format(tempPattern)
  }

  switch (pattern) {
    case 'date':
      tempPattern = 'YYYY-MM-DD'
      break
    case 'time':
      tempPattern = 'HH:mm:ss'
      break
    default:
      tempPattern = pattern
      break
  }
  return value.format(tempPattern)
}

/**
 * 价格格式化 分 -> 元
 * @param {flag: Boolean} 为 true 则返回对象，整数位、小数位
 * @param {one: Boolean} 为 true 则不保留两位小数
 * @param {isPoint: Boolean} 为 true 小数位返回小数点
 */
export const priceFormat = (price, flag, one, isPoint, turnWan) => {
  price = isNaN(Number(price)) ? 0 : price
  if (turnWan && (price > 999999)) {
    return Math.floor(price / 10000) / 100 + '万'
  } else {
    let _price = String((price / 100).toFixed(2))
    let left = _price.split('.')[0]
    let right = _price.split('.')[1]
    let num = 0
    let res = ''
    for (let i = left.length - 1; i >= 0; i--) {
      let tmp = (num % 3 === 0 && num !== 0) ? ',' : ''
      res = left[i] + tmp + res
      num++
    }
    let tmp = right.split('')[1]
    if (tmp === '0' && one) {
      right = right.split('')[0] === '0' ? '' : right.split('')[0]
    }
    if (flag) {
      if (isPoint && right !== '') {
        right = `.${right}`
      }
      return {
        int: res,
        decimal: right
      }
    } else {
      return right === '' ? res : `${res}.${right}`
    }
  }
}

/**
 * 格式化身份证号
 */
export const idCardFormat = (id) => {
  if (id.length === 18) {
    let idArr = id.split('')
    idArr.splice(6, 8, '********')
    return idArr.join('')
  }
  return ''
}
