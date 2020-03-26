/*
	当页面刷新后，保存到 vuex 里面的数据 就会消失

	那么页面刷新时，如何让保存到 vuex 里面的数据持久保存呢？


 */

export default function (store) {
	console.log(8888)

	// 如果本地存储 保存有 state 的数据，那么就 state 就用 本地存储中的数据
	if (localStorage.state) {
		store.replaceState(JSON.parse(localStorage.state))
	}

	// 每次往state上面添加或者修改值的时候， 更新保存在 localStorage 上的数据
	store.subscribe( (mutation,state) => {
		localStorage.state = JSON.stringify(state)
	}) 
}