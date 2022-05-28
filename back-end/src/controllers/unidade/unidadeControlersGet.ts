import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UnidadeControlersGet {
  static async getUnidadesById(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      console.log(id)
      const unidade = await prismaClient.unidade.findUnique({
        where: {
          id,
        },
      })
      if (!unidade) {
        return res.status(404).json({ error: "Unidade não encontrada" })
      }
      return res.status(200).json(unidade)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }

  static async getUnidades(_req: Request, res: Response) {
    try {
      const unidade = await prismaClient.unidade.findMany()
      return res.status(200).json(unidade)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }
}

export default UnidadeControlersGet
