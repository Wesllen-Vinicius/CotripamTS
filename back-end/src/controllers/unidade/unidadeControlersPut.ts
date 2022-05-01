import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UnidadeControlersPut {
  static async updateUnidades(_req: Request, res: Response) {
    try {
      const { id, nome, meta_tripaCozida, meta_serosa } = _req.params
      const postData = await prismaClient.unidade.findUnique({
        where: { id: Number(id) },
        select: {
          nome,
          meta_tripaCozida,
          meta_serosa,
        },
      })
      const updatedUnidades = await prismaClient.unidade.update({
        where: { id: Number(id) || undefined },
        select: {
          nome,
          meta_tripaCozida,
          meta_serosa,
        },
      })
      res.json(updatedUnidades)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "A Unidade de Id informado, não existe na tabela!",
      })
    }
  }
}
export default UnidadeControlersPut
