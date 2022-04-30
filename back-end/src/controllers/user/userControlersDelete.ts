import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UserControlersDelete {
  static async deleteUser(_req: Request, res: Response) {
    try{
    const id = parseInt(_req.params.id)
    const deleteUser = await prismaClient.user.findUnique({
      where: {
        id,
      },
    })
    if (!deleteUser) {
      res.status(404).json({ messae: "Usuario não encontrada." })
      return
    }
    await prismaClient.user.delete({
      where: {
        id,
      },
    })
    return res.status(200).json({ message: "Deletado" })
  }catch (e) {
    console.error(e)
    res.status(500).json({
      error: 'Server error!',
    })
  }
}
}

export default UserControlersDelete
