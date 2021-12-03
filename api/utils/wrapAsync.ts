import { NextFunction, Request, Response } from "express"

export function wrapAsync(fn: any) {
	return function(req: Request, res: Response, next: NextFunction) {
		fn(req, res, next).catch(next)
	}
}