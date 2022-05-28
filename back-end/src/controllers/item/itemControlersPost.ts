import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class ItemControlersPost {
  static async postItem(_req: Request, res: Response) {
    try {
      const { id, nome, descricao, quant, saidaData } = _req.body
      if (!nome) {
        res.status(422).json({
          message: "Nome do item é obrigatorio para cadastro!",
        })
        return
      }
      if (!descricao) {
        res.status(422).json({
          message: "Descricao é obrigatorio para cadastro!",
        })
        return
      }
      if (!quant) {
        res.status(422).json({
          message: "Quant. é obrigatorio para cadastro!",
        })
        return
      }
      const ExistItem = await prismaClient.item.findUnique({
        where: { id },
      })
      if (ExistItem) {
        res.status(422).json({ message: "Item já cadastratado" })
        return
      }
      await prismaClient.item.create({
        data: {
          id,
          nome,
          descricao,
          quant,
          saidaData,
        },
      })
      res.status(201).json({
        message: "Item criado com sucesso",
        data: {
          id,
          nome,
          descricao,
          quant,
          saidaData,
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

export default ItemControlersPost
