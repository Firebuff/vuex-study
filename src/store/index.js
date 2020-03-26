import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
// import actions from './actions'
import * as actions from './actions'

import setLocalStore from '@/store/plugin/localStore'

console.log(actions)

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [setLocalStore] //将state里面的数据保存到本地存储，防止刷新浏览器时，state的数据小时
})
