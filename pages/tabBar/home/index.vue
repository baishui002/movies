<template>
	<view class="home">
		<!-- 轮播图 -->
		 <swiper 
		 class="swiper"
		 indicator-dots="true" 
		 autoplay="true" 
		 interval="3000" 
		 duration="500"
		 indicator-color="red"
		 indicator-active-color="#fff">
			<swiper-item class="swiper-item" v-for="(item, index) in imgList" :key="index">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
		
		<!-- 正在上映 -->
		<card title="正在上映的电影" :movies="playing"></card>
		
		<!-- 即将上映 -->
		<card title="即将上映的电影" :movies="coming"></card>
		
		<!-- 新片榜 -->
		<card title="豆瓣电影新片榜" :movies="newRank"></card>
		
		<!-- Top250 -->
		<card title="豆瓣电影Top250" :movies="top250" border="0"></card>
	</view>
</template>

<script>
	import { reqWeekly, reqNowPlaying, reqComing, reqNew, reqTop} from '@/api/index.js'
	import card  from '@/components/card.vue'
	export default {
		data() {
			return {
				imgList: [],
				playing: [],
				coming: [],
				newRank: [],
				top250: [],
			}
		},
		onLoad() {
			this.getWeedkly()
			this.getPlaying()
			this.getComing()
			this.getnewRank()
			this.getTop250()
		},
		methods: {
			// 轮播图
			async getWeedkly() {
				const res = await reqWeekly()
				res.subjects.splice(0, 5).forEach((item) => {
					this.imgList.push({src: item.subject.images.small, id:item.subject.id})
				})
			},
			
			// 正在热映
			async getPlaying() {
				const res = await reqNowPlaying()
				res.entries.splice(0, 10).forEach((item) => {
					this.playing.push({
						id:item.id,
						src: item.images.small,
						title: item.title,
						rate: item.rating,
					})
				})
			},
			
			// 正在热映
			async getComing() {
				const res = await reqComing()
				res.entries.splice(0, 10).forEach((item) => {
					this.coming.push({
						id:item.id,
						src: item.images.small,
						title: item.title,
						rate: item.rating,
					})
				})
			},
			
			// 新片榜
			async getnewRank() {
				const res = await reqNew()
				res.subjects.splice(0, 10).forEach((item) => {
					this.newRank.push({
						id:item.id,
						src: item.images.small,
						title: item.title,
						rate: item.rating.average,
					})
				})
			},
			
			// 即将热映
			async getTop250() {
				const res = await reqTop()
				res.subjects.splice(0, 10).forEach((item) => {
					this.top250.push({
						id:item.id,
						src: item.images.small,
						title: item.title,
						rate: item.rating.average,
					})
				})
			},
			
		},
		components:{
			card
		}
	}
</script>

<style scoped lang="scss">
	.home {
		background-color: #F8F8F8;
	}
	.swiper {
		padding-bottom: 20upx;
		width: 100%;
		height: 400upx;
		background-color: #F8F8F8;
		border-bottom: 1upx solid #999999;
		.swiper-item {
			width: 100%;
			height: 270upx;
		}
			image {
				width: 100%;
				height: 100%;
			}
	}
</style>
