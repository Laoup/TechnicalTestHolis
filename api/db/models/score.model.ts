import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../index'

interface ScoreAttributes {
	id: number,
	fk_userId: number,
	quizzTitle: string,
	score: number,
}

export interface ScoreInput extends Optional<ScoreAttributes, 'id'> {}
export interface ScoreOutput extends Required<ScoreAttributes> {}

class Score extends Model<ScoreAttributes, ScoreInput> implements ScoreAttributes {
	public id!: number
	public fk_userId!: number
	public quizzTitle!: string
	public score!: number
}

Score.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true
		},
		fk_userId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false
		},
		quizzTitle: {
			type: DataTypes.STRING,
			allowNull: false
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		sequelize
	}
)

export default Score