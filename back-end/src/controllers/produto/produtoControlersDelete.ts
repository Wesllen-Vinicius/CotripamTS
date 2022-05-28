import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ProdutoControlersDelete {
  static async deleteProdutos(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      const deleteProduto = await prismaClient.produto.findUnique({
        where: {
          id,
        },
      })
      if (!deleteProduto) {
        res.status(404).json({ messae: "Produto não encontrada." })
        return
      }
      await prismaClient.produto.delete({
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

export default ProdutoControlersDelete
