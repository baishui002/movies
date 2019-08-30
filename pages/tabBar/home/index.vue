<template>
	<view class="home">
		 <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="500">
			<swiper-item class="swiper-item" v-for="(item, index) in imgList" :key="index">
				<image :src="item.src" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
		<card ></card>
	</view>
</template>

<script>
	import { reqWeekly } from '@/api/index.js'
	import card  from '@/components/card.vue'
	export default {
		data() {
			return {
				imgList: []
			}
		},
		onLoad() {
			this.getWeedkly()
		},
		methods: {
			// 轮播图
			async getWeedkly() {
				const res = await reqWeekly()
				res.subjects.splice(0, 5).forEach((item) => {
					this.imgList.push({src: item.subject.images.small, id:item.subject.id})
				})
			}
		},
		components:{
			card
		}
	}
</script>

<style scoped lang="scss">
	.home {}
	.swiper {
		padding-bottom: 10upx;
		width: 100%;
		height: 400upx;
		background-color: #F8F8F8;
		border-bottom: 1upx solid #999999;
		.swiper-item {
		}
			// image {
			// 	width: 270upx;
			// 	height: 100%;
			// }
	}
</style>
