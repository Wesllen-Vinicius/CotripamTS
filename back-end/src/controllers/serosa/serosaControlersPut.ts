import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class SerosaControlersPut {
  static async updateSerosa(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      const data = _req.body
      const serosa = await prismaClient.serosa.findUnique({ where: { id } })
      if (!serosa) {
        return res.status(404).json({ error: "Registro não Existe!" })
      }
      const updateSerosa = await prismaClient.serosa.update({
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
export default SerosaControlersPut
