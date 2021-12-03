import * as dotenv from 'dotenv'

dotenv.config()

let path
switch (process.env.NODE_ENV) {
	default:
		path = `${__dirname}/../.env`
		break;
}
dotenv.config({ path: path })

export const API_PORT: string = process.env.API_PORT as string
export const FRONT_CLIENT_URL: string = process.env.FRONT_CLIENT_URL as string
export const DB_NAME: string = process.env.DB_NAME as string
export const DB_USER: string = process.env.DB_USER as string
export const DB_PASSWORD: string = process.env.DB_PASSWORD as string
export const DB_HOST: string = process.env.DB_HOST as string
export const DB_DRIVER: string = process.env.DB_DRIVER as string
export const JWT_SECRET: string = process.env.JWT_SECRET as string