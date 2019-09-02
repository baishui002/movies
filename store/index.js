import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isLogin: false,
		city: '',
		userInfo: {}
	},
    mutations: {
		setLogin (state, isLogin) {
			state.isLogin = isLogin
		},
		setCity (state, city) {
			state.city = city
		},
		setUserInfo (state, userInfo) {
			state.userInfo = userInfo
		},
		redirect (state, payload) {
			state.redirectPage = payload.page
		},
		searchStyle (state, style) {
			state.searchStyle = style
		}
	},
	actions: {

	},
	getters: {
		shopConfig: state => state.config,
		uuid: state	=>	state.uuid,
	}
})

export default store