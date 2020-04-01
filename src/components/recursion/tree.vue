<!-- 组件的递归调用 -->
<template>
	<ul>
		<li v-for="(item, index) in list" :key="item.menuName + '_' + 'index'">
			<v-sub>
				<p slot="title">{{ item.menuName }}</p>
				<tree-menu :list="item.children"></tree-menu>
			</v-sub>
		</li>
	</ul>
</template>

<script>

	import sub from '@/components/recursion/sub'
	export default {
		//name属性定义组件名，有了名字组件才可以调用自己。
		name: 'treeMenu',
		components: {
			'v-sub': sub
		},
		data: function () {
			return {
				
			}
		},
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	
	ul {
		list-style: none;
		text-align: left;
		li {
			p {
				background-color: lightblue;
				width: 100px;
			}
		}
	}
	
</style>