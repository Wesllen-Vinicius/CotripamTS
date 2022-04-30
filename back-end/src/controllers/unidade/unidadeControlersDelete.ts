import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UnidadeControlersDelete {
  static async deleteUnidades(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      const deleteUnidade = await prismaClient.unidade.findUnique({
        where: {
          id,
        },
      })
      if (!deleteUnidade) {
        res.status(404).json({ messae: "Unidade não encontrada." })
        return
      }
      await prismaClient.unidade.delete({
        where: {
          id,
        },
      })
      return res.status(200).json({ message: "Deletado" })
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }
}

export default UnidadeControlersDelete
