<template>
	<div>
		<h3>bus-子组件01</h3>
		<button @click="clickHandle">点我触发事件</button>
	</div>
</template>
<script>
	export default {
		data: function () {
			return {

			}
		},
		methods: {
			clickHandle () {
				// 通过挂载在vue上面的 $bus(一个vue实例) 来触发一个事件，然后在另外一个组件中监听这个事件，就可以拿到这个参数
				this.$bus.$emit('on-click', '我是来自 bus-子组件01 的东西')
			}
		}
	}
</script>