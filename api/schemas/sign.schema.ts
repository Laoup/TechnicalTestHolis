import joi from 'joi'
import { stringValidator, emailValidator, passwordValidator } from '@utils/joi.validators'

export const signUpSchema = joi.object().keys({
	firstName: stringValidator.required(),
	lastName: stringValidator.required(),
	email: emailValidator.required(),
	password: passwordValidator,
})

export const signInSchema = joi.object().keys({
	email: emailValidator.required(),
	password: passwordValidator
})