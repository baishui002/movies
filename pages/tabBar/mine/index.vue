<template>
	<view class="mine">
		<view class="avatar-box">
			<image class="avatar" :src="userInfo.avatarUrl" mode=""></image>
			<view class="name">
				<view class="hi">
					<text>Hi, {{userInfo.nickName}}</text>
				</view>
				<view>
					<text>欢迎使用白水-movies</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo') || {}
			}
		},
		computed: {
			// ...mapState(['userInfo'])
		},
		onLoad() {
			console.log(11,this.userInfo)
		},
		methods: {
		},
		components:{
		}
	}
</script>

<style scoped lang="scss">
	.mine {}
	.avatar-box {
		display: flex;
		flex-direction: space-between;
		padding: 20upx;
		.avatar {
			width: 100upx;
			height: 100upx;
			border-radius: 50%;
		}

		.name {
			flex: 1;
			display: flex;
			flex-direction: space-between;
			flex-direction: column;
			margin-left: 40upx;
			height: 100upx;
			
			text {
				font-size: 26upx;
			}
			
			.hi {
				text {
					font-size: 40upx;
				}
				// line-height: 40upx;
			}
		}
	}

</style>
