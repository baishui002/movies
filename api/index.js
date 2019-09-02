import request from './request'
const city = uni.getStorageInfoSync('city') || ''

// 本周口碑榜--轮播图
export const reqWeekly = (params) => request('/weekly', params) 

// 正在上映
export const reqNowPlaying = (start=0, count=10) => request('/in_theaters', {start, count}) 

// 即将上映
export const reqComing = (params) => request('/coming', params) 

// 电影新片榜
export const reqNew = (params) => request('/new_movies', params) 

// 电影搜索		https://movie.douban.com/j/subject_suggest?q=king
export const reqSearch = (params) => request('/search', params) 	

// 电影top250
export const reqTop = (params) => request('/top250', params) 	

// 电影详情
export const reqDetail = (id) => request('/subject/'+id) 	

// 电影top250
// export const reqNowPlaying = (params) => request('/top250', params) 	