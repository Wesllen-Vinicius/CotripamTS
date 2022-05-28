import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ItemControlersGet {
  static async getItemById(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      console.log(id)
      const item = await prismaClient.item.findUnique({
        where: {
          id,
        },
      })
      if (!item) {
        return res.status(404).json({ error: "Item não encontrado" })
      }
      return res.status(200).json(item)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }

  static async getItem(_req: Request, res: Response) {
    try {
      const item = await prismaClient.item.findMany()
      return res.status(200).json(item)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }
}

export default ItemControlersGet
