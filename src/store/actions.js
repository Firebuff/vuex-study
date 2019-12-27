import * as types from './types';

/*const actions = {
    setList (vuex,item) {
        setTimeout(() => {
            vuex.commit(types.SET_LIST,item)
        }, 5000)
    }
}
export default actions;*/


export const setList = (vuex,item) => {
    setTimeout(() => {
        vuex.commit(types.SET_LIST,item)
    }, 5000)
}