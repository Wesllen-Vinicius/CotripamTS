import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class TripaCozidaControlersGet {
  static async getTripaCozidaById(_req: Request, res: Response) {
    try{
    const id = parseInt(_req.params.id)
    const verificaExist = await prismaClient.tripaCozida.findUnique({
      where: {
        id,
      },
    })
    if (!verificaExist) {
      return res.status(404).json({ error: "Registro não encontrada" })
    }
    return res.status(200).json(verificaExist)
  }catch  (e) {
    console.error(e)
    res.status(500).json({
      error: 'Server error!',
    })
  }
}

  static async getTripaCozida(_req: Request, res: Response) {
    const user = await prismaClient.tripaCozida.findMany()
    return res.status(200).json(user)
  }
}

export default TripaCozidaControlersGet
