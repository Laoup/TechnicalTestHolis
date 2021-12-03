import { NextFunction, Request, Response, Router } from 'express'
import * as controllerUser from '@controllers/user.controller'
import { middleware_schema_validator } from '@middlewares/index'

const router = Router()

router.route('/sign-up')
.post(middleware_schema_validator, (req: Request, res: Response, next: NextFunction) => {
	controllerUser.create(req, res, next)
})

router.route('/sign-in')
.post(middleware_schema_validator, (req: Request, res: Response, next: NextFunction) => {
	controllerUser.authenticateJWT(req, res, next)
})

export default router