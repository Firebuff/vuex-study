<template>
	<div :id="getId">

		<slot></slot>

		<slot name="left"></slot>

		<input type="text" v-model="vals">

		<slot name="right"></slot>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				counter: null,
				vals: '',
				show: false
			}
		},
		computed: {
			getId () {

				/* 
					每个组件都有一个唯一的 _uid, 	当我们多次使用一个组件时，而组件需要绑定id值时，我们可以使用这个_uid来动态绑定，防止出现相同的id
				*/
				return `count_${this._uid}`
			}
		},
		//  watch 里面不能使用箭头函数，如果是使用了， 里面的 this 是 undefined
		watch: {
			vals: function (newVal, oldVal) {
				console.log(newVal)
				this.$emit('input', newVal)
			}
		},
		mounted () {
			console.log(this)
			this.show = true
		}
		
	}
</script>


<style lng="scss" scope>
	
</style>
