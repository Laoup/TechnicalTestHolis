import { Request, Response } from 'express'
import * as serviceUser from '@services/user.service'
import * as serviceTokens from '@services/tokens.service'
import { UpdateUserDTO } from '@dto/user.dto'
import UserInterface from '@interfaces//user.interface'
import * as mapperUser from '@controllers/user.mapper'
import { wrapAsync } from '@utils/wrapAsync'

export const create = wrapAsync(async (req: Request, res: Response) => {
	await serviceUser.possibleToCreate(req)
	await serviceUser.create(req)
	res.status(200).send('Un nouvel utilisateur a bien été créer')
})

export const update = async (id: number, payload: UpdateUserDTO): Promise<UserInterface> => {
	return mapperUser.toUser(await serviceUser.updateById(id, payload))
}

export const authenticateJWT = wrapAsync(async (req: Request, res: Response) => {
	const { email, password } = req.body
	
	const user: UserInterface = mapperUser.toUser(await serviceUser.getByEmail(email))
	await serviceUser.authenticateUser(user.password, password)
	const jwt: string = serviceTokens.createJWT(user)
	res.cookie('access_token', jwt, {
		// Validity 2 hours
		maxAge: 7200000,
	})
	res.status(200).send()
})

export const getById = async (id: number): Promise<UserInterface> => {
	return mapperUser.toUser(await serviceUser.getById(id))
}

export const deleteById = async (id: number): Promise<boolean> => {
	return await serviceUser.deleteById(id)
}
