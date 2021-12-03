import { DataTypes, Model, Optional } from 'sequelize'
import sequelize from '../index'

interface UserAttributes {
	id: number,
	firstName: string,
	lastName: string,
	email: string,
	password: string,
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
	public id!: number
	public firstName!: string
	public lastName!: string
	public email!: string
	public password!: string
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		sequelize
	}
)

export default User