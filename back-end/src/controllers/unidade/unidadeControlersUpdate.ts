import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UnidadeControlersUpdate {
  static async updateUnidades(req: Request, res: Response) {
    try {
      const id = req.params.id
      const data = req.body
      const unidades = await prismaClient.unidade.findById(id)
      if (!unidades) {
        return res.status(404).json({ error: "Unidade não Encontrada!" })
      }
      await prismaClient.unidade.updateOne({ _id: id }, data)
      return res.status(200).json(data)
    } catch (error: any) {
      error(`Error no sistema: ${error.message}`)
      return res.status(500).json({ error: "Por favor tente mais tarde!" })
    }
  }
}
export default UnidadeControlersUpdate
