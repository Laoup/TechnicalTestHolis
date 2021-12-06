import joi from 'joi'

export const stringValidator = joi.string().regex(/^[A-Z ']+$/i)
export const numberValidator = joi.number()
export const emailValidator = joi.string().email()
export const passwordValidator = joi.string().min(7).required()
export const linkedInUrlValidator = joi.string().regex(/^https:\/\/[a-z]{2,3}\.linkedin\.com\/.*$/)
export const dateValidator = joi.date()
export const stringArrayValidator = joi.array().items(joi.string())
export const phoneInternationalValidator = joi.string().regex(/((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))/)