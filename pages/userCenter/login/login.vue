<template>
	<view>
		<authorize></authorize>
	</view>
</template>

<script>
	import authorize from '@/components/authorize.vue'
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			// ...mapMutations(['setUserInfo'])
		},
		components:{
			authorize
		}
	}
</script>

<style>

</style>
