<template>
	<div>
		<div>bus 父组件</div>
		<v-bus01></v-bus01>
		<v-bus02></v-bus02>

		<button @click="clickHandle">点我触发事件(父组件)</button>
		<p>{{ mess }}</p>
	</div>
</template>

<script>
	import Bus01 from '@/components/bus/bus01'
	import Bus02 from '@/components/bus/bus02'

	export default {
		components: {
			'v-bus01': Bus01,
			'v-bus02': Bus02,
		},
		data: function () {
			return {
				mess: ''
			}
		},
		methods: {
			clickHandle () {
				console.log(77)
				// 如果不使用挂载在vue上面的 $bus(一个vue实例) 而是用本组件的 实例this来触发一个事件，那么这个事件只能在本组件中被监测到
				this.$emit('on-click', '你好吗，我是父组件')
			}
		},
		mounted () {
			this.$on('on-click', res => {
				console.log('啊哈，我接收到你了 =>' + res)
			})
		}
	}

</script>

<style lng="scss" scoped>
	
</style>