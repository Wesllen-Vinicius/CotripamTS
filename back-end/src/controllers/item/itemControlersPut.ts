import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ItemControlersPut {
  static async updateItem(_req: Request, res: Response) {
    try {
      const { id, nome, descricao } = _req.params
      const postData = await prismaClient.item.findUnique({
        where: { id: Number(id) },
        select: {
          nome,
          descricao,
        },
      })
      const updatedItem = await prismaClient.item.update({
        where: { id: Number(id) || undefined },
        select: {
          nome,
          descricao,
        },
      })
      res.json(updatedItem)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "O Item de Id informado, não existe na tabela!",
      })
    }
  }
}
export default ItemControlersPut
