import Router from 'vue-router'
import Vue from 'vue'

import routerList from './index'

Vue.use(Router)


const router = new Router({
	routes: routerList
})



export default router
