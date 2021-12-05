import 'module-alias/register'
import 'source-map-support/register'
import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'
import { API_PORT, FRONT_CLIENT_URL } from '@utils/config'
import dbInit from './db/init'
import routerSign from '@routes/sign.routes'
import routerScore from '@routes/score.routes'
import { middleware_error_handler, middleware_verify_token } from '@middlewares/index'

dbInit()

const corsOptions: cors.CorsOptions = {
	origin: FRONT_CLIENT_URL,
	credentials: true
}

const app: express.Application = express()

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routerSign)
app.use([middleware_verify_token], routerScore)

app.use(middleware_error_handler)

app.listen(API_PORT, () => {
	console.log(`api started and listen the port ${API_PORT}`)
})