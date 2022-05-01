import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UserControlersGet {
  static async getUsersById(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      console.log(id)
      const user = await prismaClient.user.findUnique({
        where: {
          id,
        },
      })
      if (!user) {
        return res.status(404).json({ error: "Usuario não encontrada" })
      }
      return res.status(200).json(user)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }

  static async getUsers(_req: Request, res: Response) {
    const user = await prismaClient.user.findMany()
    return res.status(200).json(user)
  }
}

export default UserControlersGet
