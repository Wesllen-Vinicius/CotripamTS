import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ItemControlersDelete {
  static async deleteItens(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      const deleteItem = await prismaClient.item.findUnique({
        where: {
          id,
        },
      })
      if (!deleteItem) {
        res.status(404).json({ messae: "Item não encontrado." })
        return
      }
      await prismaClient.item.delete({
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

export default ItemControlersDelete
