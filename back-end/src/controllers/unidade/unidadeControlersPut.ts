import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class UnidadeControlersPut {
  static async updateUnidades(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      const data = _req.body
      const unidade = await prismaClient.unidade.findUnique({ where: { id } })
      if (!unidade) {
        return res.status(404).json({ error: "Registro não Existe!" })
      }
      const updateUnidade = await prismaClient.unidade.update({
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
export default UnidadeControlersPut
