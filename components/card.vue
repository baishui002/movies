<template>
	<view class="card">
		<view class="title">
			<text>{{title}}</text>
		</view>
		<scroll-view scroll-x="true" scroll-left="120">
			<view class="scroll-view">
				<view class="scroll-item">
					<image src="../static/images/index_1.jpg" mode=""></image>
					<text>骡子</text>
					<text>骡子</text>
				</view>


			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			title: {
				type: String,
				default: 'hello world'
			},
			movies: {
				type: Array,
				default: []
			},
		}
		
	}
</script>

<style scoped lang="scss">
	.scroll-view {
		display: flex;
		flex-wrap: nowrap;
		padding-left: 40upx;
	}
	.scroll-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 300upx;
		margin-right: 40upx;
		text-align: center;
		
		image {
			width: 200upx;
			height: 300upx;
		}
	}
</style>
