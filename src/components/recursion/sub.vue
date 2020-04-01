<!-- 组件的递归调用 -->
<template>
	<div>
		<div @click="showHandle"><slot name="title" ></slot></div>
		<div v-show="showChildren">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
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
			showHandle() {
				this.showChildren = !this.showChildren
			}
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