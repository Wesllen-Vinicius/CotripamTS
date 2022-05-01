import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class abateControlersPut {
  static async updateAbates(_req: Request, res: Response) {
    try {
      const { id, abate, bois, vacas, condenados } = _req.params
      const postData = await prismaClient.abate.findUnique({
        where: { id: Number(id) },
        select: {
          abate,
          bois,
          vacas,
          condenados,
        },
      })
      const updatedAbates = await prismaClient.abate.update({
        where: { id: Number(id) || undefined },
        select: {
          abate,
          bois,
          vacas,
          condenados,
        },
      })
      res.json(updatedAbates)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "O Abate de Id informado, não existe na tabela Abates!",
      })
    }
  }
}
export default abateControlersPut
