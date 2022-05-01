import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ProdutoControlersPut {
  static async updateProdutos(_req: Request, res: Response) {
    try {
      const { id, sal_fino, sal_grosso, metabissulfito, peroxido, bombonas } =
        _req.params
      const postData = await prismaClient.produto.findUnique({
        where: { id: Number(id) },
        select: {
          sal_fino,
          sal_grosso,
          metabissulfito,
          peroxido,
          bombonas,
        },
      })
      const updatedProduto = await prismaClient.produto.update({
        where: { id: Number(id) || undefined },
        select: {
          sal_fino,
          sal_grosso,
          metabissulfito,
          peroxido,
          bombonas
        },
      })
      res.json(updatedProduto)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "O Produto de Id informado, não existe na tabela Produtos!",
      })
    }
  }
}
export default ProdutoControlersPut
