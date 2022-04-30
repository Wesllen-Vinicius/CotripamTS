import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class TripaExportacaoControlersGet {
  static async getTripaExportacaoById(_req: Request, res: Response) {
    try{
    const id = parseInt(_req.params.id)
    const verificaExist = await prismaClient.tripaExportacao.findUnique({
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

  static async getTripaExportacao(_req: Request, res: Response) {
    try{
    const user = await prismaClient.tripaExportacao.findMany()
    return res.status(200).json(user)
  }catch  (e) {
    console.error(e)
    res.status(500).json({
      error: 'Server error!',
    })
  }
}
}

export default TripaExportacaoControlersGet
