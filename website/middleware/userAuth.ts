import { Middleware } from "@nuxt/types"

const userAuthMiddleware: Middleware = ({ app, route, redirect }) => {
	// exemple avec utilisation du store
	// if (route.path.includes('/user') && !store.getters['user.module/token'])
	// 	redirect('/')

	if (route.path.includes('/quizz') && !app.$cookies.get('access_token'))
		redirect('/')
}

export default userAuthMiddleware