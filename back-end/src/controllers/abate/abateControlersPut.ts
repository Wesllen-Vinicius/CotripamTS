import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class abateControlersPut {
  static async updateAbates(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      const data = _req.body
      const abate = await prismaClient.abate.findUnique({ where: { id } })
      if (!abate) {
        return res.status(404).json({ error: "Registro não Existe!" })
      }
      const updateAbate = await prismaClient.abate.update({
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
export default abateControlersPut
