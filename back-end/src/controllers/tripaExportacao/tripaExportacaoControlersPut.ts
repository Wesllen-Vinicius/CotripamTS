import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class TripaExportacaoControlersPut {
  static async updateExportacao(_req: Request, res: Response) {
    try {
      const { id, corte_630, corte_470, corte_320, corte_170 } = _req.params
      const postData = await prismaClient.tripaExportacao.findUnique({
        where: { id: Number(id) },
        select: {
          corte_630,
          corte_470,
          corte_320,
          corte_170,
        },
      })
      const updatedExportacao = await prismaClient.tripaExportacao.update({
        where: { id: Number(id) || undefined },
        select: {
          corte_630,
          corte_470,
          corte_320,
          corte_170,
        },
      })
      res.json(updatedExportacao)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error:
          "O ID de Tripa Exportação informado, não existe na tabela Exportação!",
      })
    }
  }
}
export default TripaExportacaoControlersPut
