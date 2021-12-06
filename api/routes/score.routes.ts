import { NextFunction, Request, Response, Router } from 'express'
import * as controllerScore from '@controllers/score.controller'
import { middleware_schema_validator } from '@middlewares/index'

const router = Router()

router.route('/addScore')
.post(middleware_schema_validator, (req: Request, res: Response, next: NextFunction) => {
	controllerScore.create(req, res, next)
})

router.route('/getScore')
.get((req: Request, res: Response, next: NextFunction) => {
	controllerScore.getScoreByUserId(req, res, next)
})

export default router