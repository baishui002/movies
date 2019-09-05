<template>
	<view class="authorize">
		<view v-if="!hasLogin">
			<view>
				<view class='header'>
					<image src='../static/images/wx_login.png'></image>
				</view>
				<view class='content'>
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像、地区等)</text>
				</view>

				<button class='bottom' type='primary' open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="wxGetUserInfo">
					授权登录
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				// isCanUse: uni.getStorageSync('isCanUse')||true//默认为true
			}
		},
		computed: {
			...mapState(['hasLogin'])
		},
		methods: {
			...mapMutations(['setUserInfo']),
			wxGetUserInfo(user) {
				let { nickName, avatarUrl} = user.target.userInfo
				uni.setStorageSync('userInfo', {nickName, avatarUrl, hasLogin: true})
				this.setUserInfo({nickName, avatarUrl})
				
				uni.switchTab({
					url: '/pages/tabBar/home/index'
				})
			},
		}
	}
</script>

<style scoped>
    .header {
        margin: 90upx 0 90upx 50upx;
        border-bottom: 1px solid #ccc;
        text-align: center;
        width: 650upx;
        height: 300upx;
        line-height: 450upx;
    }

    .header image {
        width: 200upx;
        height: 200upx;
    }

    .content {
        margin-left: 50upx;
        margin-bottom: 90upx;
    }

    .content text {
        display: block;
        color: #9d9d9d;
        margin-top: 40upx;
    }

    .bottom {
        border-radius: 80upx;
        margin: 70upx 50upx;
        font-size: 35upx;
    }
</style>
