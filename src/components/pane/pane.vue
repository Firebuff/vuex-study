<template>
	<div class="pane-container">
		<div class="left pane-item">hello</div>
		<div class="line"></div>
		<div class="right pane-item">hi</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {

			}
		},
		methods: {

		}
	}
	
</script>

<style lang="scss" scoped>
	.pane-container {
		width: 400px;
		height: 250px;
		background-color: #FFF8DC;
		.pane-itme {
			height: 100%;
			height: 250px;
			width: 200px;
			color: red;
		}

		.left {
			background-color: lightblue;
		}
		.right {
			background-color: pink;
		}
	}

	
</style>