import User, { UserInput, UserOutput } from '@models/user.model'
import { NotFound } from '@utils/error'

export const createUser = async (payload: UserInput): Promise<UserOutput> => {
	const user = await User.create(payload)
	return user
}

export const updateUser = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
	const user = await User.findByPk(id)
	if (!user) throw new NotFound('Utilisateur introuvable')
	const updatedUser = await (user as User).update(payload)
	return updatedUser
}

export const getUserById = async (id: number): Promise<UserOutput> => {
	const user = await User.findByPk(id)
	if (!user) throw new NotFound('Utilisateur introuvable')
	return user
}

export const getUserByEmail = async (email: string): Promise<UserOutput | null> => {
	const user = await User.findOne({
		where: {
			email
		}
	})
	if (!user) throw new NotFound('Utilisateur introuvable')
	return user
}

export const deleteUser = async (id: number): Promise<boolean> => {
	const deletedUser = await User.destroy({
		where: { id }
	})
	return !!deletedUser
}