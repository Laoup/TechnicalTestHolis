import ScoreInterface from "@interfaces/score.interface"
import { ScoreOutput } from "@models/score.model"

export const toScore = (scoreToConvert: ScoreOutput): ScoreInterface => {
	const { id, fk_userId, score, quizzTitle } = scoreToConvert
	return {
		id,
		fk_userId,
		quizzTitle,
		score
	}
}