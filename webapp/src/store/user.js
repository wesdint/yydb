// import Api from '@/utils/baseRequest'

export default {
  namespaced: true,
  state: {
  },
  mutations: {
    // doUpdateAvatar (state, url = '') {
    //   state.avatar = url
    // }
  },
  actions: {
    async getBaseInfo ({ state }) {
      // let { 'userInfo': res } = await Api.post('/user/getUserInfo', {
      //   'token': simpleLocalDb.getItem('token') || ''
      // }, {
      //   '_NEED_CODE_0': true
      // })
      // if (res['icon'] && res['icon']['picUrl'] !== '') state.avatar = res['icon']['picUrl']
      // state.name = res['nickName']
      // state.phone = res['mobile']
      // return res
    }
  }
}
