import { signUpSchema, signInSchema } from './sign.schema'
import { addScoreSchema } from './score.schema'

export default {
	'/sign-up': signUpSchema,
	'/sign-in': signInSchema,
	'/addScore': addScoreSchema,
}