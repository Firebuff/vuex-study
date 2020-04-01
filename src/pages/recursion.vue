<!-- 组件的递归调用 -->
<template>
	<div>
		<v-tree :list="newList"></v-tree>
	</div>
</template>

<script>

	import dataList from '@/components/recursion/data'

	import tree from '@/components/recursion/tree'

	export default {
		components: {
			'v-tree': tree
		},
		data: function () {
			return {
				list: dataList
			}
		},
		computed: {
			newList () {

				function addShowAttr (list) {
					let newList = list.map ((item) => {
						if (item.children && item.children.length) {
							item.show = true
							item.children = addShowAttr(item.children)
						}
						return item
					})
					return newList
				}
				
				let newArr = addShowAttr(dataList)

				console.log(newArr)

				return newArr
			}
		},
		methods: {
			changeShow () {
				console.log(1111)
			}
		}
	}
</script>

<style>
	
</style>