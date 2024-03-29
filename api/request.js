const apikey = '0b2bdeda43b5688921839c8ecb20399b'
const host = 'http://api.douban.com/v2/movie'

export default function request (url='', data={}, method='GET') {
	uni.showLoading({
	    title: '加载中'
	});
	return new Promise ((resolve, reject) => {
		
		wx.request({
			url: `${host}${url}?apikey=${apikey}`,
			method: method,
			data: data,
			header: {
				"Content-Type": 'json;charset=utf-8'
			},
			success: (result) => {
				resolve(result.data);
			},
			fail: (error) => {
				reject(error.data);
				let code = error.data.code;
				console.log('code', code);
				switch (code){
					case 1000:
						console.log(1000)
						break;
					default:
					console.log(100033)
						break;
				}
				uni.showToast({
					title: '请求失败，稍后再试',
					duration: 2000,
					icon: 'none'
				});
			},
			complete: () => {
				uni.hideLoading();
			}
		}) 
	})
}

// export function get (url, data) {
// 	return request(url, 'GET', data);
// }
// export function post (url, data) {
// 	return request(url, 'POST', data);
// }