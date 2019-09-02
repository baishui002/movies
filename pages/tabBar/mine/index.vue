<template>
	<view class="content">
		<button
		class='testbutton'
		open-type="getUserInfo"
		@getuserinfo="getuserinfo"
		withCredentials="true"
		>
		获取微信用户信息
		</button>
	</view>
</template>

<script>
	import { reqNowPlaying } from '@/api/index.js'
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getUser()
		},
		methods: {
			...mapMutations(['setUserInfo']),
			getuserinfo (e) {
				console.log(e)
				
			},
			getUser () {
				console.log(3333)
				// uni.login({
				//   provider: 'weixin',
				//   success: function (loginRes) {
				//     console.log(loginRes);
				//   },
				//   fail: (err) => {
				// 	  console.log('err:', err)
				//   }
				// });
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
