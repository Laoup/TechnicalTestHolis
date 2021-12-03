import Score, { ScoreInput, ScoreOutput } from "@models/score.model"

export const createScore = async (payload: ScoreInput): Promise<ScoreOutput> => {
	const score = await Score.create(payload)
	return score
}

export const getScoreByUserId = async (userId: number): Promise<ScoreOutput[]> => {
	const scores = await Score.findAll({
		where: {
			fk_userId: userId
		}
	})
	return scores
}