import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface Payload {
  sub: string
}
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({ error: "UNAUTHORIZED (401)" })
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token, process.env.SECRET!) as Payload
    req.params.user_id = sub
    return next()
  } catch (err) {
    return res.status(401).end()
  }
}
