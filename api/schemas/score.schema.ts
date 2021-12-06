import joi from 'joi'
import { numberValidator, stringValidator } from '@utils/joi.validators'

export const addScoreSchema = joi.object().keys({
	score: numberValidator.required(),
	quizzTitle: stringValidator.required()
})