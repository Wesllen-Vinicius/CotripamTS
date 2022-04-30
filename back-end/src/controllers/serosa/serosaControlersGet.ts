import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class SerosaControlersGet {
  static async getSerosaById(_req: Request, res: Response) {
    try{
    const id = parseInt(_req.params.id)
    const verificaExist = await prismaClient.serosa.findUnique({
      where: {
        id,
      },
    })
    if (!verificaExist) {
      return res.status(404).json({ error: "Registro não encontrada" })
    }
    return res.status(200).json(verificaExist)
  }catch (e) {
    console.error(e)
    res.status(500).json({
      error: 'Server error!',
    })
  }
  }

  static async getSerosa(_req: Request, res: Response) {
    const user = await prismaClient.serosa.findMany()
    return res.status(200).json(user)
  }
}

export default SerosaControlersGet
