import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ProdutoControlersGet {
  static async getProdutoById(_req: Request, res: Response) {
    try {
      const id = parseInt(_req.params.id)
      console.log(id)
      const produto = await prismaClient.produto.findUnique({
        where: {
          id,
        },
      })
      if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado!" })
      }
      return res.status(200).json(produto)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }

  static async getProduto(_req: Request, res: Response) {
    try {
      const produto = await prismaClient.produto.findMany()
      return res.status(200).json(produto)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }
}

export default ProdutoControlersGet
