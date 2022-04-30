import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class AbateControlersDelete {
  static async deleteAbates(_req: Request, res: Response) {
    try {
    const id = parseInt(_req.params.id)
    const deleteabate = await prismaClient.abate.findUnique({
      where: {
        id,
      },
    })
    if (!deleteabate) {
      res.status(404).json({ messae: "abate não encontrada." })
      return
    }
    await prismaClient.abate.delete({
      where: {
        id,
      },
    })
    return res.status(200).json({ message: "Deletado" })
    } catch  (e) {
      console.error(e)
      res.status(500).json({
        error: 'Server error!',
      })
    }
  }
}

export default AbateControlersDelete
