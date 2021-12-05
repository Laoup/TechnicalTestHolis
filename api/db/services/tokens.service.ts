import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "@utils/config";
import UserInterface from "@interfaces/user.interface";

export const createJWT = (user: UserInterface): string => {
	const { id } = user
	const payload: jwt.JwtPayload = {
		userId: id
	}
	return jwt.sign(payload, JWT_SECRET)
}

export const decodeJWT = (jwtString: string): jwt.JwtPayload => {
	return jwt.decode(jwtString) as jwt.JwtPayload
}
