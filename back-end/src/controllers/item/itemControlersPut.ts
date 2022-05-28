import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ItemControlersPut {
  static async updateItem(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      const data = _req.body
      const item = await prismaClient.item.findUnique({ where: { id } })
      if (!item) {
        return res.status(404).json({ error: "Registro não Existe!" })
      }
      const updateItem = await prismaClient.item.update({
        where: {
          id,
        },
        data,
      })
      return res.status(200).json(data)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "O ID do Registro informado, não existe na tabela!",
      })
    }
  }
}
export default ItemControlersPut
