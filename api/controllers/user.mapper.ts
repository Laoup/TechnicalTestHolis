import UserInterface from "@interfaces/user.interface"
import { UserOutput } from "@models/user.model"

export const toUser = (user: UserOutput): UserInterface => {
	return {
		id: user.id,
		fistName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		password: user.password,
	}
}