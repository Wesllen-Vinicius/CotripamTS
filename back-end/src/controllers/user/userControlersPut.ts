import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UserControlersPut {
  static async updateUsers(_req: Request, res: Response) {
    try {
      const { id, nome, email, nivelAcesso } =
        _req.params
      const postData = await prismaClient.user.findUnique({
        where: { id: Number(id) },
        select: {
          nome,
          email, 
          nivelAcesso
        },
      })
      const updatedUsers = await prismaClient.user.update({
        where: { id: Number(id) || undefined },
        select: {
          nome,
          email, 
          nivelAcesso
        },
      })
      res.json(updatedUsers)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "O Colaborador de Id informado, não existe na tabela!",
      })
    }
  }
}
export default UserControlersPut
