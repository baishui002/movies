import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let userState = {
	city: '',
	hasLogin: false,	// 是否登录
	hasSkip: false,		// 是否跳过启动页
	nickName: '',
	avatar: ''
}
let userInfo = uni.getStorageSync('userInfo')
if (userInfo) {
	userState = userInfo
}
// console.log(11, userInfo)
const store = new Vuex.Store({
	state: {...userState},
    mutations: {
		// 设置跳过启动页状态
		setSkip (state) {
			state.hasSkip = true
		},
		// 设置当前城市
		setCity (state, city) {	
			state.city = city
		},
		setUserInfo (state, userInfo) {
			state.hasLogin = true
			state.nickName = userInfo.nickName
			state.avatar = userInfo.avatar
		},
	},
	actions: {

	},
	getters: {
		shopConfig: state => state.config,
		uuid: state	=>	state.uuid,
	}
})

export default store