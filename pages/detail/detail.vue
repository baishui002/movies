<template>
	<view class="detail" :style="{backgroundImage: 'url('+detail.images.large+')'}">
		<view class="con">
			<view class="img-box">
				<image :src="detail.images.small" mode=""></image>
				<text>{{detail.title}}</text>
			</view>
			
			<view class="info-box">
				<text>评分:&nbsp;{{detail.rating.average}}</text>
				<text>导演:&nbsp;{{detail.directors | nameFormat}}</text>
				<text>主演:&nbsp;{{detail.casts | nameFormat}}</text>
			</view>
			
			<view class="desc-box">
				<text class="title">摘要</text>
				<text class="content">{{detail.summary}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { reqDetail } from '@/api/index.js'
	
	export default {
		data() {
			return {
				id: '',
				detail: {},
				directors: ''
			}
		},
		onLoad(option) {
			// console.log(1, option)
			this.id = option.id
			this.getDetail()
		},
		methods: {
			async getDetail () {
				const res = await reqDetail(this.id)
				this.detail = res
			}
		},
		filters: {
			nameFormat (data) {
				if (!data) return
				
				let temp = []
				data.forEach(item => {
					temp.push(item.name)
				})
				return temp.join(' ')
			}
		}
	}
</script>

<style scoped lang="scss">
.detail {
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.con {
	background-color: rgba(255, 255, 255, .8);
}
.img-box {
	padding: 20upx 50upx 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	image {
		width: 100%;
		height: 800upx;
		border-radius: 10upx;
	}
	
	text {
		margin-top: 20upx;
		font-size: 36upx;
	}
}
.info-box {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 60upx 80upx;
	height: 200upx;
	text {
		font-size: 30upx;
		line-height: 36upx;
		color: #8F8F94;
	}
}
.desc-box {
	display: flex;
	flex-direction: column;
	padding: 0 60upx 150upx;
	
	.title {
		padding-left: 10upx;
		font-size: 40upx;
		border-left: 10upx solid #4CD964;
	}
	.content {
		margin-top: 40upx;
		line-height: 60upx;
		text-indent: 2em;
		font-size: 30upx;
	}
}
</style>
