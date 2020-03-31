import * as types from './types'

import Vue from 'vue'

// console.log(types)

const mutations = {
    [types.SET_LIST] (state,item) {
        state.nameList.push(item)
    },
    [types.SET_NO_EXIST_VALUE] (state, item) {
        /*
            这个hello的值在state中本来是没有的，如果采用state.hello = item 这样的赋值方式，
            是不会响应更新视图的（也就是说如果页面使用了这个值，设置值的时候不会同步更新到页面）
            

        */
        // state.hello = item
        
        Vue.set(state, 'hello', item) //使用这种方式可以解决设置值时，视图不同步的情况
    }
}

export default mutations;