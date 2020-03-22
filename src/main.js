import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index'

import router from '@/routers/router'

Vue.use(Vuex)

Vue.config.productionTip = false



new Vue({
    render: h => h(App),
    store: store,
    router
}).$mount('#app')