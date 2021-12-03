import { Request, Response } from 'express'
import { wrapAsync } from '@utils/wrapAsync'
import * as serviceScore from '@services/score.service'
// import * as mapperScore from '@controllers/score.mapper'
// import { ScoreOutput } from '@models/score.model'
// import ScoreInterface from '@interfaces/score.interface'

export const create = wrapAsync(async (req: Request, res: Response) => {
	await serviceScore.create(req)
	res.status(200).send()
})

export const getScoreByUserId = wrapAsync(async (req: Request, res: Response) => {
	// const allScore: ScoreOutput[] = await serviceScore.getScoreByUserId(req)
	// const allScoreFormated: ScoreInterface[] = []
	// allScore.forEach((score) => {
	// 	allScoreFormated.push(mapperScore.toScore(score))	
	// })

	// return allScoreFormated
	const allScore = await serviceScore.getScoreByUserId(req)
	res.status(200).json(allScore)
})