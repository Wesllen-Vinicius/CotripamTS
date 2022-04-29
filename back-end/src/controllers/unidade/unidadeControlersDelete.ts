import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UnidadeControlersDelete {
  static allUnidades(_req: Request, res: Response) {
    res.status(200).json({ message: "!" })
  }
  static async deleteUnidades(_req: Request, res: Response) {
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
  }
}

export default UnidadeControlersDelete
