import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from './routes'

let router = createRouter({
    history: createWebHashHistory(),
	routes: constantRoute,
	// 滚动行为，页面导航，确保每次导航到新页面时都自动滚动到顶部，给用户带来一致的体验。
	scrollBehavior() {
		return {
			left: 0,
			top: 0
		}
	}
})

export default router
