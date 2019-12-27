import * as types from './types'

console.log(types)

const mutations = {
    [types.SET_LIST] (state,item) {
        state.nameList.push(item)
    }
}

export default mutations;