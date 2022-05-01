import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ProdutoControlersPost {
  static async postProdutos(_req: Request, res: Response) {
    try {
      const {
        id,
        createdAt,
        modifiAt,
        sal_fino,
        sal_grosso,
        metabissulfito,
        peroxido,
        bombonas,
      } = _req.body

      if (!sal_fino) {
        res.status(422).json({
          message:
            "Quantidade de Sal Fino é obrigatorio para cadastro de Produto!",
        })
        return
      }
      if (!sal_grosso) {
        res.status(422).json({
          message:
            "Quantidade de Sal Grosso é obrigatorio para cadastro de Produto!",
        })
        return
      }
      if (!metabissulfito) {
        res.status(422).json({
          message:
            "Quant. de Metabissulfito é obrigatorio para cadastro de Produto!",
        })
        return
      }
      if (!peroxido) {
        res.status(422).json({
          message: "Quant. de Peroxido é obrigatorio para cadastro de Produto!",
        })
        return
      }
      if (!bombonas) {
        res.status(422).json({
          message: "Quant. de Bombonas é obrigatorio para cadastro de Produto!",
        })
        return
      }
      const ExistProdutoCadastrado = await prismaClient.produto.findUnique({
        where: { id },
      })
      if (ExistProdutoCadastrado) {
        res.status(422).json({ message: "Produto já cadastratado" })
        return
      }
      await prismaClient.produto.create({
        data: {
          id,
          createdAt,
          modifiAt,
          sal_fino,
          sal_grosso,
          metabissulfito,
          peroxido,
          bombonas,
        },
      })
      res.status(201).json({
        message: "Produto cadastrado com sucesso",
        data: {
          id,
          createdAt,
          modifiAt,
          sal_fino,
          sal_grosso,
          metabissulfito,
          peroxido,
          bombonas,
        },
      })
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }
}

export default ProdutoControlersPost
