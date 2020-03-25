<template>
	<div>
		<h3>bus-子组件02</h3>
		<p>{{ message }}</p>
	</div>
</template>
<script>
	export default {
		data: function () {
			return {
				message: ''
			}
		},
		methods: {

		},
		mounted () {
			// 通过挂载在vue上面的 $bus(一个vue实例) 来监听其他组件触发的事件，在回调函数中拿到传递过来的参数
			this.$bus.$on('on-click',(res) => {
				this.message = res
			})
		}
	}
</script>