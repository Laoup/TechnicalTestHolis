import joi from 'joi'
import { numberValidator } from '@utils/joi.validators'

export const addScoreSchema = joi.object().keys({
	score: numberValidator.required()
})

export const getScoreSchema = joi.object().keys({
	userId: numberValidator.required()
})