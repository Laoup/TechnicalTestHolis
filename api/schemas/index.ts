import { signUpSchema, signInSchema } from './sign.schema'
import { addScoreSchema, getScoreSchema } from './score.schema'

export default {
	'/sign-up': signUpSchema,
	'/sign-in': signInSchema,
	'/addScore': addScoreSchema,
	'/getScore': getScoreSchema
}