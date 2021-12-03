import { Optional } from 'sequelize/types'

export type CreateUserDTO = {
	firstName: string,
	lastName: string,
	email: string,
	password: string
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'firstName' | 'lastName' | 'email' | 'password' >