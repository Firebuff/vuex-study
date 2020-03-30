<template>
	<div>
		<!-- 

			我们可以使用 v-model="recieveVal" 来替代 @input="inputChange"

			因为 v-model 就是 @input="xxx = $event.target.value" 的一个语法糖

		 -->
		<!-- <count-up @input="inputChange"> -->

		<count-up v-model="recieveVal">


			<!-- 如果组件中有一个没有名字的slot， 那么在组件引用的标签内写的 文字或者标签都渲染到这个没有名字的slot上 -->
			<p style="color: blue;">没有名字的slot</p>

			<!--  如果想让这个标签插入到哪个插槽， 就在slot 里面 写上对应的name属性： slot="xxx" -->
			<span slot="left">用户名</span>

			<span slot="right">输入用户名的地方</span>

		</count-up>

		<div>{{ recieveVal }}</div>
	</div>
</template>

<script>
	// 该文件中的组件已在index.js中引入和导出， 所以直接写目录，会自动 读取 index.js 这个文件（node.js默认的)
	import countUp from '@/components/countUp'
	export default {
		components: {
			'count-up': countUp
		},
		data: function () {
			return {
				recieveVal: ''
			}
		},
		methods: {
			inputChange (val) {
				this.recieveVal = val
			}
		}
	}
</script>
<style lng="scss" scoped>
	
</style>