import * as userDal from "@dal/user.dal";
import { UserInput, UserOutput } from "@models/user.model";
import { Request } from 'express'
import bcrypt from 'bcrypt'
import { BadRequest, Conflict, NotFound } from '../../utils/error'

export const possibleToCreate = async (req: Request) => {
	const { email } = req.body

	if (!!(await userDal.getUserByEmail(email)))
		throw new Conflict('Un utilisateur possédant cet email existe déjà.')
}

export const create = async (req: Request): Promise<boolean> => {
	const { body } = req

	const salt = bcrypt.genSaltSync(10)
	const hash = bcrypt.hashSync(body.password, salt)

	const user: UserInput = {
		firstName: body.firstName,
		lastName: body.lastName,
		email: body.email,
		password: hash,
	}
	return !!(await userDal.createUser(user))
}

export const authenticateUser = async (userTruePassword: string, password: string): Promise<void> => {
	const compareResult = await bcrypt.compare(password, userTruePassword)
	if (!compareResult)
		throw new BadRequest('Le mot de passe est invalide')
}

export const updateById = (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
	return userDal.updateUser(id, payload)
}

export const getById = async (id: number): Promise<UserOutput> => {
	const user: UserOutput | null = await userDal.getUserById(id)
	if (!user)
		throw new NotFound("Aucun utilisateur n'a été trouvé")
	return user
}

export const getByEmail = async (email: string): Promise<UserOutput> => {
	const user: UserOutput | null = await userDal.getUserByEmail(email)
	if (!user)
		throw new NotFound(`Aucun utilisateur avec l'email: ${email}. N'a été trouvé.`)
	return user
}

export const deleteById = (id: number): Promise<boolean> => {
	return userDal.deleteUser(id)
}