import * as scoreDal from '@dal/score.dal'
import { ScoreInput, ScoreOutput } from '@models/score.model'
import { Request } from 'express'

export const create = async (req: Request): Promise<boolean> => {
	const { body } = req

	const newScore: ScoreInput = {
		fk_userId: body.decoded.userId,
		score: body.score
	}
	return !!(await scoreDal.createScore(newScore))
}

export const getScoreByUserId = async (req: Request): Promise<ScoreOutput[]> => {
	const { userId } = req.body
	return await scoreDal.getScoreByUserId(userId)
}