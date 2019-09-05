<template>
	<view class="start">
		<view class="skip">
			<text @tap="shipHandle">跳过</text>
		</view>
		
		<swiper class="swiper" indicator-dots=true autoplay=true interval=2500>
			<swiper-item v-for="(item, index) in imgList" :key="index">
				<image :src="item" mode=""></image>
			</swiper-item>
		</swiper>
	
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				imgList: [
					'../../static/images/start_1.jpg',
					'../../static/images/start_3.jpg',
					'../../static/images/start_2.jpg',
				]
			}
		},
		computed: {
			...mapState(['hasSkip'])
		},
		onLoad() {
			if(this.hasSkip) {
				uni.reLaunch({
					url: '../tabBar/home/index'
				})
			}
		},
		methods: {
			...mapMutations(['setSkip']),
			shipHandle () {
				this.setSkip()
				uni.reLaunch({
					url: '../tabBar/home/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.start {
	.skip {
		position: absolute;
		right: 20upx;
		top: 20upx;
		z-index: 100;
		width: 100upx;
		height: 60upx;
		background-color: #D3D3D3;
		border-radius: 10upx;
		text-align: center;
		
		text {
			font-size: 30upx;
			line-height: 50upx;
			color: #FFFFFF;
		}
	}
	.swiper {
		height: 100vh;
		image {
			width: 100%;
			height: 100%;
		}
	}
}


</style>
