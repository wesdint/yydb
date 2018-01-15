let config
let env = process.env.CODE_ENV
let baseConfig = require('./base.config')

// 根据环境类型，加载对应的配置文件
if (env === 'production') {
  config = require('./prod.config')
} else {
  config = require('./dev.config')
}

export default Object.assign({}, baseConfig, config)
