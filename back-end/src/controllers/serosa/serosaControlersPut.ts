import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class SerosaControlersPut {
  static async updateSerosa(_req: Request, res: Response) {
    try {
      const { id, corte_630, corte_470, corte_320, corte_170 } =
        _req.params
      const postData = await prismaClient.serosa.findUnique({
        where: { id: Number(id) },
        select: {
          corte_630,
          corte_470,
          corte_320,
          corte_170
        },
      })
      const updatedSerosa = await prismaClient.serosa.update({
        where: { id: Number(id) || undefined },
        select: {
          corte_630,
          corte_470,
          corte_320,
          corte_170
        },
      })
      res.json(updatedSerosa)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "O ID de Serosa informado, não existe na tabela Serosa!",
      })
    }
  }
}
export default SerosaControlersPut
