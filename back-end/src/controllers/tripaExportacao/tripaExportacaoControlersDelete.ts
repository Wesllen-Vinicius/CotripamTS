import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class TripaExportacaoControlersDelete {
  static async deleteExportcacao(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      const deleteRegistro = await prismaClient.tripaExportacao.findUnique({
        where: {
          id,
        },
      })
      if (!deleteRegistro) {
        res.status(404).json({ messae: "Registro não encontrada." })
        return
      }
      await prismaClient.tripaExportacao.delete({
        where: {
          id,
        },
      })
      return res.status(200).json({ message: "Deletado" })
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }
}

export default TripaExportacaoControlersDelete
