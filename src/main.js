import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store/index'
import Bus from '@/bus'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


Vue.prototype.$bus = Bus // 将bus文件中的vue实例挂载在vue 的原型上

import router from '@/routers/router'

Vue.use(Vuex)

Vue.use(ViewUI);

Vue.config.productionTip = false



new Vue({
	store: store,
	router,
	// h 是一个函数，返回一个虚拟节点
    render: h => h(App)
    
    // render: (h) => {
    // 	return h('div',{

    // 		// class 是保留字，要加引号, 可以写成数组或者字符串
    // 		// 'class': ['class01', 'class02'],

    // 		'class': "class01 class02",

    // 		attrs: {
    // 			id: 'hello',
    // 			'hello-data': 'I am tired'
    // 		},

    // 		style: {
    // 			color: 'red',
    // 			backgroundColor: 'pink'
    // 		},
    // 		props: {
    // 			hello: 'go home!'
    // 		},
    // 		// domProps: {
    // 		// 	innerHTML: '喝了咯'
    // 		// },
    		
    // 		// 注册事件
    // 		on: {
    // 			'click': function () {
    // 				console.log(999)
    // 			}
    // 		},
    // 		// 如果创建的不是一个标签，而是一个组件，那么如果要在组件上添加事件要用到 nativeOn 来注册事件
    		
    // 		/* nativeOn: {
    // 			'click': function () {
    // 				console.log(999)
    // 			}
    // 		}, */

    // 		directives: [],
    // 		scopedSlots: {},
    // 		key: '',
    // 		slot: '',
    // 		ref: ''
    // 	},['喝了咯', h('h3','ddd'), h('span','我是span哦！')]) // 嵌套的标签放在数组里面
    // }
    
}).$mount('#app')