<!-- 组件的递归调用 -->
<template>
	<div class="tree-container">
		<ul>
			<li v-for="(item, index) in list" :key="item.menuName + '_' + 'index'">
				<p @click="showHandle(item)" >{{ item.menuName }} {{ item.menuCode }}</p>
				<template v-if="item.children && item.children.length">
					<tree-menu :list="item.children" v-show="showChildren"></tree-menu>
				</template>
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		//name属性定义组件名，有了名字组件才可以调用自己。
		name: 'treeMenu',
		components: {

		},
		data: function () {
			return {
				showChildren: false
			}
		},
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			showHandle(item) {
				this.showChildren = !this.showChildren
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tree-container {
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
	}
</style>