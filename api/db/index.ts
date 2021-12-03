import { Dialect, Sequelize } from 'sequelize'
import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_DRIVER } from '../utils/config'

const dbName: string = DB_NAME
const dbUser: string = DB_USER
const dbPassword: string = DB_PASSWORD
const dbHost: string = DB_HOST
const dbDriver: Dialect = DB_DRIVER as Dialect

const sequelize = new Sequelize(
	dbName,
	dbUser,
	dbPassword,
	{
		host: dbHost,
		dialect: dbDriver,
		logging: false
	}
)

export default sequelize