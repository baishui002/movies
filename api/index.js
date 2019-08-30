import request from './request'

// 本周口碑榜--轮播图
export const reqWeekly = (params) => request('/weekly', params) 

// 正在上映
export const reqNowPlaying = (params) => request('/nowplaying', params) 

// 即将上映
export const reqComing = (params) => request('/coming', params) 

// 电影新片榜
export const reqNew = (params) => request('/new_movies', params) 

// 电影搜索
export const reqSearch = (params) => request('/search', params) 	

// 电影top250
export const reqTop = (params) => request('/top250', params) 	

// 电影详情
export const reqDetail = (params) => request('/subject', params) 	

// 电影top250
// export const reqNowPlaying = (params) => request('/top250', params) 	