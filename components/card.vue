<template>
	<view class="card" :class="{'bottom': bottom}">
		<view class="title">
			<text>{{title}}</text>
			<uni-icon type="arrowright" size="15"></uni-icon>
		</view>
		<scroll-view scroll-x="true" scroll-left="120">
			<view class="scroll-view">
				<view class="scroll-item" v-for="(item, index) in movies" :key="index">
					<image :src="item.src" mode=""></image>
					<view class="name">
						<text>{{item.title}}</text>
					</view>
					<view class="rate">
						<text >{{item.rate?item.rate: '暂无评分'}}分</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniIcon from "@/components/libs/uni-icon.vue"
	export default {
		data() {
			return {
				
			}
		},
		props:{
			title: {
				type: String,
				default: ''
			},
			movies: {
				type: Array,
				default: []
			},
			bottom: {
				type: Boolean,
				default: true
			}
		},
		 components: {
			uniIcon
		 }
	}
</script>

<style scoped lang="scss">
	.card {
		margin-top: 40upx;
		padding: 20upx 0;
		background-color: #FFFFFF;
		
	}
	.bottom {
		border-bottom: 2upx solid #ccc;
	}
	.title {
		display: flex;
		justify-content: space-between;
		padding: 0 10upx 20upx;
		font-size: 30upx;
		color: #000;
	}
	.scroll-view {
		display: flex;
		height: 400upx;
		padding-left: 20upx;
	}
	.scroll-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		// width: 270upx;
		margin-right: 20upx;
		
		image {
			// width: 270upx;
			// height: 395upx;
			width: 191upx;
			height: 280upx;
			box-shadow: 5px 5px 5px #ccc;
			border-radius: 10upx;
		}
		
		.name {
			width: 191upx;
			// padding: 10upx;
			font-size: 28upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			text-align: center;
		}
		
		.rate {
			font-size: 28upx;
			color: #007AFF;
		}
		
	}
</style>
