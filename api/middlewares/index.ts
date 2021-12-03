import { ErrorRequestHandler, Request, Response, NextFunction } from "express"
import _ from 'lodash'
import schemas from '@schemas/index'
import { GeneralError, Unauthorized } from '@utils/error'

export const middleware_error_handler = (err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof GeneralError) {
		return res
						.status(err.getCode())
						.send(err.message)
	}
	console.log(err)
	return res.status(500).send(err)
}

export const middleware_schema_validator = (req: Request, res: Response, next: NextFunction) => {
	const supportedMethods = ['get', 'post', 'put', 'delete']

	const route: string = req.route.path
	const method: string = req.method.toLowerCase()

	if (schemas.hasOwnProperty(route) && supportedMethods.includes(method))
		{
			const schema = _.get(schemas, route)

			console.log(req.body)
			const { error, value } = schema.validate(req.body)

			if (error === undefined) {
				req.body = value
				next()
			} else {
				console.log(error.details)
				res.status(422).send('Une erreur inatendu est survenue')
			}
		} else {
			next()
		}
}

export const middleware_verify_token = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { cookies } = req

		/* On vérifie que le JWT est présent dans les cookies de la requête */
		if (!cookies || !cookies.access_token)
			throw new Unauthorized('Missing access token in cookie');
		const accessToken = cookies.access_token;

		next()
	} catch(e) {
		next(e)
	}
}