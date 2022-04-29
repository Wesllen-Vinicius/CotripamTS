import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class AbateControlersGet {
  static async getAbateById(_req: Request, res: Response) {
    const id = parseInt(_req.params.id)
    console.log(id)
    const abate = await prismaClient.abate.findUnique({
      where: {
        id,
      },
    })
    if (!abate) {
      return res.status(404).json({ error: "Unidade não encontrada" })
    }
    return res.status(200).json(abate)
  }

  static async getAbate(_req: Request, res: Response) {
    const abate = await prismaClient.abate.findMany()
    return res.status(200).json(abate)
  }
}

export default AbateControlersGet
