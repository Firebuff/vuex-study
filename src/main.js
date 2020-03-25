import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index'
import Bus from '@/bus'

Vue.prototype.$bus = Bus // 将bus文件中的vue实例挂载在vue 的原型上

import router from '@/routers/router'

Vue.use(Vuex)

Vue.config.productionTip = false



new Vue({
    render: h => h(App),
    store: store,
    router
}).$mount('#app')